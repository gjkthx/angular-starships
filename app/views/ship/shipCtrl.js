// Creating a controller named shipCtrl,
// Notice that in addition to $scope, we inject the shipSrvc.  We are also injecting
// $stateParams,  this will let us access any of the parameters from our route.

// angular.module('starships').controller('shipCtrl',function($scope, shipSrvc, $stateParams){

  // Here we are calling the getShipById function from our shipSrvc,
  // We can get the id of the page that we are currently on with the
  // $stateParams object we injected.  All the parameters for this route will be
  // on this object.
  angular.module('starships').controller('shipCtrl',function($scope, shipSrvc, $stateParams){
   $scope.id = $stateParams.id;
   shipSrvc.getShip($stateParams.id).then(ship=>$scope.ship=ship)
})


