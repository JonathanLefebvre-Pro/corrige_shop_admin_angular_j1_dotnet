import { Product } from "../../models/product";
import { CartItems } from "./cart-items";

export interface cartItemModel {
  product : Product
  quantity : number
}
