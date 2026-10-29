import { Product } from "@/app/domain/product";

export interface IProductService {
    getProducts() : Product[];
}