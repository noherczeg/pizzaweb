namespace app.core {
    'use strict';

    angular
        .module('pizzaweb.core', [
            'ui.bootstrap',
            'ui.router',
            'ngMessages',
            'ngSanitize',
            'angular-locker',
            'pascalprecht.translate',
            'pizzaweb.core.language',
            'pizzaweb.core.pagination',
            'pizzaweb.core.store'
        ]);
}
