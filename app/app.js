angular.module('starships', ['ui.router'])

angular.module('starships').config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home',{
    url:'/',
    template:"welcome to home state."
  }).state('ships',{
    url:'/ships',
    templateUrl:"app/views/ships/ships.html",
    controller:'shipsCtrl'
  }).state('ship',{
    url:'/shipd/:id',
    templateUrl:'app/views/ship/ship.html',
    controller:'shipCtrl'
  })
  // this will redirect if thing dont work
  $urlRouterProvider.otherwise('/');
})