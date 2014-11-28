(function() {
    'use strict';

    angular
        .module('pizzaweb.about', [])
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('pizza.about', {
                url: '/about',
                templateUrl: 'about/about.template.html',
                controller: 'about'
            });
    }

})();
