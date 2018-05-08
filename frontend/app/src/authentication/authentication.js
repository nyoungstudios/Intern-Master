/**
 * Created by jay on 2018/2/13.
 */
import authenticationController from 'src/authentication/authenticationController';

var authentication = {
    name: 'authentication',
    config: {
        bindings: {},
        templateUrl: 'src/authentication/authentication.html',
        controller: ['FirebaseDataService', authenticationController]
    }
};

export default angular
    .module("authentication",["ngMaterial"])
    .component(authentication.name, authentication.config);