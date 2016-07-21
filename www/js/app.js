angular.module('ionicApp', ['ionic'])

.controller("MainCtrl",function(){
  console.log("Main Controller says: Hello World");
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

  .state('main', {
    url: "/main",
    templateUrl: "templates/main.html",
    controller: 'MainCtrl'
  })
  
  .state('page2', {
    url: "/page2",
    templateUrl: "templates/page2.html",
  })
  
  .state('page3', {
    url: "/page3",
    templateUrl: "templates/page2.html",
  })
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');
});