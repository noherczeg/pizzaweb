namespace app {
    'use strict';

    export class AppController {
        private languageService: any;

        static $inject = ['$scope', 'languageService'];

        constructor (languageService: any) {
            this.languageService = languageService;
        }
        public changeLanguage (langKey: string): void {
            this.languageService.changeLanguage(langKey);
        }

    }
}
