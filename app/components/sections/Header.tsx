"use client";

import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    "Home",
    "Layers",
    "Why Us",
    "Testimonials",
    "FAQ",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] border-b border-gray-700/50 backdrop-blur-lg" style={{
        width: '100%',
        height: '64px',
        opacity: 1,
        paddingTop: '8px',
        paddingRight: 'clamp(16px, 4vw, 80px)',
        paddingBottom: '8px',
        paddingLeft: 'clamp(16px, 4vw, 80px)',
        background: 'rgba(10, 10, 10, 0.6)',
        backdropFilter: 'blur(56px)',
        boxShadow: '0px 6.65px 5.32px 0px #00000007, 0px 22.34px 17.87px 0px #0000000B, 0px 100px 80px 0px #00000012'
      }}>
      <div className="max-w-full mx-auto flex items-stretch justify-between relative">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer pl-0 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-8">
          <img 
            src="/images/logo.svg" 
            alt="SniperThink Logo"
            width={371}
            height={44}
            className="flex-shrink-0 w-max sm:w-[150px] md:w-[200px] lg:w-max h-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center space-x-8 py-2">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-[#91C499] transition-all duration-300 hover:scale-105 font-medium py-1"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center">
          <button
            type="button"
            className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-4 py-2 rounded-[2rem]"
          >
            Start Free Trial
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7 text-gray-300" /> : <Menu className="w-7 h-7 text-gray-300" />}
        </button>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0F0F11]/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-[#91C499] transition-all duration-300 font-medium text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              type="button"
              className="w-full bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-4 py-2 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Start Free Trial
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
