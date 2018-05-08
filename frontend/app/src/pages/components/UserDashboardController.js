/**
 * Created by jay on 2018/2/10.
 */
import '../services/states'

class UserDashboardController {
    constructor($mdDialog, Upload, $window, $element, $mdToast, $scope, FirebaseDataService, UserProfileDataService) {

        this.$onInit = () => {

            FirebaseDataService.auth.$onAuthStateChanged((firebaseUser) => {
                if (firebaseUser) {
                    $scope.$apply(function () {
                        // this.uid = firebaseUser.uid;
                        $scope.uid = firebaseUser.uid;
                        UserProfileDataService.getUserProfile($scope.uid).$loaded().then((userProfile) => {
                            $scope.userProfile = userProfile;
                            $scope.user = userProfile[0];
                            // applied pie chart
                            if($scope.user.applied[0] == "none"){
                                $scope.data[0] = 0;
                            }else{
                                $scope.data[0] = $scope.user.applied.length;
                            }
                            
                            var companyRef = firebase.database().ref().child("jobs");
                            var companyArr = FirebaseDataService.array(companyRef);
                            companyArr.$loaded().then((arr) => {
                                $scope.data[1] = arr.length - $scope.data[0];
                            });
    
    
                        });
    
                    });
                } else {
                    $scope.$apply(function () {
                        $scope.email = "User Loading failed";
                    });
                }
            });
        }

        this.FirebaseDataService = FirebaseDataService;
        this.$element = $element;
        this.$mdToast = $mdToast;
        this.$scope = $scope;
        this.Upload = Upload;
        this.$window = $window;
        this.$mdDialog = $mdDialog;

        $scope.labels = ["Applied", "Todo"];
        $scope.data = [0, 0];
        $scope.states = states
        // fixed the this binding issue
        $scope.submitAvator = this.submitAvator.bind(this);
        $scope.submitResume = this.submitResume.bind(this);

        $scope.$watch('user.skills',()=>{
            // if($scope.user.skills[0] == ""){

            //     $scope.user.skills = [];
            // }
        
            if(this.$scope.user.skills === null || this.$scope.user.skills == []){
                this.$scope.user.skills == [""];
            }
        });



    }
    submit() {
        if ((typeof this.$scope.user.birthday) != "string" && this.$scope.user.birthday != null){

            this.$scope.user.birthday = this.$scope.user.birthday.toISOString();
        }

        
        this.$scope.userProfile.$save(0).then(() => {
            this.$mdToast.show(
                this.$mdToast.simple()
                .textContent('Submitted')
                .position("top right")
                .hideDelay(3000)
            );
        }, () => {
            this.$mdToast.show(
                this.$mdToast.simple()
                .textContent('Error')
                .position("top right")
                .hideDelay(3000)
            );
        });
    }
    submitAvator(file, errFiles) {
        var refStr = "avator/" + this.$scope.uid;
        this.avatorRef = firebase.storage().ref(refStr);
        this.storage = this.FirebaseDataService.storage(this.avatorRef);
        var uploadTask = this.storage.$put(file);
        uploadTask.$complete((snapshot) => {
            this.$scope.avatorUrl = snapshot.downloadURL;
            // update user info
            this.$scope.user.avatorUrl = snapshot.downloadURL;
            this.$scope.userProfile.$save(0);
            this.showToast("Upload complete");
        });
        uploadTask.$error((error) => {
            this.showToast(error);
        });

    }

    submitResume(file, errFiles) {
        var refStr = "resume/" + this.$scope.uid;
        this.resumeRef = firebase.storage().ref(refStr);
        this.storage = this.FirebaseDataService.storage(this.resumeRef);
        var uploadTask = this.storage.$put(file);
        uploadTask.$complete((snapshot) => {
            this.$scope.resumeUrl = snapshot.downloadURL;
            // update user info
            this.$scope.user.resumeUrl = snapshot.downloadURL;
            this.$scope.userProfile.$save(0);
            this.showToast("Upload complete");
        });
        uploadTask.$error((error) => {
            this.showToast(error);
        });
    }
    showToast(msg) {
        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent(msg)
            .position("top right")
            .hideDelay(2000)
        );
    }

    previewResume() {
        this.$mdDialog.show({
            controller: ($scope, $sce) => {
                $scope.user = this.$scope.user;
                $scope.trust = function (url) {
                    return $sce.trustAsResourceUrl(url);
                }
            },
            templateUrl: 'src/pages/components/resume.tmpl.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: false
        })
    }

    resetAppliedStatus(){

        this.$scope.user.applied = {
            0:"none"
        }

        this.$scope.userProfile.$save(0).then(()=>{
            this.$scope.data[1] = this.$scope.data[1] + this.$scope.data[0];
            this.$scope.data[0] = 0;
            
            this.showToast("Reset complete");
        });
    }

    submitSkills(){
        this.$scope.userProfile.$save(0).then(()=>{
            this.showToast("Skills submitted");
        });
    }



}
export default UserDashboardController;