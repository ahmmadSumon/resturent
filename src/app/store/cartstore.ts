import create from 'zustand';

interface CartItem {
  title: string;
  price: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (title: string) => void;
  increaseQuantity: (title: string) => void;
  decreaseQuantity: (title: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (item) => set((state) => {
    const existingItemIndex = state.cartItems.findIndex((cartItem) => cartItem.title === item.title);
    if (existingItemIndex >= 0) {
      const updatedCartItems = state.cartItems.map((cartItem, index) =>
        index === existingItemIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      return { cartItems: updatedCartItems };
    } else {
      return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
    }
  }),
  removeFromCart: (title) => set((state) => ({
    cartItems: state.cartItems.filter((item) => item.title !== title)
  })),
  increaseQuantity: (title) => set((state) => ({
    cartItems: state.cartItems.map((item) =>
      item.title === title ? { ...item, quantity: item.quantity + 1 } : item
    ),
  })),
  decreaseQuantity: (title) => set((state) => ({
    cartItems: state.cartItems.map((item) =>
      item.title === title && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ),
  })),
  clearCart: () => set({ cartItems: [] })
}));

export default useCartStore;
