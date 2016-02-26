namespace app.about {
    'use strict';

    config.$inject = ['$stateProvider'];

    function config($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('pizza.about', createAboutState());
    }

    function createAboutState(): angular.ui.IState {
        var state: angular.ui.IState = {};
        state.url = '/about';
        state.templateUrl = 'about/about.template.html';
        state.controller = 'About';
        state.data = {
            pageTitle: 'About'
        };
        return state;
    }

    angular
        .module('pizzaweb.about', [])
        .config(config);


}
