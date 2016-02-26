namespace app.core.services {
    'use strict';

    export class ProductService extends AbstractCRUDService <app.menu.IProduct> {
        static $inject:Array<string> = ['$http'];

        constructor($http:ng.IHttpService) {
            super($http, 'products');
        }
    }


    angular
        .module('pizzaweb.core.services')
        .service('ProductService', ProductService);
}
