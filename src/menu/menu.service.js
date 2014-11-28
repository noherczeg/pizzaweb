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
                .then(getProductsComplete)
                .catch(getProductsFailed);

            function getProductsComplete(response) {
                return response.data;
            }

            function getProductsFailed(error) {
                console.log('XHR Failed for getProducts.' + error.data);
            }
        };

        function getCategories() {
            return $http.get(_API_URL + 'categories')
                .then(getCategoriesComplete)
                .catch(getCategoriesFailed);

            function getCategoriesComplete(response) {
                return response.data;
            }

            function getCategoriesFailed(error) {
                console.log('XHR Failed for getProducts.' + error.data);
            }
        };

        function submitProduct(product) {
            return $http.post(_API_URL + 'products', product).success(function(result) {
                    console.log('Product uploaded.');
                    return result.data;
                }).error(function (error) {
                    console.log('XHR Failed for submitProduct.' + error.data);
                });
        };
    }

})();
