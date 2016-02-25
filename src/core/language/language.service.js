(function() {
    'use strict';

    angular
        .module('pizzaweb.core.language')
        .factory('languageService', languageService);

    languageService.$inject = ['$translate', 'locker', '$rootScope'];

    function languageService($translate, locker, $rootScope) {
        return {
            changeLanguage: changeLanguage
        };

        function changeLanguage(langKey) {
            locker.put('ui-language', langKey);
            $rootScope.activeLanguage = langKey;
            $translate.use(langKey);
            return langKey;
        }
    }

})();
