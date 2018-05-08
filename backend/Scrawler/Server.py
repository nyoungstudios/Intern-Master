from flask import Flask
from flask_cors import CORS
from flask import request
from firebase_admin import db
from firebase_admin import auth
#scrawl linkedin information
#from pylinkedin.utils import CustomRequest
#from pylinkedin.scraper import LinkedinItem
import requests
import FirebaseCredentials
import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def printToWeb():
    return "Hello World!"




def getJobApplications():
    ref = db.reference('jobs/')
    return ref.get()

def getSkillsList():
    ref = db.reference('skillsList/')
    return ref.get()

def getUserInfo():
    ref = db.reference('users/')
    return ref.get()

def getProjects():
    ref = db.reference('openSourceProjects/')
    return ref.get()

def getUserLinkedIn(linkedinID):
    # Need to fix banned problem
    #l = LinkedinItem(url='https://www.linkedin.com/in/' + linkedinID)
    #l.name # to get the name
    #l.skills # to get the skills
    #l.publications  # to get the publications
    #print(l.to_dict()) # to get all infos
    print("")



def addCompanyLogos():
    subscription_key = "c90fe047561b428aa7fb56b3a418ff25"
    search_url = "https://api.cognitive.microsoft.com/bing/v7.0/images/search"


    allJobApplicaitons = getJobApplications()
    for code, data in allJobApplicaitons.items():
        for key, value in data.items():
            if (key == "company"):
                company = value + " logo"
                print(company)

                #microsoft cognitive services api call
                headers = {"Ocp-Apim-Subscription-Key": subscription_key}
                params = {"q": company, "safeSearch": "Strict", "aspect": "Wide", "count":7}
                response = requests.get(search_url, headers=headers, params=params)
                response.raise_for_status()
                search_results = response.json()

                flag = 1
                download_url = ""
                photo_metadata = {}
                i = 0
                for elem in search_results['value']:
                    hostPageUrl = elem['hostPageUrl']

                    #prioritizes photos from wikipedia since they tend to be of higher quality and more accurate
                    if "wikipedia" in hostPageUrl:
                        flag = 0
                        download_url = search_results['value'][i]['contentUrl']
                        photo_metadata = search_results['value'][i]
                        print()

                    i = i + 1

                if(flag):
                    download_url = search_results['value'][0]['contentUrl']
                    print("not")
                    photo_metadata = search_results['value'][0]
                else:
                    print("wiki")


                #print(photo_metadata)
                print(download_url)
                ref = db.reference('/')
                companyImages_ref = ref.child('companyImages')

                companyImages_ref.push({
                    'company': value,
                    'url': download_url
                })

                #jobs_ref = ref.child('jobs')




#adds a new variable to count number of clicks and times applied for job application
def addJobVariables():
    ref = db.reference('/')
    jobs_ref = ref.child('jobs')
    for ranName in jobs_ref.get():
        val_ref = jobs_ref.child(str(ranName))
        val_ref.update({
            'numberOfClicks': 0,
            'numberApplied':0
        })


#adds a new variable to count number of clicks for open source projects
def addProjectVariables():
    ref = db.reference('/')
    jobs_ref = ref.child('openSourceProjects')
    for ranName in jobs_ref.get():
        val_ref = jobs_ref.child(str(ranName))
        val_ref.update({
            'numberOfClicks': 0
        })


def userPushFirebase(user_ref, first, last, email, id):
    user_ref.push({
        'address': "",
        'applied': {
            '0': "none"
        },
        'avatorUrl': "http://via.placeholder.com/150x150",
        'biography': "",
        'bookmark': {
            '0': "none"
        },
        'city': "",
        'college': {
            'schoolName': "",
            'degree': "",
            'major': "",
            'startDate': "",
            'endDate': ""
        },
        'email': email,
        'firstName': first,
        'industry': "",
        'lastName': last,
        'location': "",
        'positions': {
            'title': "",
            'company': "",
            'summary': "",
            'startDate': "",
            'endDate': "",
            'isCurrent': True
        },
        'postalCode': "",
        'resume': {

        },
        'resumeUrl': "",
        'skills': {
            '0': ""
        },
        'state': "",
        'userID': id,
        'website': ""
    })

#setup to add new user from Firebase Auth to the database
@app.route('/updateUsers', methods=['GET'])
def addNewUsers():
    ref = db.reference('/')
    user_ref = ref.child('users')

    usersInFirebaseRef = db.reference('users/')

    count = 0
    page = auth.list_users()
    while page:
        for user in page.users:
            flag = 1
            print("User: " + user.uid)
            print(user.email)
            print(user.display_name)

            #gets values of hashes in user class
            userList = usersInFirebaseRef.get()

            #code to detect if user already has been added in Firebase
            for hash, data in userList.items():
                #print(data.get('email'))
                #print(data.get('userID'))
                if (data.get('userID') == user.uid):
                    flag = 0

            if (flag):

                if (user.display_name is None):
                    #handles None type (if user auth in firebase does not have a name)
                    userPushFirebase(user_ref, "", "", user.email, user.uid)
                elif (user.display_name.__contains__(" ")):
                    #splits name into first and last
                    nameSplit = user.display_name.split(" ")
                    userPushFirebase(user_ref, nameSplit[0], nameSplit[1], user.email, user.uid)
                else:
                    #does this if all else fails
                    userPushFirebase(user_ref, "", "", user.email, user.uid)

                print("added new user")
                count = count + 1

            else:
                print("user already in database")


            print("------------")
        page = page.get_next_page()

    print("Added " + str(count) + " users to the database")
    return "Added " + str(count) + " users to the database"



