namespace app.menu {
    'use strict';

    export interface IProduct extends app.core.services.Entity{
        name: string;
        price: number;
    }

}
