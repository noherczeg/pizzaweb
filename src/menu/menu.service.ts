namespace app.menu {
    'use strict';

    export interface IGetter <T> {
        getProducts: () => ng.IPromise<Array<T>>;
        submitProduct: (product: IProduct) => ng.IPromise<T>;
    }

    export class MenuService implements IGetter<IProduct> {
        private $http: ng.IHttpService;

        static API_URL: string = 'http://localhost:9001/';
        static $inject: Array<string> = ['$http'];

        constructor ($http: ng.IHttpService) {
            this.$http = $http;
        }

        getProducts():ng.IPromise<Array<IProduct>> {
            return this.$http.get(MenuService.API_URL.concat('products'))
                .then((response: ng.IHttpPromiseCallbackArg<Array<IProduct>>):Array<IProduct> => {
                    return response.data;
                });
        }

        submitProduct(product:IProduct):ng.IPromise<IProduct> {
            return this.$http.post(MenuService.API_URL.concat('products'), product)
                .then((response: ng.IHttpPromiseCallbackArg<IProduct>):IProduct => {
                    return response.data;
                });
        }

    }

    angular
        .module('pizzaweb.menu')
        .service('MenuService', MenuService);
}
