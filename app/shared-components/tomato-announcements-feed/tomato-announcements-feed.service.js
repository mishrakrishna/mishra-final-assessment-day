(function() {
    'use strict';

    angular
        .module('app')
        .factory('tomatoAnnouncementFeedService', tomatoAnnouncementFeedService);

        tomatoAnnouncementFeedService.$inject = [];

    function tomatoAnnouncementFeedService() {
        var service = {
            filterDataByFarm: filterDataByFarm,
            populateOwnersInfo : populateOwnersInfo,
            getUniqueValuesOfProeprty : getUniqueValuesOfProeprty
        };

        return service; 

        function filterDataByFarm(data, filter) {
            return _.filter(data, function(data) {return data.farm.Title === filter;});
        }

        function populateOwnersInfo(mastersourcedata, childsourcedata) {
            _(mastersourcedata).map(function(item, itemId) {
                item['Owner'] = _(childsourcedata).filter({ID: item.OwnerID}).value()[0].Title;
            }).value(); 
            return mastersourcedata;
        }

        function getUniqueValuesOfProeprty(mastersourcedata, property){
            return _.uniq(_(mastersourcedata).map(property).value());
        }
    }
})();