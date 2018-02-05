(function() {
    'use strict';

    angular
        .module('app')
        .controller('TomatoAnnouncementsHomeController', TomatoAnnouncementsHomeController);
    
        TomatoAnnouncementsHomeController.$inject = [
        '$scope', 'restService', '$q'
    ];

    function TomatoAnnouncementsHomeController($scope, restService, $q) {
        var vm = this;
        vm.loading = false;
        vm.announcemnets = [];
        vm.announcemnetsOwners = [];
        
        activate();

        function activate() {
            vm.loading = true;
            $q.all([
                getAllAnnouncements(),
                getAllAnnouncementsOwners()
            ]).then(activateComplete);

            function activateComplete(results) {
                vm.announcemnets = results[0];
                vm.announcemnetsOwners = results[1];
                vm.loading = false;
            }
        }


        function getAllAnnouncements() {
            return restService.getAllAnnouncements().then(function(announcemnets) {
                return announcemnets;
            });
        }

        function getAllAnnouncementsOwners() {
            return restService.getAllAnnouncementsOwners().then(function(announcemnetsOwners) {
                return announcemnetsOwners;
            });
        }
    }
})();
