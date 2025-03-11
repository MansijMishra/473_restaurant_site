"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-lightBlue py-6 px-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Business Hours */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-amber-500">Business Hours</h3>
          <p className="text-lg">Monday - Sunday: 11:00 AM - 10:00 PM</p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="https://facebook.com" target="_blank" className="hover:text-amber-500">
            <Facebook size={28} />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-amber-500">
            <Instagram size={28} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-amber-500">
            <Twitter size={28} />
          </Link>
        </div>

      </div>
    </footer>
  );
}
