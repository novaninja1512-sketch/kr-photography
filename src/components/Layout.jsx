import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md overflow-x-hidden relative">
      {/* Grain Overlay */}
      <div className="fixed inset-0 grain-texture z-[1]"></div>

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/30">
        <div className="max-w-container-max mx-auto px-gutter py-6 flex justify-between items-center">
          <Link
            to="/"
            className="font-display-lg text-headline-md text-primary tracking-tighter hover:opacity-85 transition-opacity"
          >
            K.R. Photography
          </Link>
          
          <div className="hidden md:flex gap-12 items-center">
            <Link
              to="/portfolio"
              className={`font-label-md text-label-md uppercase tracking-widest transition-colors duration-300 relative py-1 ${
                isActive('/portfolio')
                  ? "text-primary after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full"
                  : "text-on-surface hover:text-primary"
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/"
              className={`font-label-md text-label-md uppercase tracking-widest transition-colors duration-300 relative py-1 ${
                isActive('/')
                  ? "text-primary after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full"
                  : "text-on-surface hover:text-primary"
              }`}
            >
              Stories
            </Link>
            <Link
              to="/experience"
              className={`font-label-md text-label-md uppercase tracking-widest transition-colors duration-300 relative py-1 ${
                isActive('/experience')
                  ? "text-primary after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full"
                  : "text-on-surface hover:text-primary"
              }`}
            >
              Experience
            </Link>
            <Link
              to="/inquire"
              className="border border-primary/40 px-8 py-2 font-label-md text-label-md uppercase tracking-widest text-primary hover:bg-primary hover:text-background transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="material-symbols-outlined text-primary scale-125 focus:outline-none"
            >
              {mobileMenuOpen ? 'close' : 'menu'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-primary/20 px-gutter py-6 space-y-6 flex flex-col items-center">
            <Link
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-md text-label-md uppercase tracking-widest ${
                isActive('/portfolio') ? 'text-primary' : 'text-on-surface'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-md text-label-md uppercase tracking-widest ${
                isActive('/') ? 'text-primary' : 'text-on-surface'
              }`}
            >
              Stories
            </Link>
            <Link
              to="/experience"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-md text-label-md uppercase tracking-widest ${
                isActive('/experience') ? 'text-primary' : 'text-on-surface'
              }`}
            >
              Experience
            </Link>
            <Link
              to="/inquire"
              onClick={() => setMobileMenuOpen(false)}
              className="border border-primary/40 px-8 py-2 font-label-md text-label-md uppercase tracking-widest text-primary w-full text-center hover:bg-primary hover:text-background transition-all"
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow z-10">
        {children}
      </div>

      {/* Footer Area */}
      <footer className="w-full py-section-gap px-gutter flex flex-col md:flex-row justify-between items-start max-w-container-max mx-auto bg-surface-container-lowest border-t border-primary/20 relative z-10">
        <div className="mb-12 md:mb-0 space-y-6">
          <div className="font-headline-md text-headline-md text-primary">K.R. Photography</div>
          <div className="space-y-2 opacity-80">
            <p className="font-body-md text-body-md text-on-surface">Suite 402, Golden Heritage Plaza</p>
            <p className="font-body-md text-body-md text-on-surface">Udaipur, Rajasthan 313001</p>
            <p className="font-body-md text-body-md text-on-surface">+91 98765 43210</p>
            <p className="font-body-md text-body-md text-on-surface">hello@krphotography.in</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-24 gap-y-8">
          <div className="space-y-4 flex flex-col">
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary block mb-2">Menu</span>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/portfolio">Portfolio</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/experience">Experience</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/inquire">Book Now</Link>
          </div>
          <div className="space-y-4 flex flex-col">
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary block mb-2">Connect</span>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
          </div>
        </div>
        <div className="w-full mt-24 pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between gap-6 opacity-60">
          <p className="font-label-md text-label-md">© 2026 K.R. Photography. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="font-label-md text-label-md hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-label-md text-label-md hover:text-primary transition-colors" href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
