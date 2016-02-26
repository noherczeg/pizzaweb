namespace app.core.language {
    'use strict';

    export interface ILanguageService {
        changeLanguage: (langKey: string) => string;
    }

    export class LanguageService implements ILanguageService {
        private $translate: angular.translate.ITranslateService;
        private locker: angular.locker.ILockerService;
        private $rootScope: any;

        static $inject = ['$translate', 'locker', '$rootScope'];

        constructor($translate: angular.translate.ITranslateService, locker: angular.locker.ILockerService, $rootScope: any) {
            this.$translate = $translate;
            this.locker = locker;
            this.$rootScope = $rootScope;
        }

        public changeLanguage(langKey: string): string {
            this.locker.put('ui-language', langKey);
            this.$rootScope.activeLanguage = langKey;
            this.$translate.use(langKey);
            return langKey;
        }

    }

    angular
        .module('pizzaweb.core.language')
        .service('LanguageService', LanguageService);
}
