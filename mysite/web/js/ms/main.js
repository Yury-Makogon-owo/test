var mysiteApp = angular.module('ms_app', [
        'ngRoute', 'angularTreeview', 'booksModule'
]).config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider./*when('/users', {
                templateUrl: 'page/user.html',
                controller: 'user_controller'
            }).*/when('/books', {
                templateUrl: 'page/books.html',
                controller: 'booksController'
            })/*.otherwise({
                redirectTo: '/'
            })*/;
}
]).constant("rest", '/r'
).controller('navigationController', [
  '$scope', '$http', "$route", '$location',
  function($scope, $http, $route, $location) {
    this.$route = $route;
    this.$location = $location;
  }
]);
