"use client";
import React from "react";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-primary text-center">Contact Us</h1>

      {/* Google Map Embed */}
      <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed/v1/place?q=Khana+Indian+Cuisine&key=AIzaSyAB7NPpcWN5yp67Z4PTk04urWhTdrDPWFg" 
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="bg-teal-700 dark:bg-teal-700 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Message</label>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-opacity-80 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
