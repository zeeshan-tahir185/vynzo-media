import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const services = [
    {
      icon: '🎬',
      title: 'Video Editing',
      description: 'Professional video editing services that bring your vision to life with stunning visuals and seamless transitions.',
    },
    {
      icon: '✨',
      title: 'Video Animation',
      description: 'Creative animated videos that captivate audiences and tell your story in an engaging way.',
    },
    {
      icon: '🎨',
      title: 'Logo Design',
      description: 'Unique and memorable logo designs that represent your brand identity perfectly.',
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technology for optimal performance.',
    },
    {
      icon: '🎯',
      title: 'UI/UX Design',
      description: 'User-centered designs that provide exceptional experiences and drive conversions.',
    },
    {
      icon: '📈',
      title: 'SEO Marketing',
      description: 'Strategic SEO services to boost your online visibility and drive organic traffic.',
    },
    {
      icon: '🖼️',
      title: 'GIF Creation',
      description: 'Eye-catching GIF files that grab attention and enhance your digital presence.',
    },
    {
      icon: '🚀',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business online.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8 inline-block">
              <Image
                src="/images/logo.png"
                alt="Vynzo Media Logo"
                width={120}
                height={120}
                className="mx-auto animate-fadeIn"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-fadeIn">
              Vynzo Media
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto animate-fadeIn delay-200">
              Transforming Ideas Into Stunning Visual Experiences
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fadeIn delay-400">
              We create exceptional digital content that captivates, converts, and
              elevates your brand to new heights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-600">
              <Link
                href="/services"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 text-lg"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-semibold rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:scale-105 text-lg"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Why Choose Vynzo Media?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Fast Delivery
                </h3>
                <p className="text-gray-400">
                  We understand deadlines. Our team delivers high-quality work
                  on time, every time.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Quality First
                </h3>
                <p className="text-gray-400">
                  Every project is crafted with attention to detail and a
                  commitment to excellence.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Client Focused
                </h3>
                <p className="text-gray-400">
                  Your vision is our priority. We work closely with you to bring
                  your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-yellow-500/10 via-yellow-600/10 to-yellow-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.2),transparent_70%)]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together. Get in touch with us
              today!
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 text-lg"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
