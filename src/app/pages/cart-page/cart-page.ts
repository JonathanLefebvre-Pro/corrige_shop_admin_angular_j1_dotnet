import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CartItems } from '../../components/cart-items/cart-items';
import { PanierService } from '../../services/panier.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CartItems, CurrencyPipe],
  selector: 'app-cart-page',
  styleUrl: './cart-page.scss',
  templateUrl: './cart-page.html',
})
export class CartPage {
  private readonly panierService = inject(PanierService)

  protected cart = this.panierService.cartItems
  protected totalHTVA = computed(() => this.cart().reduce((total, item) => total + (item.product.price * item.quantity), 0))
  protected TVA = computed(() => this.totalHTVA() * 0.21)
  protected TotalTTC = computed(() => this.totalHTVA() + this.TVA())

  protected handleRemoveItem(itemId: number) {
    this.panierService.remove(itemId);
  }

  protected handleClearCart(event: Event) {
    event.preventDefault();
    this.panierService.clear();
  }
}
