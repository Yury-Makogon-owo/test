angular.module('booksModule',[])
.controller('booksController',
    function($scope, $http) {
      this.name = "BooksController";
      function update_books() {
        $http.get("http://localhost/r/lib/book/",{
          params: "{Content-Type: application/json}"
        }).
        success(function(raw_data) {
          console.log(raw_data)
          $scope.books = raw_data;
        });
      }
      update_books();
    });
