 /****************************************************************************************
 *
 *  @version (.1)
 *  @date (2015)
 *
 *****************************************************************************************/
 require.config({
	/**************************************
 	*  LIBRARY/PLUGIN ALIAS                           
 	***************************************/
 	paths: {
 		'angular':'lib/angular',
 		'angular-ui-router':'lib/angular-ui-router',
 		'domReady':'lib/requirejs-domready',
 		'bootstrap-ui':'lib/bootstrap-ui-0.12.1.min'

 	},
 	shim: {
 		'angular': {
 			exports: 'angular'
 		},
 		'angular-ui-router': {
 			deps: ['angular']
 		},
 		'bootstrap-ui': {
 			deps: ['angular']
 		}
 	},
	/**************************************
 	*  START APPLICATION                           
 	***************************************/
 	deps: ['./bootstrap']
 });