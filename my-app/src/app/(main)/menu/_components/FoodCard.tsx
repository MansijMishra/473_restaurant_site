"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "../_context/CartContext";

interface FoodCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

export default function FoodCard({ image, name, description, price }: FoodCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden w-full max-w-3xl">
      {/* Image Section */}
      <div className="w-full md:w-1/3 h-48 md:h-56 relative">
        <Image
          src={`/${image}`}
          alt={name}
          fill
          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-4 md:w-2/3">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{description}</p>
        <div className="mt-4 text-lg font-bold text-primary">${price}</div>

        <button
          onClick={() => {
            console.log("Adding to cart:", name);
            addToCart({ name, price: parseFloat(price), quantity: 1 });
          }}
          className="mt-4 self-start bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
