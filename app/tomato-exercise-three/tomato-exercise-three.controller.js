(function() {
	'use strict';
	angular
		.module('app')
		.controller('TomatoExerciseThreeController', TomatoExerciseThreeController);
    
    // TomatoExerciseThreeController.$inject = [
	// 	'$scope', 'restService', '$q' , 'mockRestService'
    // ];

    TomatoExerciseThreeController.$inject = [
		'$scope', 'restService', '$q'
	];

	// function TomatoExerciseThreeController($scope, restService, $q, mockRestService) {
    function TomatoExerciseThreeController($scope, restService, $q){
        var vm = this;
        /*************** Start While Using SharePoint list coomented - use all internal names for queries. *************/
		// vm.HighRiskAndIssues = [];
		// vm.listTitleRisksandIssues = "Risks and Issues";
		// vm.paramsHighRiskAndIssues = {
		// 	select: "ID,Title,Description,Modified,Function/Title, Item Owner/Title",
		// 	top: 500,
		// 	expand: "Function,Item Owner",
		// 	filter: "Risk Impact eq 'High '"
		// };
		// vm.WorkPlans = [];
		// vm.listTitleWorkPlans = "Work Plan";
		// vm.paramsWorkPlans = {
		// 	select: "ID,Task Owner/Title,Function/Title,Work Plan Task Type,Work Plan Task Status/Title,Due Date",
		// 	top: 2000,
		// 	orderby: "Due Date asc",
		// 	expand: "Task Owner,Function,Work Plan Task Status"
        // };
        /*************** End While Using SharePoint list coomented *************/
		activate();

		function activate() {
			$q.all([
                /*************** Start While Using SharePoint list coomented *************/
				//getRiskAndIssues(vm.listTitleRisksandIssues, vm.paramsHighRiskAndIssues),
                //getWorkplans(vm.listTitleWorkPlans, vm.paramsWorkPlans),
                /*************** End While Using SharePoint list coomented *************/
				getExerciseThreeData()
			]).then(activateComplete);

			function activateComplete(results) {
                /*************** Start While Using SharePoint list coomented *************/
				//vm.HighRiskAndIssues = results[0];
                //vm.WorkPlans = results[1];
                 /*************** End While Using SharePoint list coomented *************/
				vm.data = results[0];
				console.log("FORMAT ONE: Orders by Country Details ==> " + JSON.stringify(vm.data[1]));
				console.log("FORMAT TWO: Total Tomatoes Ordered by Country ==> " + JSON.stringify(vm.data[0]));
			}
		}
        
        /*************** Start While Using SharePoint list coomented *************/
		// function getRiskAndIssues(listTitleRisksandIssues, paramsHighRiskAndIssues) {
		// 	return mockRestService.getListItems(listTitleRisksandIssues, paramsHighRiskAndIssues).then(function(response) {
		// 		return response;
		// 	});
		// }

		// function getWorkplans(listTitleWorkPlans, paramsWorkPlans) {
		// 	return mockRestService.getListItems(listTitleWorkPlans, paramsWorkPlans).then(function(response) {
		// 		return response;
		// 	});
		// }
        /*************** End While Using SharePoint list coomented *************/

		function getExerciseThreeData() {
			return restService.getExerciseThreeData().then(function(response) {
				var output = [];
				var CountriesDetails = response[0];
				var TomatoesDetails = response[1];
				var StatusesDetails = response[2];
				var OrdersDetails = response[3];
				var TotalTomatoesOrderedByCountry = getTotalQuantity(OrdersDetails, CountriesDetails);
				output.push(TotalTomatoesOrderedByCountry);
				var OrdersbyCountryDetails = getCountByCountry(OrdersDetails, CountriesDetails, TomatoesDetails, StatusesDetails);
				output.push(OrdersbyCountryDetails);
				return output;
			});
		}

		function getTotalQuantity(Orders, Countries) {
			var output = _(Orders.orders).groupBy('Countries.ID').map(function(item, itemId) {
				var obj = [];
				var countryName = _(Countries.countries).filter({
					ID: parseInt(itemId)
				}).value()[0].Title;
				obj.push(countryName, _(item).sumBy('Qty'));
				return obj;
			}).fromPairs().value();
			return output;
		}

		function getCountByCountry(Orders, Countries, Tomatoes, Statuses) {
			var output = _(Orders.orders).groupBy('Countries.ID').map(function(item, itemId) {
				var obj = [];
				var countryName = _(Countries.countries).filter({
					ID: parseInt(itemId)
				}).value()[0].Title;
				_.forEach(item, function(element) {
					element['Countries'] = _(Countries.countries).filter({
						ID: parseInt(itemId)
					}).value();
					element['Tomato'] = _(Tomatoes.tomatoes).filter({
						ID: parseInt(element.Tomato.ID)
					}).value();
					element['Status'] = _(Statuses.statuses).filter({
						ID: parseInt(element.Status.ID)
					}).value();
				});
				obj.push(countryName, item);
				return obj;
			}).fromPairs().value();
			return output;
		}
	}
})();