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
        vm.announcements = [];
        vm.announcementsOwners = [];
        
        activate();

        function activate() {
          // vm.loading = true;
            $q.all([
                getAllAnnouncements(),
                getAllAnnouncementsOwners()
            ]).then(activateComplete);

            function activateComplete(results) {
                vm.announcements = results[0];
                vm.announcementsOwners = results[1];
                vm.loading = true;
            }
        }


        function getAllAnnouncements() {
            return restService.getAllAnnouncements().then(function(announcements) {
                return announcements;
            });
        }

        function getAllAnnouncementsOwners() {
            return restService.getAllAnnouncementsOwners().then(function(announcementsOwners) {
                return announcementsOwners;
            });
        }
    }
})();
