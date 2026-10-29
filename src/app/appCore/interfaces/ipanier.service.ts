import { cartItemModel } from "@/app/presentation/components/cart-items/cart-item.model";

export interface IPanierService {
    addItem(cartItem : cartItemModel) : void;
    removeItem(itemId: number) : void;
    clear() : void;
}