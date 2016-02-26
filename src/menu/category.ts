import {IProduct} from "../product/product";

export interface ICategory {
    id: number;
    name: string;
    products: Array<IProduct>;
}