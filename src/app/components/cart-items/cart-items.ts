import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product';
import { cartItemModel } from './cart-item.model';

@Component({
  imports: [],
  selector: 'app-cart-items',
  styleUrl: './cart-items.scss',
  templateUrl: './cart-items.html',
})
export class CartItems {
  //l'interface/objet que vous avez crée entre chevron est disponible uniquement dans notre composant CartItems
  //ligneItem = input.required<{product : Product, quantity : number}>()

  //utiliser une interface qui peut être importer par tout autre composant que cartItem
  public ligneItemCart = input.required<cartItemModel>();

  public onRemoveItem = output<number>();


  protected onRemoveBtnClicked(event: Event) {
    event.preventDefault();

    this.onRemoveItem.emit(this.ligneItemCart().product.id);
  }
}
