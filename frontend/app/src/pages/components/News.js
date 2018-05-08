import NewsController from 'src/pages/components/NewsController';
export default {
    name: 'news',
    config: {
        bindings: {},
        templateUrl: 'src/pages/components/News.html',
        controller:['FirebaseDataService','$scope','Upload', '$mdToast', '$sce',NewsController]
    }
};
