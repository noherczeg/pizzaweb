(function() {
    'use strict';

    angular
        .module('pizzaweb.about')
        .controller('about', about);

    function about() {
        var vm = this;
        vm.author = {
            name: 'Norbert Csaba Herczeg',
            position: 'software developer'
        };
        vm.project = 'angular sample app';
    }

})();
