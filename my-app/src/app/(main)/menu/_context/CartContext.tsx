"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string; // Add image property
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void; // Add this new function
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export function CartProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage if available
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    console.log("Cart item being added:", item);
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.name === item.name);
      
      if (existingIndex !== -1) {
        // Create a new array with the updated item
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        console.log("Updated cart:", updated);
        return updated;
      } else {
        // Add new item with quantity 1
        const newCart = [...prev, { ...item, quantity: 1 }];
        console.log("New cart:", newCart);
        return newCart;
      }
    });
  };

  const removeFromCart = (name: string) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.name === name ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  // New function to directly update quantity
  const updateQuantity = (name: string, quantity: number) => {
    if (quantity <= 0) {
      // Remove item completely if quantity is 0 or negative
      setCartItems((prev) => prev.filter((item) => item.name !== name));
    } else {
      setCartItems((prev) =>
        prev.map((item) => 
          item.name === name ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => setCartItems([]);

  const value = { cartItems, addToCart, removeFromCart, updateQuantity, clearCart };
  console.log("Current cart context value:", value);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}