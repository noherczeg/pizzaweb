(function() {
    'use strict';

    angular
        .module('pizzaweb.menu')
        .controller('menu', menu);

    menu.$inject = ['menuService', '$filter'];

    function menu(menuService, $filter) {
        var vm = this;
        vm.search = '';
        vm.pagination = {
            currentPage: 0,
            pageSize: 4
        };
        vm.products = [];
        vm.categories = [];

        vm.numberOfPages = function(){
            var myFilteredData = $filter('filter')(vm.products, vm.search);
            return Math.ceil(myFilteredData.length/vm.pagination.pageSize);
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
