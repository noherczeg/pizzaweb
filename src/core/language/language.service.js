(function() {
    'use strict';

    angular
        .module('pizzaweb.core.language')
        .factory('languageService', languageService);

    languageService.$inject = ['$translate', '$cookieStore', '$rootScope'];

    function languageService($translate, $cookieStore, $rootScope) {
        return {
            changeLanguage: changeLanguage
        };

        function changeLanguage(langKey) {
            $cookieStore.put('ui-language', langKey);
            $rootScope.activeLanguage = langKey;
            $translate.use(langKey);
            return langKey;
        };
    }

})();
