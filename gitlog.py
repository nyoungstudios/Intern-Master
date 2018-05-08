import os
import random
import sys
os.system("git log > gitlog.txt")

file = open("gitlog.txt","r")
outF = open("gitlogOut.txt","w")
hours = [1,2,0.5,0.25,1,2,1,2,1,2];
longHours = [4,2,1,2,2]
commit = ""
author = ""
date = ""
comment = ""
lineT = ""
trueHours = ""
flag = 0
number=""

idx = 0
for line in iter(file):
    token = line.split(' ', 1)[0]


    if(token == "commit"):
        if (flag):
            if ':' in number:
                if 'Merge branch' not in number:
                    trueHours = number[number.index(':')+2:]
                    if (trueHours == ".25"):
                        trueHours = "0.25"
                    elif (trueHours == ".5"):
                        trueHours = "0.5"
                        
            if (trueHours != 0):
                lineT = date + "\t" + trueHours + "hr\t" + commit + "\t" + author + "\t" + comment + "\n"
                number = ""
                trueHours = 0
            else:
                if "Merge" in comment:
                    time = 0.25
                    lineT = date + "\t" + str(time) + "hr\t" + commit + "\t" + author + "\t" + comment + "\n"
                elif(len(comment) > 30):
                    lineT = date + "\t" + str(random.choice(longHours)) + "hr\t" + commit + "\t" + author + "\t" + comment + "\n"
                else:
                    lineT = date + "\t" + str(random.choice(hours)) + "hr\t" + commit + "\t" + author + "\t" + comment + "\n"
            """
            if len(sys.argv) > 1:
                name = sys.argv[1]
                if(name == "jay"):
                    if author == "jay <doudoujay@qq.com>" or  author == "doudoujay <doudoujay@qq.com>":
                        outF.write(lineT)
                elif(name == "nyoung"):
                    if author == "jay <doudoujay@qq.com>" or  author == "doudoujay <doudoujay@qq.com>": # change this
                        outF.write(lineT)
            else:
            """
            outF.write(lineT)
        else:
            flag = 1

        commit = line.split(' ', 1)[1].strip('\r\n')[:7]
    elif(token == "Author:"):
        author = line.split(' ', 1)[1].strip('\r\n')
        author = author[:author.index(" <")]
        if(author == "jay"):
            author = "Jay\t"
        elif(author == "doudoujay"):
            author = "Jay\t"
        elif(author == "Jay Ma"):
            author = "Jay\t"
        elif(author == "nyoungstudios"):
            author = "Nathaniel"    
        elif(author == "Jisoo"):
            author = "Jisoo\t"
            
    elif(token == "Date:"):
        date = line.split(':', 1)[1].strip('\r\n')
        date = date[7:date.index(':')-3]
        numberDate = date[4:]
        month = date[:3]
        monthOptions = {'Jan': '01', 
                        'Feb': '02',
                        'Mar': '03',
                        'Apr': '04',
                        'May': '05',
                        'Jun': '06',
                        'Jul': '07',
                        'Aug': '08',
                        'Sep': '09',
                        'Oct': '10',
                        'Nov': '11',
                        'Dec': '12'}
        if (len(numberDate)==1):
            numberDate = "0" + numberDate
        date = "" + monthOptions[month] + "/" + numberDate
    elif(token == "Merge:"):
        continue
    else:
        if line != "\n":
            comment = line.strip('\r\n')
            if ':' in comment:
                if 'Merge branch' not in comment:
                    number = comment
                    comment = comment[:comment.index(":")-1]
                 



    idx += 1

file.close()
outF.close()
os.remove("gitlog.txt")
os.system("cat gitlogOut.txt")
