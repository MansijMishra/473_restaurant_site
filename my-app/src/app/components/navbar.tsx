"use client";
import Link from "next/link";
import { Bell, CircleUser } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navbar({ type }: { type: string }) {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <div>
      {type == "guest" ? (
        <div className="bg-darkBlue w-100vw text-lightBlue flex justify-between font-extrabold py-4 px-8">
          <Link href="/" className="text-gold text-4xl">
            Restaurant
          </Link>
          <ul className="flex gap-6 text-2xl flex-row items-center">
            <Link href="/about" className="hover:text-gold">
              About
            </Link>
            <Link href="/login" className="hover:text-gold">
              Login
            </Link>
            <Link href="/signup" className="hover:text-gold">
              Sign Up
            </Link>
          </ul>
        </div>
      ) : (
        <div>
          <div className="bg-teal-700 w-100vw text-lightBlue flex justify-between font-extrabold py-4 px-8">
            <Link href="/home" className="text-amber-500 text-4xl">
            Khana | Indian Cuisine
            </Link>
            <ul className="flex gap-6 text-2xl flex-row items-center">
              <Link href="/home" className="hover:text-amber-500">
                Home
              </Link>
              <Link href="/menu" className="hover:text-amber-500">
                Menu
              </Link>
              <Link href="/about" className="hover:text-amber-500">
                About
              </Link>
              <Link href="/contact" className="hover:text-amber-500">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}