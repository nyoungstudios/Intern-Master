class ProjectsController {
    constructor($window, $scope, ProjectsDataService, FirebaseDataService) {
        self = this;
        this.$scope = $scope;
        this.$window = $window;
        this.$scope = $scope;
        $scope.skills = ['java', 'python'];
        self.ProjectsDataService = ProjectsDataService;
        $scope.projects = [{
            name: 'bootstrap',
            owner: 'twitter',
            detail: 'blahit'
        }];

        // console.log(ProjectsDataService
        //     .loadProject())
        ProjectsDataService
            .loadProject().$loaded()
            .then(function (projects) {
                $scope.projects = projects;

                for (var project in $scope.projects) {
                    ProjectsDataService.getProjectData(project);
                    // $scope.projects[project]["data"] = "dsdax";
                    // console.log($scope.projects[project])
                }
                $scope.filteredProjects = projects;
            })

        FirebaseDataService.auth.$onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                $scope.uid = firebaseUser.uid;
            }
        })


        $scope.$watch("matchSkills", () => {
            if ($scope.matchSkills == true) {
                $.ajax({
                    url: "https://intern-master-deploy.herokuapp.com/getUserProjectSuggestions" + this.$scope.uid,
                    method: 'GET',
                    crossDomain: true,
                    success: (response) => {
                        this.matchedSkills = JSON.parse(response);
                        this.matchedSkills = $.map(this.matchedSkills, function (value, index) {
                            return [value];
                        });
                        console.log(this.matchedSkills);
                        $scope.$apply(() => {
                            $scope.filteredProjects = [];
                            for (var i in $scope.projects) {
                                if (this.matchedSkills.includes($scope.projects[i].$id)) {
                                    $scope.filteredProjects.push($scope.projects[i]);
                                }
                            }

                        })





                    },
                    error: function (xhr, status) {
                        alert("error");
                    }
                });
            } else {
                $scope.filteredProjects = $scope.projects;
            }

        })
    }

    goToProject(url) {
        this.$window.open(url, '_blank');
    }

}

export default ProjectsController;