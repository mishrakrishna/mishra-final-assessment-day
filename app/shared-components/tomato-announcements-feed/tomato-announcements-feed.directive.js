// Add your code here, create additional directives if needed.
(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoAnnouncementFeed', tomatoAnnouncementFeed);
 
    function tomatoAnnouncementFeed() {
        var directive = {
            scope: {
                announcements: "<",
                announcementsOwners: "<"
            },
            restrict: 'E',
            controller: TomatoAnnouncementFeedController,
            bindToController: true,
            controllerAs: 'vm',
            templateUrl: './app/shared-components/tomato-announcements-feed/tomato-announcements-feed.directive.html'
        };
 
        return directive;
    }
 
    TomatoAnnouncementFeedController.$inject = ['tomatoAnnouncementFeedService'];
 
    function TomatoAnnouncementFeedController(tomatoAnnouncementFeedService) {
        var vm = this;
        vm.UpdatedAnnouncementsData = [];

        activate();

        function activate() {
            getOwnerNamesUpdated(vm.announcements, vm.announcementsOwners);
        }

        function getOwnerNamesUpdated(announcements, announcementsOwners) {
                vm.UpdatedAnnouncementsData = tomatoAnnouncementFeedService.getOwnerNamesUpdated(announcements, announcementsOwners);
        }

    }
 })();
 
