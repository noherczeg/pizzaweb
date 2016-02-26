namespace app.core.language {
    'use strict';

    class LanguageConfig {
        private $translateProvider: angular.translate.ITranslateProvider;

        static $inject = ['$translateProvider'];

        constructor ($translateProvider: angular.translate.ITranslateProvider) {
            this.$translateProvider = $translateProvider;
            this.$translateProvider.useSanitizeValueStrategy('sanitizeParameters');
            this.$translateProvider.useStaticFilesLoader(LanguageConfig.createLoaderOption());
            this.$translateProvider.preferredLanguage('en_US');
            this.$translateProvider.fallbackLanguage('hu_HU');
        }

        private static createLoaderOption(): angular.translate.IStaticFilesLoaderOptions {
            return {prefix: 'assets/languages/', suffix: '.json'};
        }
    }

    class LanguageRun {
        private languageService: ILanguageService;
        private locker: angular.locker.ILockerService;

        static $inject = ['$translateProvider'];

        constructor (languageService: ILanguageService, locker: angular.locker.ILockerService) {
            this.languageService = languageService;
            this.locker = locker;

            var lang = this.locker.get('ui-language');
            var defaultLanguage = 'hu_HU';
            this.languageService.changeLanguage((!lang) ? defaultLanguage : lang);
        }
    }

    angular
        .module('pizzaweb.core.language', [])
        .config(LanguageConfig)
        .service('languageService', LanguageService)
        .run(LanguageRun);
}
