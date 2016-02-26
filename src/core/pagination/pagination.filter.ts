namespace app.core.pagination {
    'use strict';

    export function PaginationStartFrom() {
        return function(input: any, start: number) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }

    angular
        .module('pizzaweb.core.pagination')
        .filter('PaginationStartFrom', PaginationStartFrom);
}
