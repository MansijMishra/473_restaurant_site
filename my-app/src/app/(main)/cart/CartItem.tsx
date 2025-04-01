"use client";
import React from "react";
import Image from "next/image";
import { CartItem as ItemType, useCart } from "../menu/_context/CartContext";

interface CartItemProps {
  item: ItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCart();
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      updateQuantity(item.name, newQuantity);
    }
  };

  const incrementQuantity = () => {
    updateQuantity(item.name, item.quantity + 1);
  };

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.name, item.quantity - 1);
    } else {
      removeFromCart(item.name);
    }
  };
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center border-b py-4 gap-4">
      {/* Image and Name */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
          <Image
            src={`/${item.image}`}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
        </div>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button 
          onClick={decrementQuantity}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100"
        >
          -
        </button>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-12 text-center border border-gray-300 rounded-md"
        />
        <button 
          onClick={incrementQuantity}
          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100"
        >
          +
        </button>
      </div>
      
      {/* Price and Remove Button */}
      <div className="flex items-center gap-4 ml-auto">
        <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
        <button
          onClick={() => updateQuantity(item.name, 0)} // Remove completely
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
