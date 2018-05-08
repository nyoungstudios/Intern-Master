from bs4 import BeautifulSoup
import requests
from firebase import firebase
from firebase_admin import db
import re
import FirebaseCredentials
import Server
import string


#https://github.com/ozgur/python-firebase - this is the python interface for Firebase documentation
#firebase = firebase.FirebaseApplication('https://intern-master.firebaseapp.com', None)
#result = firebase.get('/users', None)
#print(result) #need to deploy an app for this to work

def remove_punctuation(value):
    result = ""
    for c in value:
        # If char is not punctuation, add it to the result.
        if c in '#' or c in '+' or c in '-':
            result += c
        if c not in string.punctuation:
            result += c
    return result



#reference for the jobs
ref = db.reference('/')
jobs_ref = ref.child('jobs')

#reference for existing skills
skillDict = []
allSkills = Server.getSkillsList()

for data in allSkills.values():
    for key, value in data.items():
        if (key == 'skill'):
            skillDict.append(value)
            #print(value)


urls = ["http://www.intern.supply/"]


#webscraping setup
data = requests.get(urls[0]).text
soup = BeautifulSoup(data, "html.parser")


#for loop to find all companies and urls from intern.supply
i = 0
for elem in soup.body.find_all("a"):

    if (elem.h3 != None):
        lengthOfCompString = len(str(elem.h3))
        company = str(elem.h3)[4:lengthOfCompString-5]
        url = elem.get('href')

        #regular expression to match internal url on intern.supply
        pattern = re.compile('\.\/.*\.html')
        if pattern.match(url):
            url = "http://www.intern.supply" + url[1:]

        print(company)
        print(url)


        #start of skills addition
        try:
            applicationData = requests.get(url).text
        except:
            print("failed request, did not add to database")
            continue

        applicationSoup = BeautifulSoup(applicationData, "html.parser")

        [s.extract() for s in applicationSoup(['style', 'script', '[document]', 'head', 'title'])]

        # this is all the visible text
        applicationVisible = applicationSoup.getText()
        #print(applicationVisible)

        #this is all the visible text in an list split by blank space
        applicationTextParts = applicationVisible.split(' ')


        companySkills = {}
        for skill in skillDict:
            for word in applicationTextParts:

                #strips word of all punctuation; word is now a single word from the webpage that was scraped
                word = repr(word)[1:-1].lower()
                #old way to remove string
                #translator = str.maketrans('','', string.punctuation)
                #word = word.translate(translator)
                word = remove_punctuation(word)
                #print(word)


                if (word == skill):

                    #code to check for duplicates
                    flag = 1
                    for addedSkills in companySkills:
                        if (companySkills[addedSkills] == skill):
                            flag = 0

                    if (flag):
                        #adds skills to list
                        companySkills[len(companySkills)] = skill


        for a in companySkills:
            print(str(a) + ": " + companySkills[a])

        if not companySkills:
            print("no skills")
            companySkills[len(companySkills)] = "none"
            #continue

        jobs_ref.push({
            'jobApplicationID': i,
            'company': company,
            'url': url,
            'skills': companySkills

        })
        i = i + 1
        #if (i ==20):
        #    break


print("We have " + str(i) + " number of jobs in the database.")




