import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      favorite: [],
      addToFavorite: (productId) =>
        set({ favorite: [...get().favorite, productId] }),
      removeFromFavorite: (productId) =>
        set(() => {
          let eski = get().favorite;
          let yangi = eski.filter((id) => id !== productId);
          return { favorite: yangi };
        }),

      cart: [],
      addToCart: (productId) => set({ cart: [...get().cart, productId] }),
      removeFromCart: (productId) =>
        set(() => {
          let eski = get().cart;
          let yangi = eski.filter((id) => id !== productId);
          return { cart: yangi };
        }),
    }),
    {
      name: "uzum-storage", // Name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    }
  )
);
