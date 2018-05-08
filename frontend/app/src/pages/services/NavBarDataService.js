/**
 * Created by jay on 2018/2/10.
 */

function NavBarDataService($q) {
    var pages = [
        {
            name: 'Dashboard',
            avatar: 'dashboard',
            url:'UserDashboard'
        },
        // {
        //     name: 'Profile',
        //     avatar: 'svg-1',
        //     url:'UserProfile'
        // },
        {
            name: 'Company',
            avatar: 'company',
            url:'Company'
        },
        {
            name: 'Projects',
            avatar: 'open-source',
            url:'Projects'
        },
        {
            name: 'News',
            avatar: 'news',
            url:'News'
        }];
    // Promise-based API
    return {
        loadAllPages: function() {
            // Simulate async nature of real remote calls
            return $q.when(pages);
        }
    };
}

export default ['$q', NavBarDataService];