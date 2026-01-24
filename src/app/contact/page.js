'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import FAQ from '@/components/FAQ';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'Info@vynzomedia.com',
      link: 'mailto:Info@vynzomedia.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+92 312 6080431',
      link: 'tel:+923126080431',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: 'Fatehpur District Layyah ZIP 31050',
      link: '#',
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Get In</span>
              <span className="font-light bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto font-medium">
              Ready to Start Your Project?
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can bring your vision to life. We're here to help.
            </p>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-7 md:py-[50px] bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.03),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-3xl mb-6">
                    <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Contact</span>
                    <span className="font-light bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 bg-clip-text text-transparent"> Information</span>
                  </h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    We're here to help! Reach out to us through any of these
                    channels.
                  </p>
                </div>

                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="block p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-yellow-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-500/10 group relative overflow-hidden"
                    >
                      {/* Rotating Border on Hover */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-[length:200%_100%] animate-[spin_3s_linear_infinite] opacity-20 blur-sm"></div>
                      </div>
                      <div className="absolute inset-[2px] rounded-xl bg-gray-900/50"></div>
                      
                      <div className="relative z-10 flex items-start space-x-4">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-yellow-500/30">
                            <IconComponent className="text-yellow-500 text-xl" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                            {info.title}
                          </h3>
                          <p className="text-gray-400">{info.content}</p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-10 relative overflow-hidden group"
                >
                  {/* Rotating Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-[length:200%_100%] animate-[spin_3s_linear_infinite] opacity-10 blur-sm"></div>
                  </div>
                  <div className="absolute inset-[2px] rounded-2xl bg-gray-900/50"></div>

                  <div className="relative z-10">
                    <h2 className="text-3xl mb-8">
                      <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Send Us a</span>
                      <span className="font-light bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 bg-clip-text text-transparent"> Message</span>
                    </h2>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                      >
                        Thank you! Your message has been sent successfully. We'll
                        get back to you soon.
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-white font-medium mb-2"
                          >
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                            placeholder="Your Name"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-white font-medium mb-2"
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-white font-medium mb-2"
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                            placeholder="+92 312 6080431"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="service"
                            className="block text-white font-medium mb-2"
                          >
                            Service Interested In
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                          >
                            <option value="">Select a service</option>
                            <option value="video-editing">Video Editing</option>
                            <option value="video-animation">Video Animation</option>
                            <option value="gif-creation">GIF Creation</option>
                            <option value="logo-design">Logo Design</option>
                            <option value="uiux-design">UI/UX Design</option>
                            <option value="web-development">Web Development</option>
                            <option value="seo-marketing">SEO Marketing</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-white font-medium mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows="6"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                          placeholder="Tell us about your project..."
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="primary"
                        className="w-full text-lg"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
