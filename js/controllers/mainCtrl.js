 /****************************************************************************************
 *
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./module'], function (controllers) {
 	'use strict';
	controllers.controller('mainCtrl', ['$scope','$state', function ($scope,$state) {
		$scope.state = $state;
		$scope.heading = 'Sample Page';
		$scope.message = 'This is just a blank view.';
	 }]);
 });