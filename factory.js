var app = angular.module('myModule');

  app.factory('myFactory', function($http) {

    var lyrics = [];

    return {
      searchLyrics: searchLyrics,
      getLyrics: getLyrics
    }

    function searchLyrics(searchCriteria){
    var promise =  $http({
        method: 'GET',
        url: 'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.lyrics.get?q_artist=' + searchCriteria.artistName + '&q_track=' + searchCriteria.trackName,
        headers:{
          'X-Mashape-Key': 'R3y0FTjHn5msh0J519S3TwQlFf5Bp1AzQ9Yjsn6Gf7RCMinzSM',
          'Accept':'application/json'
        }
      }).then(function(response){
        lyrics = response.data.lyrics_body
        return lyrics;
      });

      return promise;
    }

    function getLyrics() {
      return lyrics;
    }

});
