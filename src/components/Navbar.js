'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-[#fad02c]/10'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-32 h-12 sm:w-40 sm:h-14 rounded-lg  transition-all duration-300 group-hover:scale-105">
              {/* Glow background */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-yellow-500/15 to-yellow-600/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div> */}
              {/* Border glow */}
              <div className="absolute inset-0 rounded-lg transition-all duration-300"></div>
              {/* Logo with white background */}
              <div className="relative w-full h-full backdrop-blur-sm rounded-md flex items-center justify-center">
                <Image
                  src="/images/new-logo.png"
                  alt="Vynzo Media Logo"
                  fill
                  className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 ease-out hover:scale-[1.02] relative overflow-hidden group text-sm"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              <span className="relative z-10">Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-yellow-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-4 space-y-4 animate-fadeIn">
            <Link
              href="/"
              className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 ease-out hover:scale-[1.02] relative overflow-hidden group text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              <span className="relative z-10">Book Consultation</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

