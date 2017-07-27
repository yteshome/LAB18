var app = angular.module('myModule', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/input', {
        controller: 'inputController',
        templateUrl: 'input.html'
      })
      .when('/output', {
        controller:'outputController',
        templateUrl: 'output.html'
      }).otherwise({ redirectTo: '/input'});
  });
