(function() {
    'use strict';

    angular
        .module('pizzaweb.menu')
        .factory('menuService', menuService);

    menuService.$inject = ['$http'];

    function menuService($http) {
        var _API_URL = 'http://localhost:9001/';

        return {
            getProducts: getProducts,
            getCategories: getCategories,
            submitProduct: submitProduct
        };

        function getProducts() {
            return $http.get(_API_URL + 'products')
                .then(getProductsComplete, getProductsFailed);

            function getProductsComplete(response) {
                return response.data;
            }

            function getProductsFailed(error) {
                console.log('XHR Failed for getProducts.' + error.data);
            }
        }

        function getCategories() {
            return $http.get(_API_URL + 'categories')
                .then(getCategoriesComplete, getCategoriesFailed);

            function getCategoriesComplete(response) {
                return response.data;
            }

            function getCategoriesFailed(error) {
                console.log('XHR Failed for getProducts.' + error.data);
            }
        }

        function submitProduct(product) {
            return $http.post(_API_URL + 'products', product)
                .then(postComplete, postFailed);

            function postComplete(response) {
                return response.data;
            }

            function postFailed(error) {
                console.log('XHR Failed for submitProduct.' + error.data);
            }
        }
    }

})();
