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
        vm.UniqueAnnouncementTypes = [];
        vm.AllType = "All";
        vm.loading = true;
        vm.selectedAnnouncementType = vm.AllType;

        activate();

        function activate() {

            populateOwnersInfoInAnnouncements(vm.announcements, vm.announcementsOwners);
            getUniqueAnnouncementTypes(vm.announcements, 'Type.Title');
            vm.loading = false;
        }

        function populateOwnersInfoInAnnouncements(announcements, announcementsOwners) {
                vm.UpdatedAnnouncementsData = tomatoAnnouncementFeedService.populateOwnersInfo(announcements, announcementsOwners);
        }
        
        function getUniqueAnnouncementTypes(announcements, property){
               vm.UniqueAnnouncementTypes = tomatoAnnouncementFeedService.getUniqueValuesOfProeprty(announcements, property);
               vm.UniqueAnnouncementTypes.unshift(vm.AllType);
        }

    }
 })();
 
