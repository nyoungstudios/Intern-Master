/**
 * Created by jay on 2018/2/12.
 */
import CompanyController from 'src/pages/components/CompanyController';
import CompanyDataService from 'src/pages/services/CompanyDataService';
export default {
    name: 'company',
    config: {
        bindings: {},
        templateUrl: 'src/pages/components/Company.html',
        controller: ['$mdDialog','$window','$filter','$scope','CompanyDataService','FirebaseDataService','UserProfileDataService', CompanyController]
    }
};
