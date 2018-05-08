import firebase_admin
from firebase_admin import credentials

#Usage: just import this at the top of the python file to initialize the firebase credentials

#setup for firebase
cred = credentials.Certificate('../intern-master-firebase-adminsdk-g8f9c-0f710cf04a.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://intern-master.firebaseio.com'
})