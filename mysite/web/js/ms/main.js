(function(global) {
    var g_app = global.g_app = angular.module('ms_app', [
        'ngRoute', 'angularTreeview', 'ui.bootstrap', , 'ngAnimate'
    ]);
    g_app.constant("localhost", '/r');

    g_app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/search', {
                templateUrl: 'page/search.html',
                controller: 'search_controller'
            }).when('/status', {
                templateUrl: 'page/status.html',
                controller: 'status_controller'
            }).otherwise({
                redirectTo: '/status'
            });
        }
    ]);

    g_app.controller('main_controller', [
        '$rootScope', '$scope', 'localhost', '$http', '$modal', '$templateCache',
        function($rootScope, $scope, cc_url, $http, $modal,  $templateCache) {
            var onCacheUpdateReady = function() {
                $scope.updateAvailable = ngToast.success({
                    content: '<b>Control Center</b>: an update available, we will reload page.',
                    dismissOnTimeout: false,
                    dismissButton: true,
                    dismissOnClick: false
                });
            }, checkAppCache = function() {
                if (global.applicationCache.status === global.applicationCache.UPDATEREADY) {
                    onCacheUpdateReady();
                } else {
                    global.applicationCache.addEventListener('updateready', onCacheUpdateReady);
                }
            };
            $scope.active_page = 'tab-status';
            $scope.updateAvailable = false;

            $scope.start();
            });
        }
    ]);
})(this);
