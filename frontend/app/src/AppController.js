/**
 * Main App Controller for the AngularJS Material Starter App
 * @param NavBarDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController($scope, FirebaseDataService, NavBarDataService, $mdSidenav) {
    var self = this;

    self.selected = null;
    self.users = [];
    self.pages = [];
    $scope.authenticationToggle = true;
    self.selectPage = selectPage;
    self.toggleList = toggleNavBar;
    console.log($scope.authenticationToggle);

    FirebaseDataService.auth.$onAuthStateChanged(function(firebaseUser) {
        if (firebaseUser) {
            $scope.$apply(function () {
                $scope.authenticationToggle = (FirebaseDataService.auth.$getAuth() == null);
            });
        } else {
            $scope.$apply(function () {
                $scope.authenticationToggle = (FirebaseDataService.auth.$getAuth() == null);
            });
        }
    });


    NavBarDataService
        .loadAllPages()
        .then(function (pages) {
            self.pages = [].concat(pages);
            self.selected = pages[0];
        });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleNavBar() {
        $mdSidenav('left').toggle();
    }


    function selectPage(page) {

        self.selected = angular.isNumber(page) ? $scope.pages[page] : page;

    }
}

export default ['$scope','FirebaseDataService', 'NavBarDataService', '$mdSidenav', AppController];
