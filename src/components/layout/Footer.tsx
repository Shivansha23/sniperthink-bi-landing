'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="inner-frame">
        <div className="frame-12">
          <div className="auto-layout-vertical-4">
            <div className="frame-13">
              <Image 
                src="/images/Logo.png" 
                alt="Intelligence Growth Engine Logo" 
                width={180} 
                height={40} 
                className="logo"
                priority
              />
              <div className="frame-14">
                <p className="text-wrapper-30">
                  Intelligence Growth Engine delivers clarity, automation, and AI-driven execution for fast-moving teams. 
                  Your edge starts here.
                </p>
              </div>
            </div>
            <div className="auto-layout-vertical-5">
              <Link href="/terms" className="text-wrapper-31">Terms &amp; Conditions</Link>
              <div className="text-wrapper-32">|</div>
              <Link href="/privacy" className="text-wrapper-31">Privacy Policy</Link>
            </div>
            <div className="div-8">
              <div className="frame-15">
                <a href="tel:+919873587694" className="frame-16">
                  <div className="img-2">
                    <svg className="vector-6" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-wrapper-33">+91 9873587694</div>
                </a>
              </div>
              <div className="frame-15">
                <a href="mailto:hello@example.com" className="frame-16">
                  <div className="img-2">
                    <svg className="vector-7" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6l-10 7-10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-wrapper-34">hello@example.com</div>
                </a>
              </div>
            </div>
          </div>
          <div className="frame-17">
            <div className="auto-layout-vertical-6">
              <button onClick={() => scrollToSection('home')} className="auto-layout-2">
                <div className="text-wrapper-35">Home</div>
                <div className="img-wrapper">
                  {/* Arrow can be added here if needed */}
                </div>
              </button>
              <button onClick={() => scrollToSection('layers')} className="auto-layout-2">
                <div className="text-wrapper-35">Layers</div>
                <div className="img-wrapper">
                  {/* Arrow can be added here if needed */}
                </div>
              </button>
              <button onClick={() => scrollToSection('why-us')} className="auto-layout-2">
                <div className="text-wrapper-35">Why Us</div>
                <div className="img-wrapper">
                  {/* Arrow can be added here if needed */}
                </div>
              </button>
            </div>
            <div className="auto-layout-vertical-6">
              <button onClick={() => scrollToSection('testimonials')} className="auto-layout-2">
                <div className="text-wrapper-35">Testimonials</div>
                <div className="img-wrapper">
                  {/* Arrow can be added here if needed */}
                </div>
              </button>
              <button onClick={() => scrollToSection('cta')} className="auto-layout-2">
                <div className="text-wrapper-35">Contact</div>
                <div className="img-wrapper">
                  {/* Arrow can be added here if needed */}
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="rights">
          <div className="line-wrapper">
            {/* Line is added via CSS */}
          </div>
          <div className="frame-18">
            <div className="auto-layout-vertical-7">
              <div className="text-wrapper-31">Copyright © 2025</div>
              <div className="text-wrapper-32">|</div>
              <div className="text-wrapper-31">Intelligence Growth Engine, All Rights Reserved</div>
            </div>
            <div className="auto-layout-3">
              <div className="text-wrapper-36">Connect with us:</div>
              <div className="div-8">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="frame-19">
                  <svg className="vector-9" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="frame-19">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5z"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <path d="M17.5 6.5h.01"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="frame-19">
                  <svg className="vector-10" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <path d="M2 9h4v12H2z"/>
                    <path d="M4 2a2 2 0 100 4 2 2 0 000-4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
