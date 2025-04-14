import { useScrollAnimation } from '../hooks/useScrollAnimation';
import HeroBackground from './HeroBackground';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from './ContactForm';
import { useState } from 'react';

export default function About() {
  const leftRef = useScrollAnimation('left');
  const rightRef = useScrollAnimation('right');
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-primary text-white">
      <HeroBackground />
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-24">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 px-8 sm:px-16 md:px-6 lg:px-8 bg-primary/80 backdrop-blur-sm rounded-lg p-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center md:text-left">
              About Chesterfield Bariatric and General Surgery
            </h2>
            <div className="space-y-6 md:space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-white/90">
                Chesterfield Bariatric and General Surgery has been a trusted provider of comprehensive surgical care in the St. Louis and Chesterfield area for many years. Our board-certified surgeon specializes in advanced minimally invasive and robotic surgery techniques, offering greater precision, faster recovery, and less post-operative pain for both bariatric and general surgery patients.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/90">
                As a dedicated weight loss surgery center, we understand the complexities of obesity and are committed to providing compassionate, personalized care. Our team creates customized treatment plans to support patients at every step of their journey—before, during, and long after surgery—to ensure sustainable results and improved long-term health.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/90">
                In addition to bariatric procedures such as gastric sleeve, gastric bypass, and revisional surgery, we offer medical weight management programs tailored to patients who may benefit from non-surgical options or need ongoing support after surgery.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/90">
                We also provide a full spectrum of general surgical services, including robotic-assisted hernia repair, gallbladder surgery, anti-reflux procedures, and panniculectomy, a body contouring surgery often performed after significant weight loss.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white/90">
                To complement our surgical and medical care, we offer cosmetic procedures such as Botox and dermal fillers, giving patients a holistic approach to wellness and confidence—inside and out.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="text-lg font-semibold text-white mb-4">Why Choose Us</h4>
              <ul className="space-y-3 text-white/90 text-sm sm:text-base list-none">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>St. Louis's exclusive fully robotic bariatric surgery program</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced robotic and minimally invasive techniques for greater precision, faster recovery, and less post-operative pain</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive pre- and post-operative support tailored to individual needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multidisciplinary team approach ensuring well-rounded, expert care</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalized, comprehensive weight loss plans including medical, surgical, and post-op cosmetic solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Committed to building long-term relationships for lasting success and wellness</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-start">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="inline-block px-8 py-4 md:px-6 md:py-3 bg-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
              >
                Schedule a Consultation
              </button>
            </div>
          </motion.div>

          {/* Meet Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-sm p-8 sm:p-10 md:p-6 lg:p-8 rounded-lg shadow-md mt-8 md:mt-0 w-full max-w-2xl mx-auto md:max-w-none md:ml-4 lg:ml-6"
          >
            <div className="flex flex-col items-center md:items-start px-6 sm:px-10 md:px-4 lg:px-6">
              <div className="relative h-[400px] md:h-[500px]">
                <img
                  src="/images/deepu2.png"
                  alt="Dr. Deepu Sudhakaran"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="text-center md:text-left w-full px-6 sm:px-10 md:px-4 lg:px-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 md:mb-4">Meet Dr. Deepu Sudhakaran</h3>

                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold text-gray-800">About Dr. Deepu Sudhakaran</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Dr. Deepu Sudhakaran is a fellowship-trained expert in minimally invasive, robotic bariatric and general surgery, with specialized experience in advanced weight loss procedures including gastric sleeve, gastric bypass, and revisional bariatric surgery.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Beyond bariatric care, Dr. Sudhakaran performs a wide range of robotic general surgical procedures, including anti-reflux surgery, hernia repair, gallbladder removal, and panniculectomy—a reconstructive procedure often done after significant weight loss. He also offers cosmetic treatments such as Botox and dermal fillers, providing a full spectrum of care from weight loss to aesthetic enhancement.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Dr. Sudhakaran completed his General Surgery residency at Louisiana State University, followed by a fellowship in Minimally Invasive and Bariatric Surgery at the University of South Carolina.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    With thousands of successful bariatric and general surgeries to his credit, Dr. Sudhakaran is known for delivering compassionate, patient-centered care. He is dedicated to helping individuals achieve long-term weight loss, improved health, and renewed confidence through personalized, innovative, and robotic surgical solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-primary">Schedule Consultation</h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 