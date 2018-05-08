/**
 * Created by jay on 2018/2/10.
 */
import NavBarController from 'src/pages/components/NavBarController';
export default {
    name: 'navBar',
    config: {
        bindings: {pages: '<', selected : '<', showDetails : '&onSelected'},
        templateUrl: 'src/pages/components/NavBar.html',
        controller:['FirebaseDataService', NavBarController]
    }
};
