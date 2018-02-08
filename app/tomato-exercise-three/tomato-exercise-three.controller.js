(function() {
    'use strict';

    angular
        .module('app')
        .controller('TomatoExerciseThreeController', TomatoExerciseThreeController);
    
    TomatoExerciseThreeController.$inject = [
        '$scope', 'restService', '$q', 'mockRestService'
    ];

    function TomatoExerciseThreeController($scope, restService, $q, mockRestService) {
        var vm = this;

        vm.HighRiskAndIssues = [];

        //used all internal names.
        vm.listTitleRisksandIssues = "Risks and Issues";
        vm.paramsHighRiskAndIssues = {
                                        select: "ID,Title,Description,Modified,Function/Title, Item Owner/Title",
                                        top: 500,
                                        expand: "Function,Item Owner",
                                        filter: "Risk Impact eq 'High '"
                                    };
        
        vm.WorkPlans = [];
        vm.listTitleWorkPlans = "Work Plan";
        vm.paramsWorkPlans = {
                                select: "ID,Task Owner/Title,Function/Title,Work Plan Task Type,Work Plan Task Status/Title,Due Date",
                                top: 2000,
                                orderby: "Due Date asc",
                                expand: "Task Owner,Function,Work Plan Task Status"
                            };

        activate();

        function activate() {
            $q.all([
                getRiskAndIssues(vm.listTitleRisksandIssues, vm.paramsHighRiskAndIssues),
                getWorkplans(vm.listTitleWorkPlans, vm.paramsWorkPlans)
            ]).then(activateComplete);

            function activateComplete(results) {
                vm.HighRiskAndIssues = results[0];
                vm.WorkPlans = results[1];
            }
        }

        function getRiskAndIssues(listTitleRisksandIssues, paramsHighRiskAndIssues) {
            return mockRestService.getListItems(listTitleRisksandIssues, paramsHighRiskAndIssues).then(function(response) {
                return response;
            });
        }

        function getWorkplans(listTitleWorkPlans, paramsWorkPlans) {
            return mockRestService.getListItems(listTitleWorkPlans ,paramsWorkPlans).then(function(response) {
                return response;
            });
        }
    }
})();
