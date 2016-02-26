namespace app.core.pagination {
    'use strict';

    export class PaginationStartFrom {

        static $inject: Array<string> = [];

        static filter(){
            return (input: any, start: number) => {
                start = +start; //parse to int
                return input.slice(start);
            }
        }
    }
}
