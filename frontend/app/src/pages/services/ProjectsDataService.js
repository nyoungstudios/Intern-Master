function ProjectsDataService(FirebaseDataService, $q) {
    var projectsRef = firebase.database().ref().child("openSourceProjects");
    var cachedProjects;


    // Promise-based API
    return {
        loadProject: function () {
            if(cachedProjects != null){
                return cachedProjects;
            }
            var fireProjects = FirebaseDataService.array(projectsRef);
            cachedProjects = fireProjects;
            return fireProjects;
        },
        getProjectData: function(url){
            if(!url){
                return null
            }
            let orgString = url.substring(18).split("/")[1];
            let projString = url.substring(18).split("/")[2];
            return "https://us-central1-intern-master.cloudfunctions.net/projectLogo?org="+orgString+"&proj="+projString;
        }


    };
}

export default ['FirebaseDataService','$q', ProjectsDataService];