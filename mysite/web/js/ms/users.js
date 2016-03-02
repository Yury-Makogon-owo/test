angular.module('usersModule',[])
.controller('usersController',
    function($scope, $http) {
      this.name = "UserController";
      function update_users() {
        $http.get("http://localhost/r/lib/user/",{
          params: "{Content-Type: application/json}"
        }).
        success(function(raw_data) {
          console.log(raw_data)
          $scope.users = raw_data;
        });
      }
      update_users();
    });
