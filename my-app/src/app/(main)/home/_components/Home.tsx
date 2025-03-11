"use client";
import React from "react";
import ImageSlider from "./ImageSlider";
import Link from "next/link";

export default function Home() {
  const images = [
    "khana.jpg",
    "inside1.jpg",
    "inside2.jpg",
    "inside3.jpg",
    "kitchen.jpg",
    "inside4.jpg",
  ];

  return (
    <div className="bg-green-50 min-h-screen mt-24">
      {/* Image Slider */}
      <ImageSlider images={images} />

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold text-amber-600">
          Authentic Vegetarian Indian Cuisine
        </h1>
        <p className="mt-6 text-lg text-gray-700 dark:text-black max-w-xl">
          Experience the rich flavors of traditional Indian dishes, crafted with the finest
          ingredients and a passion for authenticity.
        </p>
        
        {/* Call-to-Action Button */}
        <Link href="/menu">
          <button className="mt-8 px-6 py-3 bg-amber-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-amber-600 transition">
            View Menu
          </button>
        </Link>
      </div>
    </div>
  );
}
