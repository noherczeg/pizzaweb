namespace app.menu {
    'use strict';

    export interface ICategory {
        id: number;
        name: string;
        products: Array<IProduct>;
    }
}
