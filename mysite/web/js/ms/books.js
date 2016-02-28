angular.module('booksModule', []).
controller('booksController', ['$scope', '$http', '$timeout',
    function($scope, $http, $timeout) {
    $scope.extended = true;
    $scope.search = function() {

        $http.get('r/lib/books', {
            params: params
        }).success(function(response) {
            $scope.page.updatePages(response.page);
            // gathering groups from job
            response.books.forEach(function(elem, index, arr) {
                elem.groups = [];
                elem.testResultList.forEach(function(book) {
                    elem.groups.push(book.title);
                });
                elem.groups = elem.groups.filter(function(item, pos, self) {
                    return self.indexOf(item) == pos;
                });
            });
            $scope.books = response.books;
        });

    };
}]);

