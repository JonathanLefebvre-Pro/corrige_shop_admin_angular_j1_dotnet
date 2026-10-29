import { Component, computed, inject, linkedSignal, signal, WritableSignal } from '@angular/core';
import { ProductCard } from '@presentation/components/product-card/product-card';
import { Product } from '@domain/product';
import { ProductService } from '@infrastructure/services/product.service';
import { PanierService } from '@infrastructure/services/panier.service';

@Component({
  selector: 'app-catalogue-page',
  imports: [ProductCard],
  templateUrl: './catalogue-page.html',
  styleUrl: './catalogue-page.scss',
})

export class CataloguePage {

  protected readonly productService = inject(ProductService);
  protected readonly panierService = inject(PanierService)

  // le stock est recalculé à partir du panier du service => il survit au changement de page
  // stock affiché = stock de base - quantité déjà dans le panier
  protected products = computed<Product[]>(() => this.productService.getProducts().map(product => {
    const quantiteDansPanier = this.panierService.cartItems()
      .find(ct => ct.product.id === product.id)?.quantity ?? 0;
    return {...product, stock: product.stock - quantiteDansPanier};
  }))

  protected readonly cartCount = signal(0);
  protected readonly categories = signal<string[]>(["Informatique", "Audio"])


  protected addToCart(event : {product: Product; quantity: number}) {
    this.panierService.ajouter(event)

    this.cartCount.update((c) => c + event.quantity);
  }

  // LINKEDSIGNAL QUI PERMET de choisir notre categorie this.categoryChoice();
  // deux bouton pour les deux catégorie quand on clique sur un bouton le linked signal doit faire qlq chose
  // if dans le

  // Je crée une liste de produit avec seulement la catégorie Audio
  protected nbrAudio = computed(() => this.products().filter(product => product.category === 'Audio'))

  // Je crée jne liste de produit avec seulement la catégorie Inforatique
  protected nbrInformatique = computed(() => this.products().filter(product => product.category === 'Informatique'))

  // mon linked signal calcule quelle tableau de produit est le plus grand
  // SI AUDIO est plus grand que informatique notre selected va s'initialsier a 'Audio'
  // SI Audio est plus petit que informatique notre select va s'initialiser a 'Informatique'
  protected selected : WritableSignal<string> = linkedSignal(() => this.nbrAudio().length > this.nbrInformatique().length ? 'Audio' : 'Informatique');

  protected choisi(categoryChoice : string) : void {
    this.selected.set(categoryChoice);
  }
}
