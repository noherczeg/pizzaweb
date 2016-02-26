/// <reference path="../typings/browser.d.ts"/>

namespace app {
    'use strict';

    config.$inject = ['$stateProvider', '$locationProvider'];

    function config ($stateProvider: angular.ui.IStateProvider, $locationProvider: angular.ILocationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');

        $stateProvider
            .state('pizza', createRootState())
            .state('otherwise', createFourOFourState());
    }

    run.$inject = ['$rootScope'];

    function run ($rootScope: any) {
        var pageTitleSuffix = ' | PizzaWEB';

        $rootScope.$on('$stateChangeSuccess', (event: angular.IAngularEvent, toState: angular.ui.IState) => {
            if (angular.isDefined(toState.data.pageTitle)) {
                $rootScope.pageTitle = toState.data.pageTitle + pageTitleSuffix;
            }
        });
    }

    function createRootState(): angular.ui.IState {
        return {
            abstract: true,
            template: '<ui-view/>',
            controller: 'AppController'
        };
    }

    function createFourOFourState(): angular.ui.IState {
        return {
            url: '*path',
            templateUrl: '404.html',
            data: {
                pageTitle: 'Page not found'
            }
        };
    }

    angular
        .module('pizzaweb', [
            'pizzaweb.core', 'pizzaweb.home', 'pizzaweb.menu', 'pizzaweb.about'
        ])
        .config(config)
        .run(run);

}
