(function() {
    'use strict';

    angular
        .module('pizzaweb', [
            'pizzaweb.core', 'pizzaweb.home', 'pizzaweb.menu', 'pizzaweb.about'
        ])

        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$locationProvider', '$httpProvider'];

    function config($stateProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $httpProvider.defaults.withCredentials = true;

        $stateProvider
            .state('pizza', {
                abstract: true,
                template: '<ui-view/>',
                controller: 'AppController'
            })
            .state('otherwise', {
                url: '*path',
                templateUrl: '404.html',
                data: {
                    pageTitle: 'Page not found'
                }
            });
    }

    run.$inject =['$rootScope'];

    function run($rootScope) {
        var pageTitleSuffix = ' | PizzaWEB';

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
            $rootScope.$on('$stateChangeSuccess', function (event, toState) {
                if (angular.isDefined(toState.data.pageTitle)) {
                    $rootScope.pageTitle = toState.data.pageTitle + pageTitleSuffix;
                }
            });
        });
    }

})();
