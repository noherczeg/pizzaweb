namespace app.core.store {
    'use strict';

    config.$inject = ['lockerProvider'];

    function config(lockerProvider: angular.locker.ILockerProvider) {
        lockerProvider.defaults(createSettings());
    }

    function createSettings(): angular.locker.ILockerSettings {
        var settings : angular.locker.ILockerSettings = {};
        settings.driver = 'session';
        settings.namespace = 'pizza';
        settings.separator = '.';
        settings.eventsEnabled = true;
        settings.extend = {};
        return settings;
    }

    angular
        .module('pizzaweb.core.store', [])
        .config(config);

}
