namespace app.core.services {
    'use strict';

    export abstract class AbstractCRUDService <T extends Entity>{
        private $http: ng.IHttpService;
        private collectionName: string;

        static API_URL: string = 'http://localhost:9001/';
        static $inject: Array<string> = ['$http'];

        constructor ($http: ng.IHttpService, collectionName: string) {
            this.$http = $http;
            this.collectionName = collectionName;
        }

        getAll():ng.IPromise<Array<T>> {
            return this.$http.get(AbstractCRUDService.API_URL.concat(this.collectionName))
                .then((response: ng.IHttpPromiseCallbackArg<Array<T>>):Array<T> => {
                    return response.data;
                });
        }

        getOne(id: string):ng.IPromise<T> {
            return this.$http.get(AbstractCRUDService.API_URL.concat(this.collectionName).concat('/').concat(id))
                .then((response: ng.IHttpPromiseCallbackArg<T>):T => {
                    return response.data;
                });
        }

        create(entity: T):ng.IPromise<T> {
            return this.$http.post(AbstractCRUDService.API_URL.concat(this.collectionName).concat('/').concat(entity.id), entity)
                .then((response: ng.IHttpPromiseCallbackArg<T>):T => {
                    return response.data;
                });
        }

    }

    angular
        .module('pizzaweb.core.services')
        .service('AbstractCRUDService', AbstractCRUDService);
}
