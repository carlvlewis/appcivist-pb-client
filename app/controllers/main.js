﻿	// AppCivist Demo Client - Basic Controllers

/**
 * MainCtrl - this controller checks if the user is loggedIn and loads the main
 * view with the public cover or redirects it to the list of assemblies that the
 * user can view
 *
 */
appCivistApp.controller('MainCtrl', function($scope, $resource, $location, localStorageService, Assemblies, loginService, $route) {
	$scope.route = $route;
	init();

	function init() {
		var user = $scope.user = localStorageService.get("user");
		var sessionKey = $scope.sessionKey = localStorageService.get("sessionKey");
		var serverBaseurl = $scope.serverBaseUrl = localStorageService.get("serverBaseUrl");
		var etherpadServer = $scope.etherpadServer = localStorageService.get("etherpadServer");
		var info = $scope.info = localStorageService.get("help");

		$scope.assembliesLoading = false;


		if ($scope.serverBaseUrl === undefined || $scope.serverBaseUrl === null) {
			$scope.serverBaseUrl = appCivistCoreBaseURL;
			localStorageService.set("serverBaseUrl", appCivistCoreBaseURL);
			console.log("Setting API Server in MainCtrl to: " + appCivistCoreBaseURL);
		} else {
			console.log("Using API Server: " + $scope.serverBaseUrl);
		}

		if ($scope.etherpadServer === undefined || $scope.etherpadServer === null ) {
			etherpadServer = $scope.etherpadServer = etherpadServerURL;
			localStorageService.set("etherpadServer", etherpadServerURL);
			console.log("Setting Etherpad Server in MainCtrl to: " + etherpadServerURL);
		} else {
			console.log("Using Etherpad Server: " + $scope.etherpadServer);
		}

		if ($scope.info === undefined || $scope.info === null) {
			info = $scope.info = helpInfo;
			localStorageService.set("help",info);
		}

		// does scope already has the user and the sessionKey?
		console.log("User in MainCtrl is: "+user);

		authCheck(user,sessionKey);
		loadListedAssemblies();
	}

	// TODO: Redirect to the real search query
	$scope.searchMoreAssemblies = function(query) {
		searchAssemblies(query);
	}

	$scope.login = function(email, password) {
		$scope.user = loginService.signIn(email, password);
	}

	function authCheck(user, sessionKey) {
		// check if there is already a user and a sessionKey in the scope
		// TODO: Implement login/session control like this: http://plnkr.co/edit/tg25kr?p=preview

		if (user != null && sessionKey != null) {
			// TODO Validate that the Session Key corresponds to the user
			//$location.url('/home');
		} else {
			$scope.user = {};
			$scope.sessionKey = null;
		}
	}

	function loadListedAssemblies() {
		// Load 'listed' assemblies
		$scope.assembliesLoading = true;
		$scope.assemblies = Assemblies.assembliesWithoutLogin().query();
		$scope.assemblies.$promise.then(
				function(data) {
					$scope.assemblies = data;
					localStorageService.set("assemblies", $scope.assemblies);
					$scope.assembliesLoading = false;
				},
				function(error) {
					$scope.error = error;
					$scope.assembliesLoading = false;
				}
		);
	}

	function searchAssemblies(query) {
		// Searching 'listed' assemblies
		$scope.assembliesLoading = true;
		$scope.assemblies = Assemblies.assembliesByQuery(query).query();
		$scope.assemblies.$promise.then(
				function(data) {
					$scope.assemblies = data;
					localStorageService.set("assemblies", $scope.assemblies);
					$scope.assembliesLoading = false;
				},
				function(error) {
					$scope.error = error;
					$scope.assembliesLoading = false;
				}
		);
	}
});