'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
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
                  <h2 className="text-3xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p className="leading-relaxed">
                    By accessing and using Vynzo Media's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">2. Services Provided</h2>
                  <p className="leading-relaxed mb-3">
                    Vynzo Media provides digital services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Video editing and production</li>
                    <li>Video animation and motion graphics</li>
                    <li>Logo design and brand identity</li>
                    <li>Web development and design</li>
                    <li>UI/UX design services</li>
                    <li>SEO and digital marketing</li>
                    <li>GIF creation and graphic design</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">3. Payment Terms</h2>
                  <p className="leading-relaxed mb-3">
                    Payment terms will be agreed upon before the commencement of any project. We accept various payment methods and may require a deposit before starting work. Final payment is due upon project completion and delivery.
                  </p>
                  <p className="leading-relaxed">
                    All prices are subject to change without notice. Once a project is confirmed and payment is made, the agreed-upon price will be honored.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">4. Project Timeline</h2>
                  <p className="leading-relaxed">
                    Project timelines are estimates and may vary based on project complexity, client feedback, and revision requests. We will provide regular updates on project progress and communicate any delays promptly.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">5. Revisions and Changes</h2>
                  <p className="leading-relaxed mb-3">
                    The number of revisions included in your project will be specified in your project agreement. Additional revisions beyond the agreed number may incur additional charges. Major changes to the project scope may require a new agreement and additional fees.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">6. Intellectual Property</h2>
                  <p className="leading-relaxed mb-3">
                    Upon full payment, you will receive ownership rights to the final deliverables. However, Vynzo Media retains the right to use completed projects for portfolio and marketing purposes unless otherwise agreed upon in writing.
                  </p>
                  <p className="leading-relaxed">
                    All source files, concepts, and preliminary work remain the property of Vynzo Media unless specifically included in the project agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">7. Client Responsibilities</h2>
                  <p className="leading-relaxed mb-3">
                    Clients are responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Providing accurate and complete information</li>
                    <li>Timely feedback and approvals</li>
                    <li>Providing necessary materials and assets</li>
                    <li>Ensuring all content provided is legally owned or licensed</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">8. Cancellation and Refunds</h2>
                  <p className="leading-relaxed mb-3">
                    Projects may be cancelled by either party with written notice. If a project is cancelled:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Work completed up to the cancellation point will be billed</li>
                    <li>Deposits are non-refundable unless otherwise specified</li>
                    <li>No refunds will be provided for completed and delivered work</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">9. Limitation of Liability</h2>
                  <p className="leading-relaxed">
                    Vynzo Media shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. Our total liability shall not exceed the amount paid for the specific project in question.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">10. Modifications to Terms</h2>
                  <p className="leading-relaxed">
                    Vynzo Media reserves the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services after changes constitutes acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">11. Contact Information</h2>
                  <p className="leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="leading-relaxed mt-2">
                    Email: <a href="mailto:Info@vynzomedia.com" className="text-yellow-400 hover:text-yellow-500">Info@vynzomedia.com</a><br />
                    Phone: <a href="tel:+923126080431" className="text-yellow-400 hover:text-yellow-500">+92 312 6080431</a>
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
