import { cartItemModel } from "@/app/presentation/components/cart-items/cart-item.model";

export interface IPanierService {
    ajouter(cartItem : cartItemModel) : void;
    remove(itemId: number) : void;
    clear() : void;
}