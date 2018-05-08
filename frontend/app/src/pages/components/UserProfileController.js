class UserProfileController {
    constructor($mdBottomSheet, UserProfileDataService) {
        var self = this;


        self.makeContact = makeContact;


        self.userProfile = [];
        UserProfileDataService
            .loadAllUserProfile()
            .then(function (userProfile) {
                self.userProfile = [].concat(userProfile);
            });


        function makeContact(selectedUser) {
            $mdBottomSheet.show({
                controllerAs: "vm",
                templateUrl: './src/users/components/details/contactSheet.html',
                controller: ['$mdBottomSheet', ContactSheetController],
                parent: angular.element(document.getElementById('content'))
            });

            function ContactSheetController($mdBottomSheet) {
                this.user = selectedUser;
                this.items = [
                    {
                        name: 'Phone',
                        icon: 'phone',
                        icon_url: 'assets/svg/phone.svg',
                        url: 'https://www.facebook.com/sharer/sharer.php?u='
                    },
                    {
                        name: 'Twitter',
                        icon: 'twitter',
                        icon_url: 'assets/svg/twitter.svg',
                        url: 'https://www.facebook.com/sharer/sharer.php?u='
                    },
                    {
                        name: 'Facebook',
                        icon: 'facebook',
                        icon_url: 'assets/svg/facebook.svg',
                        url: 'https://www.facebook.com/sharer/sharer.php?u='
                    },
                    {
                        name: 'Google+',
                        icon: 'google_plus',
                        icon_url: 'assets/svg/google_plus.svg',
                        url: 'https://www.facebook.com/sharer/sharer.php?u='
                    },
                    {
                        name: 'Hangout',
                        icon: 'hangouts',
                        icon_url: 'assets/svg/hangouts.svg',
                        url: 'https://www.facebook.com/sharer/sharer.php?u='
                    }
                ];
                this.contactUser = function (action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }


    }


    Upload() {
        var fileButton = document.getElementById('fileButton');

        fileButton.addEventListener('change', function (e) {
            var file = e.target.files[0];
            var storageRef = firebase.storage().ref('resume/');
            var database = firebase.database();
            var ref = database.ref('users/-L62KFmv4mXhsLU9iuQa/resume');


            var uploadsMetadata = {
                casheControl: "max-age=" + (60 * 60 * 24 * 365)
            };
            //var uploadTask = storageRef.put(file, uploadsMetadata);
            var uploadTask = //storageRef.child(file.name).put(file,uploadsMetadata);
                storageRef.child(file.name).put(file);

            console.log('ref');

            return new Promise(function (resolve, reject) {
                uploadTask.on('state_changed', function (snap) {
                }, function (err) {
                    reject(err);
                }, function () {
                    var metadata = uploadTask.snapshot.metadata;
                    var key = metadata.md5Hash.replace("/\//g, ':'");
                    var fileRecord = {
                        downloadURL: uploadTask.snapshot.downloadURL,
                        key: key,
                        metadata: {
                            fullPath: metadata.fullPath,
                            md5Hash: metadata.md5Hash,
                            name: metadata.name
                        }
                    };
                    ref.child(key).set(fileRecord).then(resolve, reject);
                    URL = fileRecord.downloadURL;
                    console.log(URL);
                })
            })
        })
    }
}

export default UserProfileController;
