var app = angular.module('myModule');

  app.controller('inputController', function($scope, $location, myFactory) {

    $scope.findLyrics = function(artist, track){
      var searchCriteria = {
      artistName: artist,
      trackName: track

    }

      myFactory.searchLyrics(searchCriteria).then(function(){
        $location.path('/output');
      });
    };
});
