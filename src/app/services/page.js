'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import {
  FaVideo,
  FaMagic,
  FaImage,
  FaPalette,
  FaBullseye,
  FaLaptopCode,
  FaChartLine,
  FaRocket,
  FaCheck,
} from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: FaVideo,
      title: 'Video Editing',
      description:
        'Professional video editing services that bring your vision to life. We specialize in creating compelling narratives through expert editing, color grading, sound design, and visual effects.',
      features: [
        'Professional color grading',
        'Sound design & mixing',
        'Motion graphics integration',
        'Multiple format delivery',
        'Fast turnaround times',
      ],
    },
    {
      icon: FaMagic,
      title: 'Video Animation',
      description:
        'Creative animated videos that captivate audiences and tell your story in an engaging way. From 2D to 3D animations, we bring characters and concepts to life.',
      features: [
        '2D & 3D animation',
        'Character animation',
        'Motion graphics',
        'Explainer videos',
        'Animated logos',
      ],
    },
    {
      icon: FaImage,
      title: 'GIF Creation',
      description:
        'Eye-catching GIF files that grab attention and enhance your digital presence. Perfect for social media, websites, and marketing campaigns.',
      features: [
        'Custom GIF design',
        'Optimized file sizes',
        'Social media ready',
        'Animated banners',
        'Quick delivery',
      ],
    },
    {
      icon: FaPalette,
      title: 'Logo Design',
      description:
        'Unique and memorable logo designs that represent your brand identity perfectly. We create logos that stand out and make a lasting impression.',
      features: [
        'Brand identity design',
        'Multiple concepts',
        'Vector format delivery',
        'Brand guidelines',
        'Unlimited revisions',
      ],
    },
    {
      icon: FaBullseye,
      title: 'UI/UX Design',
      description:
        'User-centered designs that provide exceptional experiences and drive conversions. We create intuitive interfaces that users love.',
      features: [
        'User research',
        'Wireframing & prototyping',
        'Responsive design',
        'Design systems',
        'Usability testing',
      ],
    },
    {
      icon: FaLaptopCode,
      title: 'Web Development',
      description:
        'Modern, responsive websites built with cutting-edge technology for optimal performance. From simple landing pages to complex web applications.',
      features: [
        'Responsive design',
        'SEO optimized',
        'Fast loading times',
        'Modern frameworks',
        'Ongoing support',
      ],
    },
    {
      icon: FaChartLine,
      title: 'SEO Marketing',
      description:
        'Strategic SEO services to boost your online visibility and drive organic traffic. We help you rank higher and reach your target audience.',
      features: [
        'Keyword research',
        'On-page optimization',
        'Link building',
        'Content strategy',
        'Analytics & reporting',
      ],
    },
    {
      icon: FaRocket,
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing strategies to grow your business online. We create campaigns that deliver results and maximize ROI.',
      features: [
        'Social media marketing',
        'Content marketing',
        'Email campaigns',
        'PPC advertising',
        'Performance tracking',
      ],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your goals, target audience, and vision.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive plan tailored to your needs.',
    },
    {
      step: '03',
      title: 'Creation',
      description:
        'Our team brings your project to life with creativity and precision.',
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'We deliver your project and provide ongoing support.',
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-4xl mx-auto font-medium">
              Complete Digital Solutions for Your Success
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From video production to web development, we've got you covered with premium services that deliver results.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-32 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.03),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 ease-out"></div>
                            <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out border border-yellow-500/30">
                              <IconComponent className="text-yellow-500 text-2xl" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2 flex-grow">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-300 text-sm"
                            >
                              <FaCheck className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                Our Process
              </h2>
              <p className="text-xl md:text-2xl text-gray-400">
                How we bring your vision to life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 relative overflow-hidden group h-full transition-all duration-300 ease-out hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10"
                  >
                    {/* Rotating Border */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-[length:200%_100%] animate-[spin_3s_linear_infinite] opacity-20 blur-sm"></div>
                    </div>
                    <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-gray-900 to-black"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300 ease-out">
                        {item.step}
                      </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
              Let's discuss how we can help bring your project to life
            </p>
            <Button href="/contact" variant="primary" className="px-6 sm:px-8">
              Contact Us Today
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
