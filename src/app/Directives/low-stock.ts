import { computed, Directive, input } from "@angular/core";

@Directive({
  selector:'[appLowStock]',
  host: {
    '[style.backgroundColor]' : "color()"
  }
})

export class LowStock {
  // L'ALIAS PERMET, DANS LES BALISES QUI VONT UTILISER NOTRE DIRECTIVE, DE FAIRE
  // [appLowStock]="amount"
  // SI ON N'A PAS D'ALIAS, IL FAUT METTRE LA DIRECTIVE ET L'INPUT SÉPARÉMENT :
  // appLowStock [stockAmount]="amount"
  stockAmount = input.required<number>({alias: "appLowStock"}) // AFFECTER LA VALEUR DU STOCK D'UN PRODUIT

  color = computed(() => this.stockAmount() <= 3  ? "#fee2e2" : "")
}
