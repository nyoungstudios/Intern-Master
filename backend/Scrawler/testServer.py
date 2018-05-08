
import Server
import FirebaseCredentials
from firebase_admin import db

def testGetJobApplicaitons():
    return Server.getJobApplications()

def testAddCompanyLogos():
    return Server.addCompanyLogos()

def addJobSkills():
    #just edit skills.txt and run this to add the skills to firebase

    file = open("skills.txt", "r")

    ref = db.reference('/')
    skills_ref = ref.child('skillsList')
    i = 0
    for line in iter(file):
        skillValue = line[:len(line)-1]
        skills_ref.push({
            'skill': skillValue,
            'skillID': i
        })
        print(skillValue)
        i = i + 1;

    print("We have " + str(i) + " number of jobs in the database.")

def printSkillsInServer():
    skillDict = []
    allSkills = Server.getSkillsList()

    for data in allSkills.values():
        for key, value in data.items():
            if (key == 'skill'):
                skillDict.append(value)
                print(value)


    if (skillDict.__contains__('java')):
        print('yes java')

    if (skillDict.__contains__('strange')):
        print('yes strange')

    if (skillDict.__contains__('html')):
        print('yes html')


