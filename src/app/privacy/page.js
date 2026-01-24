'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,208,44,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect and use your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert prose-yellow max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8 text-gray-300"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">1. Introduction</h2>
                  <p className="leading-relaxed">
                    Vynzo Media ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">2. Information We Collect</h2>
                  <p className="leading-relaxed mb-3">
                    We may collect information about you in various ways. The information we may collect includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide when contacting us or using our services.</li>
                    <li><strong>Project Information:</strong> Details about your project requirements, preferences, and feedback.</li>
                    <li><strong>Payment Information:</strong> Billing address and payment details (processed securely through third-party payment processors).</li>
                    <li><strong>Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, and pages visited.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                  <p className="leading-relaxed mb-3">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Detect, prevent, and address technical issues</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="leading-relaxed mb-3">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as payment processing and website hosting.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale, your information may be transferred as part of that transaction.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">5. Data Security</h2>
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
                  <p className="leading-relaxed mb-3">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Rectify inaccurate or incomplete information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing</li>
                    <li>Data portability</li>
                  </ul>
                  <p className="leading-relaxed mt-3">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="leading-relaxed">
                    We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">8. Third-Party Links</h2>
                  <p className="leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">9. Children's Privacy</h2>
                  <p className="leading-relaxed">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">11. Contact Us</h2>
                  <p className="leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <p className="leading-relaxed mt-2">
                    <strong>Vynzo Media</strong><br />
                    Email: <a href="mailto:Info@vynzomedia.com" className="text-yellow-400 hover:text-yellow-500">Info@vynzomedia.com</a><br />
                    Phone: <a href="tel:+923126080431" className="text-yellow-400 hover:text-yellow-500">+92 312 6080431</a><br />
                    Address: Fatehpur District Layyah ZIP 31050
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
