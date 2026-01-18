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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-yellow-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg p-2 border border-yellow-500/30 group-hover:border-yellow-500/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/30">
              <Image
                src="/images/logo.png"
                alt="Vynzo Media Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300 brightness-110"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Vynzo Media
            </span>
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
              href="/about"
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              <span className="relative z-10">Contact Us</span>
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
              href="/about"
              className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full text-center hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 relative overflow-hidden group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
