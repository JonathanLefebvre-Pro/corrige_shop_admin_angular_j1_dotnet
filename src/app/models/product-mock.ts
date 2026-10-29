import { Product } from "../domain/product";

export const PRODUCTS: readonly Product[] = [
  // ===== INFORMATIQUE (5) =====
  {
    id: 1, name: 'Clavier mécanique', price: 89.99, stock: 2, category: 'Informatique',
    imageUrl: 'https://images.unsplash.com/photo-1756387462457-9afa97d2dbe8?w=600&h=600&fit=crop&fm=jpg&q=80',
  },
  {
    id: 2, name: 'Souris sans fil', price: 29.99, stock: 30, category: 'Informatique',
    imageUrl: 'https://images.unsplash.com/photo-1585816517178-2398c69d12c6?w=600&h=600&fit=crop&fm=jpg&q=80',
  },
  {
    id: 4, name: 'Pack clavier + souris sans fil', price: 119.00, stock: 8, category: 'Informatique',
    imageUrl: 'https://images.unsplash.com/photo-1664249574324-be8030d95ec0?w=600&h=600&fit=crop&fm=jpg&q=80',
  },
  {
    id: 5, name: 'Écran 27" Full HD', price: 179.99, stock: 5, category: 'Informatique',
    imageUrl: 'https://images.unsplash.com/photo-1641997076583-20f1fc66a900?w=600&h=600&fit=crop&fm=jpg&q=80',
  },
  {
    id: 6, name: 'Écran incurvé 34"', price: 399.00, stock: 3, category: 'Informatique',
    imageUrl: 'https://images.unsplash.com/photo-1666771410255-158c17cf8ff8?w=600&h=600&fit=crop&fm=jpg&q=80',
  },

  // ===== AUDIO (6) =====
  {
    id: 3, name: 'Casque audio', price: 59.90, stock: 0, category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1590845947676-fa2576f401b2?w=600&h=600&fit=crop&fm=jpg&q=80',
  },
  {
    id: 7, name: 'Enceinte Bluetooth portable', price: 49.99, stock: 15, category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1549400854-b4300f444934?w=600&h=600&fit=crop&fm=jpg&q=80',
  },
  {
    id: 8, name: 'Enceinte connectée', price: 129.00, stock: 6, category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1752955471067-294a5de5bf48?w=600&h=600&fit=crop&fm=jpg&q=80',
  },
  {
    id: 9, name: 'Écouteurs sans fil', price: 99.00, stock: 20, category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1525825691042-e14d9042fc70?w=600&h=600&fit=crop&fm=jpg&q=80',
  },
  {
    id: 10, name: 'Micro USB podcast', price: 69.90, stock: 4, category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1636294155447-b1a63a5cb084?w=600&h=600&fit=crop&fm=jpg&q=80',
  },
  {
    id: 11, name: 'Micro de studio', price: 149.00, stock: 1, category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1767474365536-ef81bfa24c8a?w=600&h=600&fit=crop&fm=jpg&q=80',
  },
];
