class NewsController {
    constructor(FirebaseDataService, $scope, Upload, $mdToast, $sce) {
        this.$onInit = () => {
            self = this;
            self.FirebaseDataService = FirebaseDataService;
            self.$scope = $scope;
            self.Upload = Upload;
            self.$mdToast = $mdToast;
            self.$sce = $sce;
            $scope.loaded = false;
            $scope.newsUserInfoMap = {};
            var newsRef = firebase.database().ref("news");
            self.newsData = FirebaseDataService.array(newsRef);
            self.newsData.$loaded().then((news) => {
                self.news = news;
                FirebaseDataService.auth.$onAuthStateChanged((user) => {
                    self.uid = user.uid;
                    var ref = firebase.database().ref("users").orderByChild("userID").equalTo(user.uid);
                    FirebaseDataService.array(ref).$loaded((user) => {
                        // console.log(user[0]);
                        self.user = user[0];
                    })

                    // load all necessery user info
                }


                );
            });

            self.togglePost = false;
        };
        $scope.submitHeaderImg = this.submitHeaderImg.bind(this);
        angular.element(document).ready(() => {
            self.mde = new SimpleMDE();
            self.converter = new showdown.Converter();
        })
    }
    post() {
        self.togglePost = !self.togglePost;
    }
    submitPost() {

        var newPost = {
            content: self.mde.value(),
            title: self.$scope.title,
            subtitle: self.$scope.subtitle,
            user: self.user,
            headerimg: ((self.headerimg == null) ? "http://via.placeholder.com/100x100" : self.headerimg)
        }
        // console.log(newPost);
        self.newsData.$add(newPost).then((ref) => {
            console.log(ref);
            this.showToast("Posted");
        })

    }

    submitHeaderImg(file, invalidFiles) {
        var refStr = "new/" + 'headerImg' + self.uid + Math.random().toString(36).substring(7);;
        this.resumeRef = firebase.storage().ref(refStr);
        this.storage = this.FirebaseDataService.storage(this.resumeRef);
        var uploadTask = this.storage.$put(file);
        uploadTask.$complete((snapshot) => {
            this.headerimg = snapshot.downloadURL;
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

    reset() {
        self.mde.value("");
        self.$scope.title = "";
        self.$scope.subtitle = "";
        self.headerimg = "";
    }

    render(markdown) {
        var html = self.converter.makeHtml(markdown);
        // console.log(html);
        return this.$sce.trustAsHtml(html);
    }
}
export default NewsController;