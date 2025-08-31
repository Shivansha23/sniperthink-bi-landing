'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    // Scroll to CTA section
    scrollToSection('cta');
  };

  return (
    <header className="sitewide-header">
      <div className="auto-layout-wrapper">
        <div className="auto-layout-4">
          <div className="auto-layout-vertical-8">
            <Link href="/" className="logo-2">
              <div className="overlap-group-6">
                <Image 
                  src="/images/Logo.png" 
                  alt="Intelligence Growth Engine Logo" 
                  width={180} 
                  height={40} 
                  className="w-auto h-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          <nav className="tab-bar-dark-items">
            <button onClick={() => scrollToSection('home')} className="tab-one">
              <div className="text-wrapper-38">Home</div>
            </button>
            <button onClick={() => scrollToSection('layers')} className="div-wrapper-3">
              <div className="text-wrapper-38">Layers</div>
            </button>
            <button onClick={() => scrollToSection('why-us')} className="div-wrapper-3">
              <div className="text-wrapper-38">Why Us</div>
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="div-wrapper-3">
              <div className="text-wrapper-38">Testimonials</div>
            </button>
          </nav>

          <div className="auto-layout-5">
            <button onClick={handleContactClick} className="hidden md:block">
              <Image 
                className="blue-glow-button-3" 
                src="/images/contact-us-button.svg" 
                alt="Contact Us" 
                width={160}
                height={48}
              />
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="mobile-menu-button md:hidden" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden">
            <button onClick={() => scrollToSection('home')} className="mobile-nav-item w-full text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('layers')} className="mobile-nav-item w-full text-left">
              Layers
            </button>
            <button onClick={() => scrollToSection('why-us')} className="mobile-nav-item w-full text-left">
              Why Us
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="mobile-nav-item w-full text-left">
              Testimonials
            </button>
            <button onClick={handleContactClick} className="mobile-contact-button bg-[#0e9390] text-white px-6 py-2 rounded-full hover:bg-[#17605c] transition-all">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
