import ProjectsController from 'src/pages/components/ProjectsController'
import ProjectsDataService from 'src/pages/services/ProjectsDataService'
import FirebaseDataService from 'src/pages/services/FirebaseDataService'

export default {
    name: 'projects',
    config: {
        bindings: {},
        templateUrl: 'src/pages/components/Projects.html',
        controller: ['$window', '$scope', 'ProjectsDataService', 'FirebaseDataService', ProjectsController]
    }
};