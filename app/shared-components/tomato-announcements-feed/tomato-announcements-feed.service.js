(function() {
    'use strict';

    angular
        .module('app')
        .factory('tomatoAnnouncementFeedService', tomatoAnnouncementFeedService);

        tomatoAnnouncementFeedService.$inject = [];

    function tomatoAnnouncementFeedService() {
        var service = {
            filterDataByFarm: filterDataByFarm,
            getOwnerNamesUpdated : getOwnerNamesUpdated
        };

        return service; 

        function filterDataByFarm(data, filter) {
            return _.filter(data, function(data) {return data.farm.Title === filter;});
        }

        function getOwnerNamesUpdated(mastersourcedata, childsourcedata) {
           return _(mastersourcedata).map(function(item, itemId) {
                item['Owner'] = _(childsourcedata).filter({ID: item.OwnerID}).value()[0].Title;
                }).value(); 
        }
    }
})();