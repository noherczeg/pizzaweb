namespace app.about {
    'use strict';

    class AboutConfig {
        private $stateProvider: angular.ui.IStateProvider;

        static $inject = ['$stateProvider'];

        constructor ($stateProvider: angular.ui.IStateProvider) {
            this.$stateProvider = $stateProvider;
            this.$stateProvider
                .state('pizza.about', AboutConfig.createAboutState());
        }

        private static createAboutState(): angular.ui.IState {
            var state: angular.ui.IState = {};
            state.url = '/about';
            state.templateUrl = 'about/about.template.html';
            state.controller = 'about';
            state.data = {
                pageTitle: 'About'
            };
            return state;
        }

    }

    angular
        .module('pizzaweb.about', [])
        .controller('about', AboutController)
        .config(AboutConfig);
}
