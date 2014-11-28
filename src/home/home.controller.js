(function() {
    'use strict';

    angular
        .module('pizzaweb.home')
        .controller('home', home);

    home.$inject = ['$scope'];

    function home($scope) {
        var vm = this;
        vm.testVar = 'Test Variable in home controller!';
        vm.translateCtrlVars = {
            home: 'home'
        }
    }

})();
