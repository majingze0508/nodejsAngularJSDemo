$(document).ready(function() {
	$('#registerbt1').on('click', function(){
		$('#loginForm').css('display', 'none');
		$('#registerForm').css('display', 'block');
	});
	$('#loginbt2').on('click', function(){
		$('#registerForm').css('display', 'none');
		$('#loginForm').css('display', 'block');
	});
});
var app = angular.module('Authentication', []);
app.controller('validateCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.user = '';
    $scope.password = '';
	$scope.login = function() {
		$http.post('/users', { username: $scope.user, password: $scope.password })
            .then(function(response) {
				$window.location.href = '/main?username=' + response.data.username;
			}, function(response) {
				console.log("Something went wrong");
			});
	};
}]);
app.controller('registerCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.user2 = '';
    $scope.password2 = '';
	$scope.confirmPassword2 = '';
	$scope.multipleSelect = null;
	$scope.availableOptions = [{id: '1', name: 'admin'},
      {id: '2', name: 'user'}];
	$scope.register = function() {
		console.log($scope.password2);
		console.log($scope.confirmPassword2);
		if ($scope.password2 !== $scope.confirmPassword2) {
			alert("confirmed password is diffrent from the pass")
			return;
		} else {
			$http.post('/users/register', { username: $scope.user2, password: $scope.password2, role: $scope.multipleSelect })
            .then(function(response) {
				console.log(response.data);
			}, function(response) {
				console.log("Something went wrong");
			});
		}
	}
}]);