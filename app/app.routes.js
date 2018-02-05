angular
    .module('app')
    .config(['$routeProvider', function($routeProvider) {
        // Default application route
        $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : './tomato-dashboard/tomato-dashboard.html',
            controller  : 'TomatoDashboardController'
        })

        // route for the about page
        .when('/Announcements', {
            templateUrl : './app/shared-components/tomato-announcements-feed/tomato-announcements-feed.directive.html'
        });
    }]);