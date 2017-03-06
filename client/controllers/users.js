var requestApp = angular.module('requestApp');

requestApp.controller('UsersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('UsersController loaded...');

	$scope.getUsers = function(){
		$http.get('/api/users').then(function(response){
			$scope.users = response.data;
		});
	}

	$scope.getUser = function(){
		var id = $routeParams.id;
		$http.get('/api/users/'+id).then(function(response){
			$scope.user = response.data;
		});
	}

	$scope.addUser = function(){
		console.log($scope.user);
		$http.post('/api/users/', $scope.user).then(function(response){
			window.location.href='#/users';
		});
	}

	$scope.updateUser = function(){
		var id = $routeParams.id;
		$http.put('/api/users/'+id, $scope.user).then(function(response){
			window.location.href='#/users';
		});
	}

	$scope.removeUser = function(id){
		$http.delete('/api/users/'+id).then(function(response){
			window.location.href='#/users';
		});
	}
}]);