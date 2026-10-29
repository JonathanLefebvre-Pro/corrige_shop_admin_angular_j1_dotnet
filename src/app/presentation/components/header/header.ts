import { CartService } from '@/app/infrastructure/services/panier.service';
import { Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected title = 'ShopAdmin';

  protected readonly cartService = inject(CartService);

  protected totalItems = computed(() => this.cartService.cartItems.length);
  protected totalItemsByQuantity = computed(() => 
    this.cartService.cartItems()
    .reduce((prev, current) => prev + current.quantity, 0))
}
