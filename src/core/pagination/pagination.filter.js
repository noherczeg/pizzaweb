(function() {
    'use strict';

    angular
        .module('pizzaweb.core')
        .filter('paginationStartFrom', paginationStartFrom);

    function paginationStartFrom() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }

})();
