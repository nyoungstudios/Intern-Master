/**
 * Created by jay on 2018/2/13.
 */
class authenticationController {
    constructor(FirebaseDataService) {

        this.email = "";
        this.password = "";
        this.errorMsg = "";
        this.FirebaseDataService = FirebaseDataService;


    }

    login() {
        this.FirebaseDataService.auth.$signInWithEmailAndPassword(this.email, this.password).then((firebaseUser) => {
            console.log("Signed in as:", firebaseUser.uid);
        }).catch(function (error) {
            // this.errorMsg = error.code;
            alert(error.code);
            console.error("Authentication failed:", error);
        });
    }

    signup() {
        this.FirebaseDataService.auth.$createUserWithEmailAndPassword(this.email, this.password).then((firebaseUser) => {
            this.updateAllUser();
            console.log("Signed up as :", firebaseUser.uid);
        }).catch(function (error) {
            alert(error.code);
            console.error("Authentication failed:", error);
        })
    }

    signinWithGoogle() {
        this.FirebaseDataService.auth.$signInWithPopup("google").then((result) => {
            this.updateAllUser();
            console.log("Signed up as :", firebaseUser.uid);
        }).catch(function (error) {
            console.error("Authentication failed:", error);
        });
    }
    signinWithGithub() {
        this.FirebaseDataService.auth.$signInWithPopup("github").then((result) => {
            this.updateAllUser();
            console.log("Signed up as :", firebaseUser.uid);
        }).catch(function (error) {
            console.error("Authentication failed:", error);
        });
    }
    signinWithTwitter() {
        this.FirebaseDataService.auth.$signInWithPopup("twitter").then((result) => {
            this.updateAllUser();
            console.log("Signed up as :", firebaseUser.uid);
        }).catch(function (error) {
            console.error("Authentication failed:", error);
        });
    }
    signinWithFacebook() {
        this.FirebaseDataService.auth.$signInWithPopup("facebook").then((result) => {
            this.updateAllUser();
            console.log("Signed up as :", firebaseUser.uid);
        }).catch(function (error) {
            console.error("Authentication failed:", error);
        });
    }

    updateAllUser() {
        console.log("dsadasdsa");
        $.ajax({
            url: "https://intern-master-deploy.herokuapp.com/updateUsers",
            method: 'GET',
            crossDomain: true,
            success: function (response) {
                console.log(response);
                location.reload();
                // this.$route.reload();
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
    }
}

export default authenticationController;