var app = angular.module('myModule');

  app.controller('outputController', function($scope, myFactory) {

    var string = myFactory.getLyrics();

    $scope.lyrics = string;
});
