"use client";
import React from "react";
import { CartItem as ItemType, useCart } from "../menu/_context/CartContext";

interface CartItemProps {
  item: ItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-3">
      <div>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
        <button
          onClick={() => removeFromCart(item.name)}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
