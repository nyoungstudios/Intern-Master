/**
 * Created by jay on 2018/2/10.
 */
import UserProfileController from 'src/pages/components/UserProfileController';
import UserProfileDataService from 'src/pages/services/UserProfileDataService';

export default {
    name: 'userProfile',
    config: {
        bindings: {},
        templateUrl: 'src/pages/components/UserProfile.html',
        controller: ['$mdBottomSheet','UserProfileDataService',UserProfileController]
    }
};