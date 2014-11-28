(function() {
    'use strict';

    angular
        .module('pizzaweb.core.language', [
            'pascalprecht.translate',
            'ngCookies'
        ])
        .config(config)
        .run(run);

    config.$inject = ['$translateProvider'];

    function config($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/languages/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en_US');
        $translateProvider.fallbackLanguage('hu_HU');
    }

    run.$inject = ['languageService', '$cookieStore'];

    function run(languageService, $cookieStore) {
        var lang = $cookieStore.get('ui-language');
        var defaultLanguage = 'hu_HU';
        languageService.changeLanguage((!lang) ? defaultLanguage : lang);
    }

})();
