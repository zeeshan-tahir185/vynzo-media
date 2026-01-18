'use client';

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
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                About Vynzo Media
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Transforming ideas into stunning visual experiences since our
                inception
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.05),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
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
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl p-8 border border-yellow-500/30 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-6 bg-black/50 rounded-xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
                      >
                        <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                          {stat.number}
                        </div>
                        <div className="text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.03),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-xl text-gray-400">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-2 group"
                  >
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-yellow-500/30">
                        <IconComponent className="text-yellow-500 text-2xl" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.05),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Why Work With Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyWorkWithUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-2 group"
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

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-yellow-500/10 via-yellow-600/10 to-yellow-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.2),transparent_70%)]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Ready to take your brand to the next level? Get in touch with us
              today.
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
