(function() {
    'use strict';

    angular
        .module('pizzaweb.menu')
        .controller('menu', menu);

    menu.$inject = ['menuService', '$filter', '$scope'];

    function menu(menuService, $filter, $scope) {
        var vm = this;
        vm.search = '';
        vm.postSuccess = false;
        vm.products = [];
        vm.newProduct = {};
        vm.categories = [];
        vm.pagination = {
            currentPage: 0,
            pageSize: 4
        };

        vm.numberOfPages = function(){
            var myFilteredData = $filter('filter')(vm.products, vm.search);
            return Math.ceil(myFilteredData.length/vm.pagination.pageSize);
        }

        vm.postProduct = function(){
            return menuService.submitProduct(vm.newProduct).then(function(data) {
                // waits for response this way!
                vm.postSuccess = true;
                vm.newProduct = {};
                // clears validation :)
                $scope.productPostForm.$setPristine();
                return vm.postSuccess;
            });
        }

        _activate();

        ////////////

        function _activate() {
            getCategories().then(function() {
                console.log('Fetched categories.');
            });
            getProducts().then(function() {
                console.log('Fetched products.');
            });
        }

        function getCategories() {
            return menuService.getCategories().then(function(data) {
                    vm.categories = data;
                    return vm.categories;
                });
        }

        function getProducts() {
            return menuService.getProducts().then(function(data) {
                    vm.products = data;
                    return vm.products;
                });
        }

    }

})();
