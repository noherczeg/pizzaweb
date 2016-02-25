(function() {
    'use strict';

    angular
        .module('pizzaweb')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', 'languageService'];

    function AppController($scope, languageService) {
        $scope.changeLanguage = function (langKey) {
            languageService.changeLanguage(langKey);
        }
    }

})();
