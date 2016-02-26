namespace app.core.language {
    'use strict';

    config.$inject = ['$translateProvider'];

    function config($translateProvider: angular.translate.ITranslateProvider) {
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        $translateProvider.useStaticFilesLoader(createLoaderOption());
        $translateProvider.preferredLanguage('en_US');
        $translateProvider.fallbackLanguage('hu_HU');
    }

    run.$inject = ['LanguageService', 'locker'];

    function run(LanguageService: ILanguageService, locker: angular.locker.ILockerService) {
        var lang = locker.get('ui-language');
        var defaultLanguage = 'hu_HU';
        LanguageService.changeLanguage((!lang) ? defaultLanguage : lang);
    }

    function createLoaderOption(): angular.translate.IStaticFilesLoaderOptions {
        return {prefix: 'assets/languages/', suffix: '.json'};
    }

    angular
        .module('pizzaweb.core.language', [])
        .config(config)
        .run(run);

}
