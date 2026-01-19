'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Testimonials from '@/components/Testimonials';
import {
  FaVideo,
  FaMagic,
  FaPalette,
  FaLaptopCode,
  FaBullseye,
  FaImage,
  FaExternalLinkAlt,
} from 'react-icons/fa';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'video', name: 'Video Editing' },
    { id: 'animation', name: 'Animation' },
    { id: 'design', name: 'Design' },
    { id: 'web', name: 'Web Development' },
  ];

  const projects = [
    {
      id: 1,
      title: 'TechStart Brand Video',
      category: 'video',
      description: 'Corporate brand video with stunning visuals and motion graphics',
      icon: FaVideo,
      image: '/api/placeholder/600/400',
    },
    {
      id: 2,
      title: 'Animated Explainer Series',
      category: 'animation',
      description: '2D animated explainer videos for product launch',
      icon: FaMagic,
      image: '/api/placeholder/600/400',
    },
    {
      id: 3,
      title: 'Modern Logo Collection',
      category: 'design',
      description: 'Complete brand identity design for multiple clients',
      icon: FaPalette,
      image: '/api/placeholder/600/400',
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with modern UI/UX',
      icon: FaLaptopCode,
      image: '/api/placeholder/600/400',
    },
    {
      id: 5,
      title: 'Social Media Campaign',
      category: 'video',
      description: 'Viral video campaign with high engagement rates',
      icon: FaVideo,
      image: '/api/placeholder/600/400',
    },
    {
      id: 6,
      title: '3D Product Animation',
      category: 'animation',
      description: 'Stunning 3D product showcase animations',
      icon: FaMagic,
      image: '/api/placeholder/600/400',
    },
    {
      id: 7,
      title: 'UI/UX Redesign',
      category: 'design',
      description: 'Complete user interface redesign for mobile app',
      icon: FaBullseye,
      image: '/api/placeholder/600/400',
    },
    {
      id: 8,
      title: 'Corporate Website',
      category: 'web',
      description: 'Modern responsive website with advanced features',
      icon: FaLaptopCode,
      image: '/api/placeholder/600/400',
    },
    {
      id: 9,
      title: 'Animated GIF Series',
      category: 'design',
      description: 'Eye-catching GIF animations for social media',
      icon: FaImage,
      image: '/api/placeholder/600/400',
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto font-medium">
              Showcasing Creative Excellence
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore our collection of stunning projects that have transformed brands and driven results.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg shadow-yellow-500/50'
                      : 'bg-gray-900 border border-gray-800 text-gray-400 hover:border-yellow-500/50 hover:text-yellow-400'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.03),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 ease-out hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10"
                  >
                    {/* Project Image Placeholder */}
                    <div className="relative h-56 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center border border-yellow-500/30 group-hover:scale-110 transition-transform duration-300 ease-out">
                          <IconComponent className="text-yellow-500 text-xl" />
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                        {project.description}
                      </p>
                      <div className="flex items-center text-yellow-500 text-sm font-medium group-hover:gap-2 transition-all duration-300">
                        <span>View Project</span>
                        <FaExternalLinkAlt className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>
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
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
              Let's create something amazing together
            </p>
            <Button href="/contact" variant="primary" className="px-6 sm:px-8">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
