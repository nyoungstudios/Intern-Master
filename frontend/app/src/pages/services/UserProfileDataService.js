class UserProfileDataService {
    
    constructor(FirebaseDataService) { 
        this.FirebaseDataService = FirebaseDataService;
        this.ref = firebase.database().ref().child("users");
        
    }

    getUserProfile(uid){
        var userRef = this.ref.orderByChild('userID').equalTo(uid)
        var userProfile = this.FirebaseDataService.array(userRef);
        return userProfile;
            
    }

}

export default ['FirebaseDataService', UserProfileDataService];