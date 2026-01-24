'use client';

import Marquee from 'react-fast-marquee';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonialsRow1 = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content:
        'Vynzo Media transformed our brand identity completely. Their video editing and animation work exceeded all our expectations. Highly professional and creative team!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, Digital Solutions',
      content:
        'Outstanding work on our web development project. The team delivered a stunning, responsive website that perfectly represents our brand. Fast delivery and excellent communication.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, Creative Studio',
      content:
        'The logo design and UI/UX work from Vynzo Media is exceptional. They truly understand brand identity and user experience. Our conversion rates have increased significantly!',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Product Manager, Innovate Labs',
      content:
        'Their SEO and digital marketing strategies have boosted our online presence tremendously. Professional, results-driven, and always available to help.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Content Creator',
      content:
        'The video animation and GIF creation services are top-notch. Vynzo Media brought my creative vision to life with stunning visuals that engage my audience perfectly.',
      rating: 5,
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'E-commerce Owner',
      content:
        'Working with Vynzo Media has been a game-changer for our business. Their comprehensive digital marketing approach has significantly increased our sales and brand awareness.',
      rating: 5,
    },
  ];

  const testimonialsRow2 = [
    {
      id: 7,
      name: 'Rachel Green',
      role: 'Brand Manager, Fashion Forward',
      content:
        'The team at Vynzo Media created an incredible brand identity for us. Their attention to detail and creative approach is unmatched. Highly recommend!',
      rating: 5,
    },
    {
      id: 8,
      name: 'Robert Martinez',
      role: 'Startup Founder',
      content:
        'From video editing to web development, Vynzo Media has been our go-to agency. They understand our vision and deliver beyond expectations every single time.',
      rating: 5,
    },
    {
      id: 9,
      name: 'Amanda White',
      role: 'Social Media Manager',
      content:
        'The GIF files and animated content created by Vynzo Media have significantly increased our social media engagement. Creative, fast, and professional service!',
      rating: 5,
    },
    {
      id: 10,
      name: 'Chris Brown',
      role: 'Business Owner',
      content:
        'Vynzo Media helped us establish a strong online presence. Their SEO and web development services have been instrumental in growing our business. Excellent results!',
      rating: 5,
    },
    {
      id: 11,
      name: 'Jessica Taylor',
      role: 'Marketing Executive',
      content:
        'The UI/UX design work is phenomenal. Our user experience has improved dramatically, and customer satisfaction is at an all-time high. Thank you, Vynzo Media!',
      rating: 5,
    },
    {
      id: 12,
      name: 'Mark Davis',
      role: 'Creative Director',
      content:
        'Professional video editing and animation services that bring stories to life. Vynzo Media combines creativity with technical excellence in every project.',
      rating: 5,
    },
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-[400px] md:w-[500px] bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 mx-4 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" size={16} />
        ))}
      </div>
      <p className="text-gray-300 mb-6 text-sm leading-relaxed">
        "{testimonial.content}"
      </p>
      <div>
        <h4 className="text-white font-semibold mb-1">{testimonial.name}</h4>
        <p className="text-gray-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">What Our Clients</span>
            <span className="font-light bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 bg-clip-text text-transparent"> Say</span>
          </h2>
          <p className="text-xl text-gray-400">
            Trusted by businesses worldwide
          </p>
        </div>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-8">
        {/* Left Blur Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        {/* Right Blur Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        <Marquee speed={50} gradient={false} pauseOnHover>
          {testimonialsRow1.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        {/* Left Blur Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        {/* Right Blur Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        <Marquee speed={50} gradient={false} direction="right" pauseOnHover>
          {testimonialsRow2.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
