"use client";

import Link from "next/link";
import { useState } from "react";
import "../styles/globals.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#232F3E] shadow-md fixed bottom-0 left-0 w-full z-50 flex items-center justify-center h-[50px]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          MyBusiness
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium gap-5">
          <li><Link href="/" className="text-white hover:text-blue-600">Home</Link></li>
          <li><Link href="/services" className="text-white hover:text-blue-600">Services</Link></li>
          <li><Link href="/blogs" className="text-white hover:text-blue-600">Blogs</Link></li>
          <li><Link href="/projects" className="text-white hover:text-blue-600">Projects</Link></li>
          <li><Link href="/templates" className="text-white hover:text-blue-600">Templates</Link></li>
          <li><Link href="/plans" className="text-white hover:text-blue-600">Your Plans</Link></li>
          <li><Link href="/about" className="text-white hover:text-blue-600">About</Link></li>
          <li><Link href="/contact" className="text-white hover:text-blue-600">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-4 py-4 font-medium">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link></li>
            <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="/templates" onClick={() => setIsOpen(false)}>Templates</Link></li>
            <li><Link href="/plans" onClick={() => setIsOpen(false)}>Your Plans</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;