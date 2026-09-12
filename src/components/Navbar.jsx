import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left: Brand Logo & Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-white font-bold shadow-md">
              DS
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Dev <span className="text-brand-gradient">Stack</span>
            </span>
          </div>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-pink-600 transition">Home</a>
            <a href="#technologies" className="hover:text-pink-600 transition">Technologies</a>
            <a href="#projects" className="hover:text-pink-600 transition">Projects</a>
            <a href="#about" className="hover:text-pink-600 transition">About</a>
            <a href="#contact" className="hover:text-pink-600 transition">Contact</a>
          </div>

          {/* Right: Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2">
              Sign In
            </button>
            <button className="text-sm font-medium text-white bg-brand-gradient px-5 py-2 rounded-full shadow-md hover:opacity-90 transition">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button className="text-sm font-medium text-white bg-brand-gradient px-3 py-1.5 rounded-full">
              Sign Up
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-2">
          <a href="#home" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">Home</a>
          <a href="#technologies" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">Technologies</a>
          <a href="#projects" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">Projects</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">About</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50">Contact</a>
          <div className="pt-2 border-t border-slate-100 flex justify-between">
            <button className="text-sm font-medium text-slate-700 px-3 py-2">Sign In</button>
          </div>
        </div>
      )}
    </nav>
  );
}