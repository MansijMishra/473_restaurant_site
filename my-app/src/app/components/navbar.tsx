"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Home, Utensils, Info, Mail, ShoppingCart } from "lucide-react";
import { useCart } from "../(main)/menu/_context/CartContext"; 

export default function Navbar({ type }: { type: string }) {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Connect to cart context to access the cart items
  const { cartItems } = useCart();
  
  // Calculate total items in cart (sum of all quantities)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    };
    
    if (dropdown) {
      document.addEventListener("mouseup", handleClickOutside);
    } else {
      document.removeEventListener("mouseup", handleClickOutside);
    }
  }, [dropdown]);
  
  return (
    <nav className="bg-teal-700 w-full text-lightBlue font-extrabold py-4 px-8 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/home" className="text-amber-500 text-3xl md:text-4xl">
          Khana | Indian Cuisine
        </Link>
        
        {/* Desktop Nav (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-6 text-lg items-center">
          <Link href="/home" className="hover:text-amber-500 flex items-center gap-1">
            <Home size={20} /> Home
          </Link>
          <Link href="/menu" className="hover:text-amber-500 flex items-center gap-1">
            <Utensils size={20} /> Menu
          </Link>
          <Link href="/about" className="hover:text-amber-500 flex items-center gap-1">
            <Info size={20} /> About
          </Link>
          <Link href="/contact" className="hover:text-amber-500 flex items-center gap-1">
            <Mail size={20} /> Contact
          </Link>
          <Link href="/cart" className="hover:text-amber-500 flex items-center gap-1 relative">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-amber-500 text-teal-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </ul>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-lightBlue"
          onClick={() => setDropdown(!dropdown)}
        >
          {dropdown ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {dropdown && (
        <div
          ref={dropdownRef}
          className="md:hidden absolute top-16 left-0 w-full bg-teal-800 text-lightBlue py-4"
        >
          <ul className="flex flex-col gap-4 items-center text-lg">
            <Link href="/home" className="hover:text-amber-500 flex items-center gap-2">
              <Home size={22} /> Home
            </Link>
            <Link href="/menu" className="hover:text-amber-500 flex items-center gap-2">
              <Utensils size={22} /> Menu
            </Link>
            <Link href="/about" className="hover:text-amber-500 flex items-center gap-2">
              <Info size={22} /> About
            </Link>
            <Link href="/contact" className="hover:text-amber-500 flex items-center gap-2">
              <Mail size={22} /> Contact
            </Link>
            <Link href="/cart" className="hover:text-amber-500 flex items-center gap-2 relative">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-amber-500 text-teal-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}