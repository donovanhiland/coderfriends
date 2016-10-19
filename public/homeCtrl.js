angular.module('friendApp')
  .controller('friendController', function($scope, githubService) {

    $scope.friends = githubService.getFollowing();

  });
