/**
 * Created by jay on 2018/2/22.
 */
function FirebaseDataService($firebaseStorage,$firebaseObject, $firebaseArray,$firebaseAuth, $q) {
    var auth = $firebaseAuth();
    var object = $firebaseObject;
    var array = $firebaseArray;
    var storage = $firebaseStorage;

    // Promise-based API
    return {
        loadAllCompanies: function () {
            // Simulate async nature of real remote calls
            return $q.when(companies);
        },
        
        loadCompanyDetail: function(id) {

        },
        auth: auth,
        object:object,
        array:array,
        storage:storage


    };
}

export default ['$firebaseStorage','$firebaseObject','$firebaseArray','$firebaseAuth','$q', FirebaseDataService]