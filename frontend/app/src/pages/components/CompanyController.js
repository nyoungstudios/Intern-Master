class CompanyController {
    constructor($mdDialog, $window, $filter, $scope, CompanyDataService, FirebaseDataService, UserProfileDataService) {
        this.$onInit = () => {

        }
        $scope.loaded = false;
        CompanyDataService
            .loadAllCompanies().$loaded()
            .then((companies) => {

                this.companies = companies;
                this.companiesResult = companies;

                FirebaseDataService.auth.$onAuthStateChanged((firebaseUser) => {
                    if (firebaseUser) {
                        $scope.$apply(() => {
                            // this.uid = firebaseUser.uid;
                            $scope.uid = firebaseUser.uid;
                            UserProfileDataService.getUserProfile($scope.uid).$loaded().then((userProfile) => {
                                $scope.userProfile = userProfile;
                                $scope.user = userProfile[0];
                                $scope.loaded = true;
                                console.log(1);
                            });

                        });

                    } else {
                        $scope.$apply(() => {

                            $scope.email = "User Loading failed";
                        });
                    }
                });
            });

        var self = this;

        this.$onDestroy = () => {
            console.log("died");
        }
        this.$filter = $filter;

        this.$scope = $scope;
        this.$window = $window;
        this.$mdDialog = $mdDialog;


        $scope.loaded = false;
        self.CompanyDataService = CompanyDataService;
        $scope.bookmarkStyle = this.bookmarkStyle.bind(this);

        // console.log($scope.user);

        $scope.matchSkill = false;

        $scope.$watch('matchSkill',  function(newValue, oldValue, scope)  {
            console.log(oldValue);
            if ($scope.matchSkill == false) {
                self.companiesResult = self.companies;
                return;

            } else {
                self.matchMySkills();
            }

        }, true);

        $scope.skills = [];

        $scope.$watch('skills', function () {

            if ($scope.skills.length === 0) {
                // console.log('!!!');
                self.companiesResult = self.companies;
                return;

            }
            self.companiesResult = [];

            // console.log(self.companies);
            var i;
            for (i = 0; i < self.companies.length; i++) {
                for (var j in $scope.skills) {
                    if (self.companies[i]['skills'].includes($scope.skills[j])) {
                        self.companiesResult.push(self.companies[i]);
                        break;
                    }

                }

            }
        }, true);


        $scope.bookmarkFilter = false;
        $scope.$watch('bookmarkFilter', function () {
            if ($scope.bookmarkFilter == true) {
                self.companiesResult = [];
                for (var i in self.companies) {
                    if ($scope.user.bookmark.includes(self.companies[i].$id)) {
                        self.companiesResult.push(self.companies[i]);
                    }
                }
            } else {
                self.companiesResult = self.companies;
                return;
            }
        }, true);

        $scope.appliedFilter = false;
        $scope.$watch('appliedFilter', function () {
            if ($scope.appliedFilter == true) {
                self.companiesResult = [];
                for (var i in self.companies) {
                    if ($scope.user.applied.includes(self.companies[i].$id)) {
                        self.companiesResult.push(self.companies[i]);
                    }
                }
            } else {
                self.companiesResult = self.companies;
                return;
            }
        }, true)


    }

    getImage(companyName) {
        // var url = this.CompanyDataService.cachedImages[companyName];
        // return '';
        return "https://us-central1-intern-master.cloudfunctions.net/companyLogo?name=" + companyName;

    }

    applyCompanay(jobId, url) {
        this.$window.open(url, '_blank');
        var index = this.$scope.user.applied.indexOf(jobId);
        if (index < 0) { //did not applied before
            this.showDialog(jobId);
        }

    }

    showDialog(jobId) {
        // Appending dialog to document.body to cover sidenav in docs app

        var confirm = this.$mdDialog.confirm()
            .title('Applied')
            .textContent('Did you applied for this job application?')
            .ariaLabel('Applied')
            .ok('Yes')
            .cancel('No');

        this.$mdDialog.show(confirm).then(() => {
            if (this.$scope.user.applied[0] == "none") {
                this.$scope.user.applied = [jobId];
            } else {
                this.$scope.user.applied.push(jobId);

            }
            this.$scope.userProfile.$save(0);
        }, () => {
            console.log("Not applied");
        });
    }

    bookmark(jobId) {
        // test bookmark
        // console.log(jobId);
        var index = this.$scope.user.bookmark.indexOf(jobId);
        // console.log(index);
        if (index >= 0) {
            // delete bookmark
            this.$scope.user.bookmark.splice(index, 1);
            if (this.$scope.user.bookmark.length == 0) {
                this.$scope.user.bookmark.push("none");
            }


        } else {
            // add bookmark
            if (this.$scope.user.bookmark[0] == "none") {
                this.$scope.user.bookmark = [jobId];
            } else {
                this.$scope.user.bookmark.push(jobId);

            }

        }
        this.$scope.userProfile.$save(0);

    }
    isBookmark(jobId) {
        var index = this.$scope.user.bookmark.indexOf(jobId);
        return (index >= 0) ? true : false;
    }


    bookmarkStyle(jobId) {
        if(this.$scope.loaded == false) return;
        if (this.isBookmark(jobId)) {
            return "fa-star"
        } else {
            return "fa-star-o"
        }
    }

    isApplied(jobId) {
        var index = this.$scope.user.applied.indexOf(jobId);
        return (index >= 0) ? true : false;
    }

    appliedStyle(jobId) {
        if(this.$scope.loaded == false) return;
        if (this.isApplied(jobId)) {
            return "appliedCard"
        } else {
            return ""
        }
    }

    matchMySkills() {
        console.log("https://intern-master-deploy.herokuapp.com/getUserJobSuggestions" + this.$scope.uid);
        $.ajax({
            url: "https://intern-master-deploy.herokuapp.com/getUserJobSuggestions" + this.$scope.uid,
            method: 'GET',
            crossDomain: true,
            success:  (response) => {
                this.matchedSkills = JSON.parse(response);
                this.matchedSkills = $.map(this.matchedSkills, function(value, index) {
                    return [value];
                });
                this.$scope.$apply(() => {
                    this.companiesResult = [];
                    for (var i in this.companies) {
                        if (this.matchedSkills.includes(this.companies[i].$id)) {
                            console.log(this.companies[i])
                            this.companiesResult.push(this.companies[i]);
                        }
                    }
                });
                
         
                
                
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
    }
}

export default CompanyController;