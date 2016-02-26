namespace app {
    'use strict';

    export class AppController {
        private languageService: any;

        static $inject = ['LanguageService'];

        constructor (LanguageService: app.core.language.ILanguageService) {
            this.languageService = LanguageService;
        }
        public changeLanguage (langKey: string): void {
            this.languageService.changeLanguage(langKey);
        }

    }

    angular
        .module('pizzaweb')
        .controller('AppController', AppController);
}
