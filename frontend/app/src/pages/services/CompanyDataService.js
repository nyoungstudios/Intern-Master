/**
 * Created by jay on 2018/2/12.
 */
function CompanyDataService($http, FirebaseDataService, $q) {
    var jobRef = firebase.database().ref().child("jobs");
    var companyImageRef = firebase.database().ref().child("companyImages");
    var cachedJobs;
    var cachedImages = {};

    // Promise-based API
    return {
        loadAllCompanies: function () {
            // Simulate async nature of real remote calls
            if (cachedJobs != null) {
                return cachedJobs;
            }
            var fireJobs = FirebaseDataService.array(jobRef);
            cachedJobs = fireJobs;
            return fireJobs;
        },

        loadBookmarkedCompanay: function (bookmark) {

            var refStr = "jobs/" + bookmark;
            var jobRef = firebase.database().ref().child(refStr);
            var fireJobs = FirebaseDataService.obj(jobRef);



            return fireJobs;
        }
        // getCompanyImages: function (companies) {
        //     var id
        //     for(id in companies){
        //         $http({
        //             method: 'GET',
        //             url: "https://autocomplete.clearbit.com/v1/companies/suggest?query=" + companies[id].company
        //         }).then(function successCallback(response) {
        //             // this callback will be called asynchronously
        //             // when the response is available
        //             console.log(response)
        //             cachedImages[companies[id].company] = response.data[0].logo;
        //         }, function errorCallback(response) {
        //             // called asynchronously if an error occurs
        //             // or server returns response with an error status.
        //         });
        //     }
        //
        // }

    };
}

export default ['$http', 'FirebaseDataService', '$q', CompanyDataService];