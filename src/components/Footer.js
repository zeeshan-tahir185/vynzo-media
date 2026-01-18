import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative w-32 h-12 sm:w-40 sm:h-14 rounded-lg p-2.5 transition-all duration-300 group-hover:scale-105">
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-yellow-500/15 to-yellow-600/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
                {/* Border glow */}
                <div className="absolute inset-0 rounded-lg border-2 border-yellow-400/40 shadow-[0_0_20px_rgba(250,208,44,0.3)] group-hover:border-yellow-400/60 group-hover:shadow-[0_0_30px_rgba(250,208,44,0.5)] transition-all duration-300"></div>
                {/* Logo with light background */}
                <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center">
                  <Image
                    src="/images/new-logo.png"
                    alt="Vynzo Media Logo"
                    fill
                    className="object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transforming ideas into stunning visual experiences. We create
              exceptional digital content that captivates and converts.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:Info@vynzomedia.com" className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300 group">
                <FaEnvelope className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                <span>Info@vynzomedia.com</span>
              </a>
              <a href="tel:+923126080431" className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300 group">
                <FaPhone className="text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                <span>+92 312 6080431</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                <span>Fatehpur District Layyah ZIP 31050</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-yellow-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400">Video Editing</span>
              </li>
              <li>
                <span className="text-gray-400">Animation</span>
              </li>
              <li>
                <span className="text-gray-400">Logo Design</span>
              </li>
              <li>
                <span className="text-gray-400">Web Development</span>
              </li>
              <li>
                <span className="text-gray-400">UI/UX Design</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Vynzo Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
