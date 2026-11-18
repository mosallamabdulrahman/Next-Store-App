import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@app/types/product";

type CartStore = {
  cart: Product[];
  favorites: Product[];
  addToCart: (product: Product) => void;
  addToFavorites: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  removeFromFavorites: (productId: number) => void;
};

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      favorites: [],

      addToCart: (product) =>
        set((state) => ({
          cart: [...state.cart, product],
        })),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== productId),
        })),
      addToFavorites: (product) =>
        set((state) => ({
          favorites: [...state.favorites, product],
        })),
      removeFromFavorites: (productId) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (product) => product.id !== productId,
          ),
        })),
    }),
    {
      name: "shop-storage",
    },
  ),
);
