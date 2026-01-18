import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: '🎬',
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
      icon: '✨',
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
      icon: '🖼️',
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
      icon: '🎨',
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
      icon: '🎯',
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
      icon: '💻',
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
      icon: '📈',
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
      icon: '🚀',
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions to elevate your brand and drive
              business growth
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <svg
                              className="w-5 h-5 text-yellow-500 mr-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Our Process
              </h2>
              <p className="text-xl text-gray-400">
                How we bring your vision to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description:
                    'We understand your goals, target audience, and vision.',
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description:
                    'We develop a comprehensive plan tailored to your needs.',
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
                  description:
                    'We deliver your project and provide ongoing support.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800"
                >
                  <div className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-yellow-500/10 via-yellow-600/10 to-yellow-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.2),transparent_70%)]"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help bring your project to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 text-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
