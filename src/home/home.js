(function() {
    'use strict';

    angular
        .module('pizzaweb.home', [])
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('pizza.home', {
                url: '/',
                templateUrl: 'home/home.template.html',
                controller: 'home',
                data: {
                    pageTitle: 'Home'
                }
            });
    }

})();
