"use client";
import React from "react";
import { useCart } from "../menu/_context/CartContext";
import CartItem from "./CartItem";

export default function CartPage() {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  console.log("Cart contents:", cartItems);

  return (
    <div className="max-w-3xl mx-auto mt-24 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-primary">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.name} item={item} />
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
