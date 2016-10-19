angular.module('friendApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'index.html'
      })
      .state('home', {
        url: '/home',
        templateUrl: './templates/home.html'
      })
      .state('friends', {
        url: '/friend/:github_username',
        templateUrl: './templates/friend.html'
      });


  });