#admin function to reset data for a particular user
def resetUser(userID):
    #flag for error message
    flag = 0
    usersInFirebaseRef = db.reference('users/')
    userList = usersInFirebaseRef.get()
    for hash, data in userList.items():

        if (data.get('userID') == userID):
            print("Reseting this user's data: " + data.get('userID'))

            user_ref = usersInFirebaseRef.child(hash)
            user_ref.update({
                'address': "",
                'applied': {
                    '0': "none"
                },
                'avatorUrl': "http://via.placeholder.com/150x150",
                'biography': "",
                'bookmark': {
                    '0': "none"
                },
                'city': "",
                'college': {
                    'schoolName': "",
                    'degree': "",
                    'major': "",
                    'startDate': "",
                    'endDate': ""
                },
                'industry': "",
                'location': "",
                'positions': {
                    'title': "",
                    'company': "",
                    'summary': "",
                    'startDate': "",
                    'endDate': "",
                    'isCurrent': True
                },
                'postalCode': "",
                'resume': {

                },
                'resumeUrl': "",
                'skills': {
                    '0': ""
                },
                'state': "",
                'website': ""
            })


            #for error message
            flag = 0
            break
        else:
            flag = 1

    if (flag):
        print("cannot find this userID")
        return "cannot find this userID"
    else:
        return "success - reset user information"


def addJobsToNews():
    ref = db.reference('/')
    user_ref = ref.child('news')

    jobsData = getJobApplications()
    for hash, data in jobsData.items():
        print(hash)
        print(data)
        user_ref.push({
            'content' : "",
            'headerimg': "",
            'subtitle': "",
            'title': "",
            'type': "jobs",
            'url': ""
        })

@app.route('/getUserJobSuggestions<string:userID>', methods=['GET'])
def getUserJobSuggestions(userID):
    #checks if no user is passed
    if (len(userID) == 0):
        return "No user passed"
    #variable to hold data from firebase user class
    userData = getUserInfo()
    #variable to hold data from firebase jobs class
    jobsData = getJobApplications()

    #flag to check if no user is found
    flag = 1
    #variable to hold returned user skills
    skills = {}

    #loops through data to find userID match
    for hash, data in userData.items():
        if (data.get('userID') == userID):
            flag = 0
            skills = data.get('skills')
            break
    #flag checks if user is not found
    if (flag):
        return "Cannot find this user"

    print(skills)

    #variable to store list of matching companies
    companyList = {}

    for hash, data in jobsData.items():

        jobSkills = data.get('skills')

        if (jobSkills[0] == 'none'):
            #if statement skips jobs without listed skills
            continue
        elif (any(elem in jobSkills for elem in skills)):
            #if statement checks if any of the skills of the user match any of the ones listed in the job application
            print(hash)
            print(jobSkills)
            companyList[len(companyList)] = hash

        print("yes")

    print(companyList)
    print(json.dumps(companyList))
    #just testing how to read it
    #dump = json.dumps(companyList)
    #load = json.loads(dump)
    #print(load.get("0"))
    return json.dumps(companyList)

@app.route('/getUserProjectSuggestions<string:userID>', methods=['GET'])
def getUserProjectSuggestions(userID):
    # checks if no user is passed
    if (len(userID) == 0):
        return "No user passed"
    # variable to hold data from firebase user class
    userData = getUserInfo()
    # variable to hold data from firebase open source projects class
    projectsData = getProjects()

    # flag to check if no user is found
    flag = 1
    # variable to hold returned user skills
    skills = {}

    # loops through data to find userID match
    for hash, data in userData.items():
        if (data.get('userID') == userID):
            flag = 0
            skills = data.get('skills')
            break
    # flag checks if user is not found
    if (flag):
        return "Cannot find this user"

    print(skills)

    #variable to store list of matching open source projects
    projectList = {}

    for hash, data in projectsData.items():

        projectSkills = data.get('skills')


        projectSkills = [item.lower() for item in projectSkills]
        #print(projectSkills)

        if (projectSkills[0] == 'none'):
            #if statement skips jobs without listed skills
            continue
        elif (any(elem in projectSkills for elem in skills)):
            #if statement checks if any of the skills of the user match any of the ones listed in the job application
            print(hash)
            print(projectSkills)
            projectList[len(projectList)] = hash

        print("yes")


    print(projectList)
    print(json.dumps(projectList))
    return json.dumps(projectList)

#main starts here
if (__name__ == '__main__'):
    app.run(debug=True)