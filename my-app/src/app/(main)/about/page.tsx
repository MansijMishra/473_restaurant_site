"use client";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-10 bg-teal-700 pt-24 mt-40">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
        <Image
          src="/kitchen.jpg" // Make sure this image is inside /public
          alt="Restaurant Interior"
          layout="fill"
          className="object-cover"
        />
      </div>

      {/* About Story */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Our Story</h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Nestled in the heart of the city, <span className="font-semibold">Khana</span> was born out of a passion for authentic Indian flavors. 
          What started as a humble family-run eatery has blossomed into a cherished culinary destination, where the aroma of freshly ground spices 
          and the warmth of traditional hospitality welcome every guest.
        </p>
      </section>

      {/* Special Dishes */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Our Signature Dishes</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          From the rich, creamy <span className="font-semibold">Paneer Butter Masala</span> to the tangy burst of <span className="font-semibold">Pani Puri</span>, 
          every dish at Swaad tells a story of tradition and flavor. Our chefs craft each meal with the finest locally sourced ingredients, ensuring an 
          experience that is both authentic and unforgettable.
        </p>
      </section>

      {/* Mission */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          At Khana, our mission is simple — to bring the **true essence of Indian cuisine** to your plate. 
          We believe in the power of food to bring people together, creating moments of joy with every bite. 
          Whether you're here for a comforting bowl of <span className="font-semibold">Dal Tadka</span> or a celebratory feast, 
          we strive to make every meal an experience worth remembering.
        </p>
      </section>

      {/* Closing Statement */}
      <div className="text-center mt-10">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          "Great food, great company, and a touch of tradition – that’s the Khana promise."
        </p>
      </div>
    </div>
  );
}
