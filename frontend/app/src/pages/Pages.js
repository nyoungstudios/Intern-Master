/**
 * Created by jay on 2018/2/10.
 */
import NavBarDataService from 'src/pages/services/NavBarDataService';
import CompanyDataService from 'src/pages/services/CompanyDataService';
import FirebaseDataService from 'src/pages/services/FirebaseDataService';
import UserProfileDataService from 'src/pages/services/UserProfileDataService';
import ProjectsDataService from 'src/pages/services/ProjectsDataService';

import NavBar from 'src/pages/components/NavBar';
import UserDashboard from 'src/pages/components/UserDashboard';
import UserProfile from 'src/pages/components/UserProfile';
import Company from 'src/pages/components/Company';
import Projects from 'src/pages/components/Projects';
import News from 'src/pages/components/News';

function FileUploadDirective() {
    return {
        restrict: "E",
        transclude: true,
        scope: {
            onChange: "="
        },
        template: '<input class="ng-hide" id="input-file-id" multiple type="file" ng-model="avator" ng-change="ctrl.submitAvator()"/><label for="input-file-id" class="md-button">Upload</label>',
        link: function (scope, element, attrs) {
            element.bind("change", function () {
                scope.onChange(element.children()[0].files);
            });
        }
    }
}

export default angular
    .module("pages", ['ngMaterial'])
    .component(NavBar.name, NavBar.config)
    .component(UserDashboard.name, UserDashboard.config)
    .component(UserProfile.name, UserProfile.config)
    .component(Company.name, Company.config)
    .component(Projects.name, Projects.config)
    .component(News.name, News.config)
    .service("NavBarDataService", NavBarDataService)
    .service("CompanyDataService", CompanyDataService)
    .service("UserProfileDataService", UserProfileDataService)
    .service("FirebaseDataService", FirebaseDataService)
    .service("ProjectsDataService", ProjectsDataService)
    .directive("fileUpload", FileUploadDirective);


