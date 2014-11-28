(function() {
    'use strict';

    angular
        .module('pizzaweb', [
            'ui.bootstrap', 'ui.router', 'pizzaweb.core', 'pizzaweb.home', 'pizzaweb.menu', 'pizzaweb.about'
        ])

        .config(config);

    config.$inject = ['$stateProvider', '$locationProvider'];

    function config($stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');

        $stateProvider
            .state('pizza', {
                abstract: true,
                template: '<ui-view/>',
                controller: 'AppController'
            })
            .state('otherwise', {
                url: '*path',
                templateUrl: '404.html'
            });
    }

})();
