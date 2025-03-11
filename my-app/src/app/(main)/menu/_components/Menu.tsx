"use client";
import React from "react";
import FoodCard from "./FoodCard";

export default function Menu() {
    const appetizers = [
        {
          image: "samosa.jpg",
          name: "Vegetable Samosa",
          description: "Crispy pastry filled with spiced potatoes and peas.",
          price: "4.99",
        },
        {
          image: "paneer-tikka.jpg",
          name: "Paneer Tikka",
          description: "Grilled paneer cubes marinated in yogurt and spices.",
          price: "8.99",
        },
        {
          image: "aloo-tikki.jpg",
          name: "Aloo Tikki",
          description: "Spiced potato patties served with chutney.",
          price: "6.99",
        },
        {
          image: "pakora.jpg",
          name: "Vegetable Pakora",
          description: "Crispy deep-fried vegetable fritters with chickpea flour.",
          price: "5.99",
        },
        {
          image: "dahi-puri.jpg",
          name: "Dahi Puri",
          description: "Crunchy puris filled with spiced yogurt and chutneys.",
          price: "7.49",
        },
        {
            image: "pani-puri.jpg",
            name: "Pani Puri",
            description: "Crispy puris filled with spiced water, potatoes, and chickpeas.",
            price: "6.49",
          }
      ];
    
      const mains = [
        {
          image: "paneer-butter-masala.jpg",
          name: "Paneer Butter Masala",
          description: "Paneer cooked in a creamy tomato-based curry.",
          price: "12.99",
        },
        {
          image: "chole-bhature.jpg",
          name: "Chole Bhature",
          description: "Spiced chickpea curry served with fluffy fried bread.",
          price: "11.99",
        },
        {
          image: "dal-tadka.jpg",
          name: "Dal Tadka",
          description: "Lentils tempered with ghee, garlic, and Indian spices.",
          price: "10.99",
        },
        {
          image: "baingan-bharta.jpg",
          name: "Baingan Bharta",
          description: "Smoky mashed eggplant cooked with onions and spices.",
          price: "11.49",
        },
        {
          image: "malai-kofta.jpg",
          name: "Malai Kofta",
          description: "Vegetable and paneer dumplings in a rich creamy sauce.",
          price: "13.49",
        },
        {
            image: "matar-paneer.jpg",
            name: "Matar Paneer",
            description: "Cottage cheese and green peas cooked in a spiced tomato gravy.",
            price: "12.49",
          }
      ];
    
      const desserts = [
        {
          image: "gulab-jamun.jpg",
          name: "Gulab Jamun",
          description: "Soft, deep-fried dumplings soaked in sugar syrup.",
          price: "5.99",
        },
        {
          image: "rasmalai.jpg",
          name: "Rasmalai",
          description: "Creamy, spongy cheese discs soaked in saffron milk.",
          price: "6.99",
        },
        {
          image: "kheer.jpg",
          name: "Kheer",
          description: "Traditional Indian rice pudding flavored with cardamom.",
          price: "5.49",
        },
        {
          image: "jalebi.jpg",
          name: "Jalebi",
          description: "Crispy, deep-fried spirals soaked in saffron syrup.",
          price: "4.99",
        },
        {
          image: "moong-dal-halwa.jpg",
          name: "Moong Dal Halwa",
          description: "Rich Indian dessert made with lentils, ghee, and sugar.",
          price: "7.49",
        },
        {
            image: "gajar-halwa.jpg",
            name: "Gajar Ka Halwa",
            description: "Sweet carrot pudding slow-cooked with milk, ghee, and nuts.",
            price: "6.99",
          }
      ];

  return (
    <div className="p-6 space-y-10">
      {/* Appetizers */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Appetizers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appetizers.map((item, index) => (
            <FoodCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>

      {/* Main Course */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Main Course</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mains.map((item, index) => (
            <FoodCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>

      {/* Desserts */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-4">Desserts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {desserts.map((item, index) => (
            <FoodCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
