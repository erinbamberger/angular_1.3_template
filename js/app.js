 /****************************************************************************************
 *
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define([
 	'angular',
 	'angular-ui-router',
 	'bootstrap-ui',
 	'./controllers/index',
 	'./factories/index'

 ], function (angular) {
 	'use strict';

 	return angular.module('app', [
 		'ui.router',
 		'ui.bootstrap',
 		'app.controllers',
 		'app.factories'
 	]);
 });