(function() {
    'use strict';

    angular
        .module('pizzaweb.menu', [])
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('pizza.menu', {
                url: '/menu',
                templateUrl: 'menu/menu.template.html',
                controller: 'menu'
            });
    }

})();
