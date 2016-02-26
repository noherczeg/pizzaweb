namespace app.core.store {
    'use strict';

    class StoreConfig {
        private lockerProvider: angular.locker.ILockerProvider;

        static $inject = ['lockerProvider'];

        constructor (lockerProvider: angular.locker.ILockerProvider) {
            this.lockerProvider = null;
            this.lockerProvider = lockerProvider;
            this.lockerProvider.defaults(StoreConfig.createSettings());
        }

        private static createSettings(): angular.locker.ILockerSettings {
            var settings : angular.locker.ILockerSettings = {};
            settings.driver = 'session';
            settings.namespace = 'pizza';
            settings.separator = '.';
            settings.eventsEnabled = true;
            settings.extend = {};
            return settings;
        }

    }

    angular
        .module('pizzaweb.core.store', [])
        .config(StoreConfig);
}
