import { Service, signal } from "@angular/core";
import { PRODUCTS } from "../models/product-mock";
import { Product } from "../domain/product";

@Service()
export class ProductService {

    private _products = signal<Product[]>([...PRODUCTS]);

    public getProducts() : Product[] {
        return this._products();
    }
}