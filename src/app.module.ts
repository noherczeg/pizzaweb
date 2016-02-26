/// <reference path="../typings/browser.d.ts"/>

namespace app {
    'use strict';

    class AppConfig {
        private $stateProvider: angular.ui.IStateProvider;
        private $locationProvider: angular.ILocationProvider;

        static $inject = ['$stateProvider', '$locationProvider'];

        constructor ($stateProvider: angular.ui.IStateProvider, $locationProvider: angular.ILocationProvider) {
            this.$stateProvider = $stateProvider;
            this.$locationProvider = $locationProvider;

            this.$locationProvider
                .html5Mode(true)
                .hashPrefix('!');

            this.$stateProvider
                .state('pizza', AppConfig.createRootState())
                .state('otherwise', AppConfig.createFourOFourState());
        }

        private static createRootState(): angular.ui.IState {
            return {
                abstract: true,
                template: '<ui-view/>',
                controller: 'AppController'
            };
        }

        private static createFourOFourState(): angular.ui.IState {
            return {
                url: '*path',
                templateUrl: '404.html',
                data: {
                    pageTitle: 'Page not found'
                }
            };
        }

    }

    class AppRun {
        private $rootScope: any;

        static $inject = ['$rootScope'];

        constructor ($rootScope: any) {
            this.$rootScope = $rootScope;

            var pageTitleSuffix = ' | PizzaWEB';

            this.$rootScope.$on('$stateChangeSuccess', (event: angular.IAngularEvent, toState: angular.ui.IState) => {
                if (angular.isDefined(toState.data.pageTitle)) {
                    this.$rootScope.pageTitle = toState.data.pageTitle + pageTitleSuffix;
                }
            });
        }

    }

    angular
        .module('pizzaweb', [
            'pizzaweb.core', 'pizzaweb.home', 'pizzaweb.menu', 'pizzaweb.about'
        ])
        .controller('AppController', AppController)
        .config(AppConfig)
        .run(AppRun);
}
