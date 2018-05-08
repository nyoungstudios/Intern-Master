/**
 * Created by jay on 2018/2/20.
 */
class NavBarController {
    constructor(FirebaseDataService){
      this.FirebaseDataService = FirebaseDataService;
    }
    signout(){
      this.FirebaseDataService.auth.$signOut();
      
    }
}
export default NavBarController;
