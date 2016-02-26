namespace app.menu {
    'use strict';

    class MenuConfig {
        private $stateProvider: angular.ui.IStateProvider;

        static $inject = ['$stateProvider'];

        constructor ($stateProvider: angular.ui.IStateProvider) {
            this.$stateProvider = $stateProvider;
            this.$stateProvider
                .state('pizza.menu', MenuConfig.createMenuState());
        }

        private static createMenuState(): angular.ui.IState {
            var state: angular.ui.IState = {};
            state.url = '/menu';
            state.templateUrl = 'menu/menu.template.html';
            state.controller = 'menu';
            state.data = {
                pageTitle: 'Menu'
            };
            return state;
        }
    }

    angular
        .module('pizzaweb.menu', [])
        .service('menuService', MenuService);

}
