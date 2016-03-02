angular.module('booksModule',[])
.controller('booksController',
    function($scope, $http) {
      this.name = "BooksController";
      $scope.update_books = function () {
        $http.get("http://localhost/r/lib/books/", {
          params: "{Content-Type: application/json}"
        }).
        success(function(raw_data) {
          var filtred = [];
          for (var i=0; i< raw_data.length; i++) {
            var item = raw_data[i];
            if (new Date(item.returned).getTime() < new Date().getTime()) {
              filtred.push(item.id);
            }
          }
          $scope.filtred = filtred;
          $scope.books = raw_data;
        });
      }
      $scope.update_books();
      $scope.date_compare = function(date_time) {
        return true;
      }
    $scope.not_expared = function(val) {
      if ($.inArray(val.id, $scope.filtred) > -1
          && $scope.expare_filter
          && val.owner) {
        return false;
      }
      return true;
    }
    });
