'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
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
  FaRocket as FaRocketIcon,
  FaComments,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section - 100vh */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
          {/* Advanced Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.08),transparent_70%)]"></div>
            <motion.div
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />
          </div>

          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                <FaRocketIcon className="text-xs" />
                Creative Digital Agency
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight tracking-tight"
            >
              Where Creativity Meets
              <br />
              <span className="inline-block mt-2">Digital Excellence</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto font-medium"
            >
              Crafting Stunning Visual Stories That Drive Results
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We transform your ideas into powerful digital experiences. From video production to web development, we deliver excellence that sets you apart.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-20 w-full sm:w-auto"
            >
              <Button href="/services" variant="primary" className="w-full sm:w-auto px-6 sm:px-8">
                <FaVideo className="flex-shrink-0" />
                <span>Explore Services</span>
              </Button>
              <Button href="/contact" variant="secondary" className="w-full sm:w-auto px-6 sm:px-8">
                <FaComments className="flex-shrink-0" />
                <span>Start Your Project</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator - Fixed Position */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-yellow-400 text-sm font-medium">Scroll Down</span>
              <HiArrowDown className="w-6 h-6 text-yellow-400" />
            </div>
          </motion.div>
        </section>

        {/* Services Preview Section */}
        <section className="py-7 md:py-[50px] bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.03),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-medium">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="group relative h-full"
                  >
                    {/* Rotating Border Card */}
                    <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 overflow-hidden h-full flex flex-col transition-all duration-300 ease-out hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10">
                      {/* Rotating Gradient Border */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-[length:200%_100%] animate-[spin_3s_linear_infinite] opacity-20 blur-sm"></div>
                      </div>
                      <div className="absolute inset-[2px] rounded-2xl bg-gray-900"></div>

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="relative mb-5">
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 ease-out"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out border border-yellow-500/30">
                            <IconComponent className="text-yellow-500 text-xl" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 ease-out">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button href="/services" variant="primary" className="px-6 sm:px-8">
                View All Services
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-7 md:py-[50px] bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.02),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Why Choose Vynzo Media?
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                Excellence in every project, commitment in every detail
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="text-center p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 relative overflow-hidden group h-full transition-all duration-300 ease-out hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10"
                  >
                    {/* Rotating Border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-[length:200%_100%] animate-[spin_3s_linear_infinite] opacity-20 blur-sm"></div>
                    </div>
                    <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-gray-900 to-black"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="relative inline-block mb-6 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/40 to-yellow-600/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300 ease-out"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out shadow-2xl shadow-yellow-500/30">
                          <IconComponent className="text-black text-2xl" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 ease-out">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-base flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="py-7 md:py-[100px] bg-gradient-to-r from-yellow-500/10 via-yellow-600/10 to-yellow-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,208,44,0.15),transparent_70%)]"></div>
          <motion.div
            className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
              Let's create something amazing together
            </p>
            <p className="text-lg text-gray-400 mb-10">
              Join hundreds of satisfied clients who trust us with their digital presence
            </p>
            <Button href="/contact" variant="primary" className="px-6 sm:px-8">
              <FaRocketIcon />
              <span>Start Your Project Today</span>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
