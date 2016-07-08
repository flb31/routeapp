angular.module('routeapp', ['ngRoute', 'routeapp.controller', 'routeapp.services', 'routeapp.filters'])
.config(function($routeProvider){
	
	//Antiguo enrutador manual
	/*
	$routeProvider
	.when('/home', {  templateUrl: 'tpl/home.html',  controller: 'HomeController' } )
	.when('/user', {  templateUrl: 'tpl/user.html',  controller: 'UserController' } )
  	.when('/user/list', {  templateUrl: 'tpl/user-list.html',  controller: 'UserListController' } )
  	.when('/user/:userID', {  templateUrl: 'tpl/user.html',  controller: 'UserController' } )
  	.when('/user/delete/:userID', {  templateUrl: 'tpl/user-delete.html',  controller: 'UserDeleteController' } )
	.otherwise({redirectTo: '/home'});
	*/


	//Enrutador dinamico
    var route  = {
      controller: 'RouteController', 
      templateUrl: function(uri){
        var pattern = new RegExp("[0-9]+");
        var part_uri = ( !pattern.test( uri.param2 ) &&  typeof uri.param2 !== 'undefined') ? '-' + uri.param2 : '';
        return 'tpl/' + uri.param1 + part_uri + '.html';
      } 
    };

    $routeProvider
	.when('/:param1', route )
    .when('/:param1/:param2', route)
    .when('/:param1/:param2/:param3', route )
    .otherwise({redirectTo: '/home'});
})
;