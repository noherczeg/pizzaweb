namespace app.menu {
    'use strict';

    export interface MenuVM {
        search: string;
        postSuccess: boolean;
        products: Array<IProduct>;
        newProduct: IProduct;
        categories: Array<ICategory>;
        pagination: any;
        numberOfPages: () => number;
        postProduct: (product: IProduct) => ng.IPromise<boolean>;
        getProducts: () => ng.IPromise<Array<IProduct>>;
    }

    export class MenuController implements MenuVM{
        search: string = '';
        postSuccess: boolean = false;
        products: Array<app.menu.IProduct> = [];
        newProduct: IProduct;
        categories: Array<app.menu.ICategory> = [];
        pagination: any  = {
            currentPage: 0,
            pageSize: 4
        };
        menuService: IGetter<IProduct>;
        $filter: any;
        $scope: any;

        static $inject: Array<string> = ['MenuService', '$filter', '$scope'];

        constructor(MenuService: IGetter<IProduct>, $filter: any, $scope: any) {
            this.menuService = MenuService;
            this.$filter = $filter;
            this.$scope = $scope;

            this.getProducts();
        }

        public numberOfPages (): number {
            var myFilteredData = this.$filter('filter')(this.products, this.search);
            return Math.ceil(myFilteredData.length/this.pagination.pageSize);
        }
        public postProduct(product: IProduct): ng.IPromise<boolean> {
            var self = this;
            return this.menuService.submitProduct(this.newProduct)
                .then((response: ng.IHttpPromiseCallbackArg<IProduct>): boolean => {
                    // waits for response this way!
                    self.postSuccess = true;
                    self.newProduct = null;
                    // clears validation :)
                    self.$scope.productPostForm.$setPristine();
                    return self.postSuccess;
                });
        }

        public getProducts(): ng.IPromise<Array<IProduct>> {
            var self = this;
            return this.menuService.getProducts()
                .then((response: Array<IProduct>): Array<IProduct> => {
                    self.products = response;
                    return self.products;
                });
        }
    }

    angular
        .module('pizzaweb.menu')
        .controller('Menu', MenuController);
}
