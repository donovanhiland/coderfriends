angular.module('friendApp')
  .service('githubService', function($http) {

    return {

      getFollowing: function() {
        return $http ({
          method: 'GET',
          url: '/api/github/following'
        }).then(function(response) {
          return response;
        });
      }

    };



  });
