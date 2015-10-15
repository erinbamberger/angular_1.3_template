 /****************************************************************************************
 *
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 define(['./app'], function (app) {
 	'use strict';
 	return app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
 		$urlRouterProvider.otherwise('/');
 		$stateProvider
 		.state('index', {
 			url: '/index',
 			views: {
 				'content': {
					templateUrl : './views/sample-page.html',
					controller  : 'mainCtrl'
 				},
 				'navigation': {
 					templateUrl : './views/static-content/navigation.html',
 				},
 				'footer': {
 					templateUrl : './views/static-content/footer.html'
 				}
 			}
		});
 	}]);
 });