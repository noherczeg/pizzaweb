(function() {
    'use strict';

    angular
        .module('pizzaweb.menu')
        .controller('menu', menu);

    menu.$inject = ['$scope'];

    function menu($scope) {
        var vm = this;
        vm.testVar = 'Test Variable in menu controller!';
    }

})();
