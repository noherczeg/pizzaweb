namespace app.menu {
    'use strict';

    export interface IMenuService {
        getProducts: () => ng.IPromise<Array<IProduct>>;
        getCategories: () => ng.IPromise<Array<ICategory>>;
        submitProduct: (product: IProduct) => ng.IPromise<IProduct>;
    }

    export class MenuService implements IMenuService{
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

        getCategories():ng.IPromise<Array<ICategory>> {
            return this.$http.get(MenuService.API_URL.concat('categories'))
                .then((response: ng.IHttpPromiseCallbackArg<Array<ICategory>>):Array<ICategory> => {
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
}
