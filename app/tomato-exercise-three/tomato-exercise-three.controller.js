(function() {
    'use strict';

    angular
        .module('app')
        .controller('TomatoExerciseThreeController', TomatoExerciseThreeController);
    
    TomatoExerciseThreeController.$inject = [
        '$scope', 'restService', '$q'
    ];

    function TomatoExerciseThreeController($scope, restService, $q) {
        var vm = this;

        activate();

        function activate() {
            $q.all([
                getExerciseThreeData()
            ]).then(activateComplete);

            function activateComplete(results) {
                vm.data = results[0];
            }
        }

        function getExerciseThreeData() {
            return restService.getExerciseThreeData().then(function(response) {
                return response;
            });
        }

        //Add your code below.


    }
})();
