namespace app.home {
    'use strict';

    class HomeConfig {
        private $stateProvider: angular.ui.IStateProvider;

        static $inject = ['$stateProvider'];

        constructor ($stateProvider: angular.ui.IStateProvider) {
            this.$stateProvider = $stateProvider;
            this.$stateProvider
                .state('pizza.home', HomeConfig.createHomeState());
        }

        private static createHomeState(): angular.ui.IState {
            var state: angular.ui.IState = {};
            state.url = '/';
            state.templateUrl = 'home/home.template.html';
            state.controller = 'home';
            state.data = {
                pageTitle: 'Home'
            };
            return state;
        }
    }

    angular
        .module('pizzaweb.home', [])
        .controller('home', HomeController)
        .config(HomeConfig);
}
