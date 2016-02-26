/***************************************************************************
 * Copyright(c) 2015 by LG Electronics Inc.
 *
 * All rights reserved. No part of this work may be reproduced, stored in a
 * retrieval system, or transmitted by any means without prior written
 * permission of LG Electronics Inc.
 ***************************************************************************/

angular.module('booksModule', []).
controller('BooksController', ['$scope', '$http', '$timeout',
    function($scope, $http, $timeout) {
    var escapeStr = function(str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    };

    $scope.extended = true;
    $scope.lastUpdatedPage = 0;
    $scope.advFilters = {
        advFilterTestName: {
            value: '',
            switcher: false
        },
        advFilterLogSnippet: {
            value: '',
            switcher: false
        }
    };

    $scope.glyphClass = function(field) {
        var local = 'glyphicon right-glyph';
        if ($scope.advFilters[field].switcher) {
            local += ' glyphicon-pencil';
        } else {
            local += ' glyphicon-asterisk';
        }
        return local;
    };
    $scope.glyphClick = function(field) {
        $scope.advFilters[field].switcher = !$scope.advFilters[field].switcher;
    };
    $scope.search = function() {
        var params = angular.extend({
            filterByBookName: $scope.bookNameSwitch ? escapeStr($scope.bookName) : $scope.bookName
        }, $scope.prepareParams()),
            filterType;

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

        $scope.$on('updatePage', function(event, page) {
            if (page != $scope.lastUpdatedPage) {
                $scope.lastUpdatedPage = page;
                $scope.search();
            }
        });
    };
}]);

