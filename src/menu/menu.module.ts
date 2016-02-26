namespace app.menu {
    'use strict';

    config.$inject = ['$stateProvider'];

    function config($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('pizza.menu', createMenuState());
    }

    function createMenuState(): angular.ui.IState {
        var state: angular.ui.IState = {};
        state.url = '/menu';
        state.templateUrl = 'menu/menu.template.html';
        state.controller = 'Menu';
        state.data = {
            pageTitle: 'Menu'
        };
        return state;
    }

    angular
        .module('pizzaweb.menu', [])
        .config(config);

}
