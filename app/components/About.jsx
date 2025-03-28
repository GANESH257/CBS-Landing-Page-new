import { useScrollAnimation } from '../hooks/useScrollAnimation';
import HeroBackground from './HeroBackground';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const leftRef = useScrollAnimation('left');
  const rightRef = useScrollAnimation('right');

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
            className="space-y-6 px-8 sm:px-16 md:px-6 lg:px-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
              About Chesterfield Bariatric Surgery
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Chesterfield Bariatric Surgery, we're dedicated to helping you achieve lasting weight loss and improved health through advanced surgical solutions. Our state-of-the-art facility and experienced team provide comprehensive care throughout your weight loss journey.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand that weight loss surgery is a life-changing decision, and we're here to support you every step of the way. Our personalized approach ensures you receive the care and guidance needed for long-term success.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-300">
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>

          {/* Meet Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 md:p-6 lg:p-8 md:ml-12 lg:ml-16"
          >
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
                  Meet Our Team
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our experienced team of bariatric surgeons, nurses, and support staff is committed to providing exceptional care. We combine medical expertise with compassionate support to help you achieve your weight loss goals.
                </p>
              </div>

              <div className="relative">
                <Image
                  src="/images/team.jpg"
                  alt="Our Medical Team"
                  width={800}
                  height={400}
                  className="rounded-lg object-cover w-full h-[300px] sm:h-[400px]"
                />
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">Expert Surgeons</h3>
                    <p className="text-gray-600">Board-certified specialists with years of experience in bariatric procedures.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">Dedicated Nurses</h3>
                    <p className="text-gray-600">Compassionate healthcare professionals providing personalized care.</p>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">Support Staff</h3>
                      <p className="text-gray-600">Friendly team members ensuring a smooth experience throughout your journey.</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">Nutrition Experts</h3>
                      <p className="text-gray-600">Specialized guidance for optimal post-surgery nutrition and lifestyle changes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 