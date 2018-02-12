angular.module('app').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './app/tomato-dashboard/tomato-dashboard.html',
            controller: 'TomatoDashboardController',
            controllerAs: 'vm'
        })
        .when('/part-three', {
            templateUrl: './app/tomato-exercise-three/tomato-exercise-three.html',
            controller: "TomatoExerciseThreeController",
            controllerAs: 'vm'
        })
        .when('/Announcements', {
            templateUrl : './app/tomato-announcements/tomato-announcements-home.html',
            controller  : 'TomatoAnnouncementsHomeController',
            controllerAs: 'vm'
        });
}]);
