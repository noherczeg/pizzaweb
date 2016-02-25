(function() {
    'use strict';

    angular
        .module('pizzaweb.core.store', [])
        .config(config);

    config.$inject = ['lockerProvider'];

    function config(lockerProvider) {
        lockerProvider.defaults({
            driver: 'session',
            namespace: 'pizza',
            separator: '.',
            eventsEnabled: true,
            extend: {}
        });
    }

})();
