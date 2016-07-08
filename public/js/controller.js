angular.module('routeapp.controller', [])
.controller('MainController', function($scope, $location){
  console.log('AngularJS');
  $scope.$on('$routeChangeError', function(next, current) { 
     $location.path('/404');
  });
})
.controller('HomeController', function(){
  console.log('HomeController');
})

.controller('UserController', function($scope, Databases, Util, $routeParams, $location){
  //var userID  = $routeParams.userID; Antiguo 
  var userID  = $routeParams.param2; 
  var isEdit = (userID != undefined);
  $scope.user = {};
  if(isEdit){
    $scope.user = Databases.DataUser.get(userID);
  }
  $scope.save = function(){
    var user = Util.clone($scope.user);
    if(isEdit){
      Databases.DataUser.update(userID, user);
      $location.path('/user/list');
    }else{
      Databases.DataUser.add(user);
    }
    $scope.user = {};
  };
})

.controller('UserListController', function($scope, Databases){
  $scope.dataUser = Databases.DataUser.list();
})

.controller('UserDeleteController', function($scope, Databases, $routeParams, $location){
  //var userID = $routeParams.userID; Antiguo
  var userID  = $routeParams.param3; 
  $scope.user = Databases.DataUser.get(userID);
  
  $scope.destroy = function(){
    Databases.DataUser.destroy(userID);
    $location.path('/user/list');
  }
  
})

.controller('RouteController', function($scope, $routeParams, $controller, $filter){
  var prefix = $filter('prefixController')($routeParams.param1) +''+ $filter('prefixController')($routeParams.param2);
  $controller(prefix+'Controller', {$scope: $scope});
})

.controller('404Controller', function(){

})

;