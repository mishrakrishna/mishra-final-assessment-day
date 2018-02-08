(function() {
	"use strict";

	angular
		.module("app.shared-services")
		.factory("mockRestService", mockRestService);

	mockRestService.$inject = ["$http", "$q"];

	function mockRestService($http, $q) {

		var service = {
			getListItems: getListItems,
			getAllItems: getAllItems
		};

		return service;

		function getListItems(listTitle, queryParams) {
            var dfd = $q.defer();
            $http.defaults.headers.post['X-HTTP-Method'] = "";
            var restUrl = "../_api/web/lists/getbytitle('" + listTitle + "')/items" + queryParams;
            $http.get(restUrl).success(function(data) {
                dfd.resolve(data.d.results);
            }).error(function(data) {
                dfd.reject("error, cannot get items"); 
            });
            return dfd.promise;
		}

		function getAllItems(listTitle, params) {
            var filters = [];
			
			//setting an int value to maximum no. of rows returned from query
			if (params && params.top) filters.push("$top=" + params.top);
			
			//setting column name/names to sort the returned rows from query
            if (params && params.orderby) filters.push("$orderby=" + params.orderby);

            var queryObjects = {
                filterString: "",
                expandString: "",
                selectString: ""
            }

			//condition to filter the returned rows from query based column values conditions.
            if (params && params.filter) {
                queryObjects.filterString = params.filter;
            }

			//in case of lookup or people picker columns to get details of other fields.
            if (params && params.expand) {
                queryObjects.expandString = params.expand;
            }
			
			//to sepcify all columns you need from list
            if (params && params.select) {
                queryObjects.selectString = params.select;
            }

            filters.push("$select=" + queryObjects.selectString);
            filters.push("$filter=" + queryObjects.filterString);
            filters.push("$expand=" + queryObjects.expandString);

            var query = "?" + filters.join("&");
            return (
                $http({
                    method: "GET",
                    url: baseUrl + "/_api/web/lists/GetByTitle('" + listTitle + "')/Items" + query,
                    headers: {
                        "accept": "application/json; odata=verbose"
                    }
                }).then(function(response) {
                    if (!response.data) {
                        return;
                    }
                    return response.data.d.results;
                })
            );
        }

	}
})();


/* ************** PART II EXERCISE**************  */

/*Example Rest Call to get all items from the WorkPlan List*/

/* 
	INSERT FUNCTION HERE:
	function getAllItems() {

		var queryParams = {
			Select: *
		}
		mockRestService.getListItems('WorkPlan', queryParams).then(function(response) {
			return response;
		})

		
	}

	ANTICIPATED DATA FORMAT: 
	{
		DATA: FORMAT,
		INSERT: HERE
	}
*/

/*************** INSERT ANSWERS BELOW IN THE COMMENTED AREA**************
 











































 */