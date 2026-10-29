import { Service, signal } from '@angular/core';
import { cartItemModel } from '../components/cart-items/cart-item.model';

@Service()
export class PanierService {

  private readonly _cartItems = signal<cartItemModel[]>([])
  public readonly cartItems = this._cartItems.asReadonly()

  public ajouter(cartItem : cartItemModel) {
    if(this.IsAlreadyInCart(cartItem) ) {
      this._cartItems.update((list) => list.map((ct) =>
      ct.product.id === cartItem.product.id
      ? {...ct, quantity : ct.quantity + cartItem.quantity}
      : ct))

      return;
    }
    this._cartItems.update((list) => [...list, cartItem])
  }

  public remove(itemId: number) {
    console.debug("Remove item : " + itemId);
    this._cartItems.update((list) => list.filter(i => i.product.id !== itemId));
  }

  public clear() {
    console.debug("Clear cart !");
    this._cartItems.set([]);
  }

  private IsAlreadyInCart(cartItem : cartItemModel) {
    let productsFind : cartItemModel[] = this._cartItems().filter(ct =>
      ct.product.id === cartItem.product.id)

      if(productsFind.length > 1) {
        console.error("un doublon s'est glissé dans notre panier")
        return true; // return arrête la fonction immédiatement
      }

      return productsFind.length === 1 ? true : false;
  }
}
