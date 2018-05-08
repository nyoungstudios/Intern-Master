/**
 * Created by jay on 2018/2/10.
 */
import UserDashboardController from 'src/pages/components/UserDashboardController'

export default {
    name: 'userDashboard',
    config: {
        bindings: {},
        templateUrl: 'src/pages/components/UserDashboard.html',
        controller: ['$mdDialog','$window','Upload','$element','$mdToast','$scope','FirebaseDataService','UserProfileDataService',UserDashboardController]
    }
};
