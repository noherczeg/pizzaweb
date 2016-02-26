namespace app.home {
    'use strict';

    config.$inject = ['$stateProvider'];

    function config($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('pizza.home', createHomeState());
    }

    function createHomeState(): angular.ui.IState {
        var state: angular.ui.IState = {};
        state.url = '/';
        state.templateUrl = 'home/home.template.html';
        state.controller = 'Home';
        state.data = {
            pageTitle: 'Home'
        };
        return state;
    }

    angular
        .module('pizzaweb.home', [])
        .config(config);

}
