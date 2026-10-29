import { Service, signal } from "@angular/core";
import { PRODUCTS } from "@infrastructure/product-mock";
import { Product } from "@domain/product";
import { IProductService } from "@/app/appCore/interfaces/iproduct.service";

@Service()
export class ProductService implements IProductService {

    private _products = signal<Product[]>([...PRODUCTS]);

    public getProducts() : Product[] {
        return this._products();
    }
}