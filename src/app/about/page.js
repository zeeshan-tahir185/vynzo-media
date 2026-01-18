'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import {
  FaBolt,
  FaAward,
  FaHandshake,
  FaLightbulb,
  FaPalette,
  FaHeadset,
  FaCog,
} from 'react-icons/fa';

export default function About() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '10+', label: 'Years Experience' },
  ];

  const values = [
    {
      icon: FaAward,
      title: 'Excellence',
      description:
        'We strive for perfection in every project, ensuring the highest quality standards.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description:
        'We stay ahead of trends and use cutting-edge technology to deliver exceptional results.',
    },
    {
      icon: FaHandshake,
      title: 'Collaboration',
      description:
        'We believe in working closely with our clients to bring their vision to life.',
    },
    {
      icon: FaBolt,
      title: 'Efficiency',
      description:
        'We deliver projects on time without compromising on quality or creativity.',
    },
  ];

  const whyWorkWithUs = [
    {
      icon: FaPalette,
      title: 'Creative Excellence',
      description:
        'Our team of talented designers and developers bring fresh perspectives and innovative solutions to every project.',
    },
    {
      icon: FaCog,
      title: 'Latest Technology',
      description:
        'We use cutting-edge tools and technologies to ensure your project is built with the best resources available.',
    },
    {
      icon: FaHeadset,
      title: 'Dedicated Support',
      description:
        'We provide ongoing support and maintenance to ensure your project continues to perform at its best.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section - 100vh */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]"></div>
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
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
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"
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
          </div>
          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
              About Vynzo Media
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto font-medium">
              Crafting Digital Excellence Since Day One
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of creatives, developers, and strategists dedicated to transforming your vision into reality.
            </p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="py-32 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.03),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Vynzo Media was founded with a simple mission: to help
                    businesses tell their stories through exceptional digital
                    content. We started as a small team of creative
                    professionals passionate about video editing, animation, and
                    design.
                  </p>
                  <p>
                    Over the years, we've grown into a full-service digital
                    agency, expanding our expertise to include web development,
                    UI/UX design, SEO marketing, and more. What hasn't changed
                    is our commitment to quality, creativity, and client
                    satisfaction.
                  </p>
                  <p>
                    Today, we work with businesses of all sizes, from startups
                    to established enterprises, helping them create compelling
                    visual content that resonates with their audience and drives
                    results.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl p-10 border border-yellow-500/30 backdrop-blur-sm relative overflow-hidden group">
                  {/* Rotating Border */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-[length:200%_100%] animate-[spin_3s_linear_infinite] opacity-20 blur-sm"></div>
                  </div>
                  <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20"></div>

                  <div className="relative z-10 grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="text-center p-6 bg-black/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300"
                      >
                        <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                          {stat.number}
                        </div>
                        <div className="text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.02),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-xl md:text-2xl text-gray-400">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300 ease-out relative overflow-hidden group h-full flex flex-col"
                  >
                    {/* Rotating Border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-[length:200%_100%] animate-[spin_3s_linear_infinite] opacity-20 blur-sm"></div>
                    </div>
                    <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-gray-900 to-black"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="relative mb-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 ease-out"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out border border-yellow-500/30">
                          <IconComponent className="text-yellow-500 text-xl" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-32 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.03),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Why Work With Us
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyWorkWithUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800 relative overflow-hidden group h-full transition-all duration-300 ease-out hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10"
                  >
                    {/* Rotating Border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-[length:200%_100%] animate-[spin_3s_linear_infinite] opacity-20 blur-sm"></div>
                    </div>
                    <div className="absolute inset-[2px] rounded-2xl bg-gray-900/50"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="relative inline-block mb-6 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/40 to-yellow-600/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300 ease-out"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out shadow-2xl shadow-yellow-500/30">
                          <IconComponent className="text-black text-2xl" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
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

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-r from-yellow-500/10 via-yellow-600/10 to-yellow-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.15),transparent_70%)]"></div>
          <motion.div
            className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
              Ready to take your brand to the next level? Get in touch with us today
            </p>
            <Button href="/contact" variant="primary" className="px-6 sm:px-8">
              Start Your Project
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
