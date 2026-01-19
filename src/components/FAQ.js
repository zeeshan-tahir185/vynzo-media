'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What services does Vynzo Media offer?',
      answer:
        'We offer a comprehensive range of digital services including video editing, video animation, GIF creation, logo design, UI/UX design, web development, SEO marketing, and digital marketing. Our team specializes in creating stunning visual content that drives results.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary depending on the scope and complexity. Simple projects like logo design typically take 3-5 business days, while comprehensive projects like web development may take 4-8 weeks. We always provide detailed timelines during our initial consultation.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'Our pricing is customized based on your specific project requirements. We offer competitive rates and transparent pricing. Contact us for a free consultation and detailed quote tailored to your needs and budget.',
    },
    {
      question: 'Do you provide revisions?',
      answer:
        'Yes! We believe in delivering exactly what you envision. Most of our packages include multiple revision rounds to ensure your complete satisfaction. The number of revisions depends on your selected package.',
    },
    {
      question: 'Can you work with our existing brand guidelines?',
      answer:
        'Absolutely! We can work within your existing brand guidelines or help you develop new ones. Our team is experienced in maintaining brand consistency while bringing fresh creative perspectives to your projects.',
    },
    {
      question: 'What file formats do you deliver?',
      answer:
        'We deliver projects in all standard formats required for your specific needs. For videos, we provide MP4, MOV, and other formats. For design work, we provide source files (PSD, AI, etc.) and web-ready formats (PNG, JPG, SVG). We ensure you have everything you need for all platforms.',
    },
    {
      question: 'How do I get started with a project?',
      answer:
        'Getting started is easy! Simply contact us through our contact form or book a consultation. We\'ll discuss your project requirements, timeline, and budget. Once we align on the details, we\'ll begin bringing your vision to life.',
    },
    {
      question: 'Do you offer ongoing support and maintenance?',
      answer:
        'Yes, we offer ongoing support and maintenance packages for websites and digital assets. We can help with updates, content changes, technical support, and continuous optimization to keep your digital presence performing at its best.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-7 md:py-[50px] bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,208,44,0.03),transparent)]"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-500/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FaChevronUp className="text-yellow-400 w-5 h-5 transition-transform duration-300" />
                  ) : (
                    <FaChevronDown className="text-gray-400 group-hover:text-yellow-400 w-5 h-5 transition-all duration-300" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 ease-out hover:scale-[1.02]"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
