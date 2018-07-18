 var ExploreAppModule = angular.module("exploreApp", []);
  ExploreAppModule.controller("exploreCtrl", function ($scope, $http) {
    $http.get('http://localhost:3000/met/sub/?keyword=' + keywords)
    .success(function(data) {
      $scope.explore = data;
      console.log("this also works");
    })
    .error(function(data, status) {
      console.error('Fail to load data', status, data);
      $scope.explore = { };
    });
  });
