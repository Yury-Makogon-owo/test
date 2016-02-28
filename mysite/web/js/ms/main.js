(function(global) {
    var g_app = global.g_app = angular.module('ms_app', [
        'ngRoute', 'angularTreeview', 'ui-bootstrap'
    ]);

    g_app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider./*when('/users', {
                templateUrl: 'page/user.html',
                controller: 'user_controller'
            }).*/when('/books', {
                templateUrl: 'page/book.html',
                controller: 'books_controller'
            })/*.otherwise({
                redirectTo: '/'
            })*/;
        }
    ]);
    g_app.constant("rest", '/r');
    g_app.controller('navigationController', [
      '$rootScope', '$scope', 'rest', '$http',
      function($rootScope, $scope, rest, $http) {
          $scope.tab_clicked = function(id) {
              return ($scope.active_page === id) ? 'active' : '';
          };
      }

    ]);
})(this);
