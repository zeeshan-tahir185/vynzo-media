'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import Button from '@/components/Button';
import {
  FaVideo,
  FaMagic,
  FaPalette,
  FaLaptopCode,
  FaBullseye,
  FaChartLine,
  FaImage,
  FaRocket,
  FaBolt,
  FaAward,
  FaHandshake,
} from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

export default function Home() {
  const services = [
    {
      icon: FaVideo,
      title: 'Video Editing',
      description:
        'Professional video editing services that bring your vision to life with stunning visuals and seamless transitions.',
    },
    {
      icon: FaMagic,
      title: 'Video Animation',
      description:
        'Creative animated videos that captivate audiences and tell your story in an engaging way.',
    },
    {
      icon: FaPalette,
      title: 'Logo Design',
      description:
        'Unique and memorable logo designs that represent your brand identity perfectly.',
    },
    {
      icon: FaLaptopCode,
      title: 'Web Development',
      description:
        'Modern, responsive websites built with cutting-edge technology for optimal performance.',
    },
    {
      icon: FaBullseye,
      title: 'UI/UX Design',
      description:
        'User-centered designs that provide exceptional experiences and drive conversions.',
    },
    {
      icon: FaChartLine,
      title: 'SEO Marketing',
      description:
        'Strategic SEO services to boost your online visibility and drive organic traffic.',
    },
    {
      icon: FaImage,
      title: 'GIF Creation',
      description:
        'Eye-catching GIF files that grab attention and enhance your digital presence.',
    },
    {
      icon: FaRocket,
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing strategies to grow your business online.',
    },
  ];

  const whyChooseUs = [
    {
      icon: FaBolt,
      title: 'Fast Delivery',
      description:
        'We understand deadlines. Our team delivers high-quality work on time, every time.',
    },
    {
      icon: FaAward,
      title: 'Quality First',
      description:
        'Every project is crafted with attention to detail and a commitment to excellence.',
    },
    {
      icon: FaHandshake,
      title: 'Client Focused',
      description:
        'Your vision is our priority. We work closely with you to bring your ideas to life.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Advanced Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 animate-fadeIn">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
                Vynzo Media
              </h1>
            </div>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-3xl mx-auto font-light animate-fadeIn delay-200">
              Transforming Ideas Into Stunning Visual Experiences
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fadeIn delay-400">
              We create exceptional digital content that captivates, converts, and
              elevates your brand to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-600">
              <Button href="/services" variant="primary">
                Explore Services
              </Button>
              <Button href="/contact" variant="secondary">
                Get Started
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <HiArrowDown className="w-8 h-8 text-yellow-500" />
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.05),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-2"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-yellow-500/30">
                        <IconComponent className="text-yellow-500 text-2xl" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button href="/services" variant="primary">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.03),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Why Choose Vynzo Media?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-2 group"
                  >
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <IconComponent className="text-black text-3xl" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-yellow-500/10 via-yellow-600/10 to-yellow-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.2),transparent_70%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Let's create something amazing together. Get in touch with us
              today!
            </p>
            <Button href="/contact" variant="primary" className="text-lg px-10 py-5">
              Start Your Project
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
