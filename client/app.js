var requestApp = angular.module('requestApp',['ngRoute', 'ngMaterial']);

requestApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

requestApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'UsersController',
		templateUrl: 'views/users.html'
	})
	.when('/users', {
		controller:'UsersController',
		templateUrl: 'views/users.html'
	})
	.when('/users/details/:id',{
		controller:'UsersController',
		templateUrl: 'views/user_details.html'
	})
	.when('/users/adduser',{
		controller:'UsersController',
		templateUrl: 'views/add_user.html'
	})
	.when('/users/addtools',{
		controller:'UsersController',
		templateUrl: 'views/add_tools.html'
	})
	.when('/users/edit/:id',{
		controller:'UsersController',
		templateUrl: 'views/edit_user.html'
	})
	.when('/users/addasc',{
		controller:'UsersController',
		templateUrl: 'views/add_asc.html'
	})
	.when('/users/clinkupdate',{
		controller:'UsersController',
		templateUrl: 'views/update_user.html'
	})
	.when('/users/removetools',{
		controller:'UsersController',
		templateUrl: 'views/remove_tools.html'
	})
	.when('/users/nolongeremployed',{
		controller:'UsersController',
		templateUrl: 'views/no_longer_employed.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});