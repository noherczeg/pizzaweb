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
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/languages/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en_US');
        $translateProvider.fallbackLanguage('hu_HU');
    }

    run.$inject = ['languageService', 'locker'];

    function run(languageService, locker) {
        var lang = locker.get('ui-language');
        var defaultLanguage = 'hu_HU';
        languageService.changeLanguage((!lang) ? defaultLanguage : lang);
    }

})();
