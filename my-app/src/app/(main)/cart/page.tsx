"use client";
import React from "react";
import { useCart } from "../menu/_context/CartContext";
import CartItem from "./CartItem";

export default function CartPage() {
  const { cartItems, clearCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  console.log("Cart contents:", cartItems);
  
  return (
    <div className="max-w-4xl mx-auto mt-24 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2 text-primary">Your Cart</h1>
      <p className="text-gray-600 mb-6">{itemCount} item(s) in your cart</p>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <a href="/menu" className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
            Browse Menu
          </a>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.name} item={item} />
            ))}
          </div>
          
          <div className="mt-8 pt-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Subtotal:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            {/* You can add tax, delivery fee, etc. here */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Clear Cart
              </button>
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition ml-auto"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}