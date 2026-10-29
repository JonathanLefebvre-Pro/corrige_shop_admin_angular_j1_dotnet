import { Component, computed, inject } from '@angular/core';
import { CartService } from '@infrastructure/services/panier.service';
import { CurrencyPipe } from '@angular/common';
import { CartItems } from '@presentation/components/cart-items/cart-items';

@Component({
  imports: [CartItems, CurrencyPipe],
  selector: 'app-cart-page',
  styleUrl: './cart-page.scss',
  templateUrl: './cart-page.html',
})
export class CartPage {
  private readonly cartService = inject(CartService)

  protected cart = this.cartService.cartItems
  protected totalHTVA = computed(() => this.cart().reduce((total, item) => total + (item.product.price * item.quantity), 0))
  protected TVA = computed(() => this.totalHTVA() * 0.21)
  protected TotalTTC = computed(() => this.totalHTVA() + this.TVA())

  protected handleRemoveItem(itemId: number) {
    this.cartService.removeItem(itemId);
  }

  protected handleClearCart(event: Event) {
    event.preventDefault();
    this.cartService.clear();
  }
}
