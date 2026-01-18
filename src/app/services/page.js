'use client';

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
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to elevate your brand and drive
              business growth
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.05),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-yellow-500/30">
                          <IconComponent className="text-yellow-500 text-3xl" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-300"
                            >
                              <FaCheck className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.03),transparent)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Our Process
              </h2>
              <p className="text-xl text-gray-400">
                How we bring your vision to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-2 group"
                >
                  <div className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-yellow-500/10 via-yellow-600/10 to-yellow-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.2),transparent_70%)]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Let's discuss how we can help bring your project to life.
            </p>
            <Button href="/contact" variant="primary" className="text-lg px-10 py-5">
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
