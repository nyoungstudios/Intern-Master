from bs4 import BeautifulSoup
import requests
from firebase import firebase
from firebase_admin import db
import re
import FirebaseCredentials





ref = db.reference('/')
openSource_ref = ref.child('openSourceProjects')


urls = ["https://medium.com/@likid.geimfari/the-list-of-interesting-open-source-projects-2daaa2153f7c"]


#webscraping setup
data = requests.get(urls[0]).text
#print(data)
soup = BeautifulSoup(data, "html.parser")
#print(soup)

#value to hold skills
skills = {}

i = 0

#for loop to find all companies and urls from intern.supply

for elem in soup.body.find_all(["p", {"class":"graf graf--p graf--leading"}, "h3", {"class":"graf graf--p graf--leading"}]):

    print(elem)
    if (str(elem).__contains__("#") and str(elem).__contains__("<h3")):
        skills = {}

        if (str(elem).__contains__("C#")):
            skills[len(skills)] = "C#"
            print("---------" + skills[0])
        else:
            value = str(elem)[str(elem).rfind("#")+2:-5]
            #splits if more than one skill
            if (value.__contains__("/")):
                value1 = value[:value.find("/")]
                value2 = value[value.find("/")+1:]

                #removes whitespace
                value1 = ''.join(value1.split())
                value2 = ''.join(value2.split())

                #adds to list
                skills[len(skills)] = value1
                skills[len(skills)] = value2
                print("---------" + skills[0])
                print("---------" + skills[1])
            else:
                value = ''.join(value.split())
                skills[len(skills)] = value
                print("---------" + skills[0])

    else:

        url = str(elem)[str.find(str(elem), "https://github"):]
        url = url[:str.find(url, "\"")]
        name = str(elem)[str.find(str(elem), "<em class=\"markup--em markup--p-em\">") + len("<em class=\"markup--em markup--p-em\">"):]
        name = name[:str.find(name, "</em>")]
        print(name)
        print(url)


        if (name and url and not name.__contains__("--")):
            openSource_ref.push({
                'Name':name,
                #'description': name,"h4\" id=\"4a77\" name=\"4a77\">If you are interested in Open Source and are considering to join the community of Open Source developers, it is possible that in this list you will find the project that will suit you (In fact I am sure that you will find).</p"
                'url': url,
                'skills': skills,
                'openSourceProjectID': i
            })
            i = i + 1


print("We have " + str(i) + " number of open source projects in the database.")




