import { Component, input, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quantity-picker',
  styleUrl: './quantity-picker.scss',
  templateUrl: './quantity-picker.html',
})
// Composant réutilisable : boutons - et + pour choisir une quantité
// utilisé dans product-card (avant l'ajout au panier) et dans cart-items (dans le panier)
// il ne sait pas d'où viennent les chiffres : il reçoit une quantité + un max, et renvoie la nouvelle quantité
export class QuantityPicker {
  // model = input + output en un seul :
  //  - input "quantity" : le parent nous donne la quantité de départ
  //  - output "quantityChange" : créé AUTOMATIQUEMENT par Angular (nom du model + "Change", nom obligatoire)
  //    à chaque set()/update() sur quantity, Angular émet quantityChange avec la nouvelle valeur
  // c'est ce qui permet d'écrire [(quantity)]="..." côté parent (double liaison, "banana in a box") :
  //  [(quantity)]="x"  ===  [quantity]="x" (quantityChange)="x = $event"
  quantity = model.required<number>()

  // le parent nous envoie le stock pour ne pas dépasser la quantité disponible
  max = input.required<number>()

  decrement() : void {
    // on ne descend jamais en dessous de 1
    if (this.quantity() > 1) {
      this.quantity.update((quant) => quant - 1);
    }
  }

  increment() : void {
    // on ne monte jamais au-dessus du stock
    if (this.quantity() < this.max()) {
      this.quantity.update((quant) => quant + 1 )
    }
  }

}
