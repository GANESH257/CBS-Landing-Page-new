import { useScrollAnimation } from '../hooks/useScrollAnimation';
import HeroBackground from './HeroBackground';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const leftRef = useScrollAnimation('left');
  const rightRef = useScrollAnimation('right');

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Chesterfield Bariatric Surgery, we are dedicated to helping you achieve your weight loss goals 
            through personalized care and advanced surgical solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="/images/about.jpg"
                alt="Chesterfield Bariatric Surgery"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
              <p className="text-gray-600">
                We strive to provide exceptional bariatric care with a focus on patient safety, 
                comfort, and long-term success. Our team is committed to supporting you throughout 
                your weight loss journey.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Our Approach</h3>
              <p className="text-gray-600">
                We believe in a comprehensive approach to weight loss surgery, combining surgical 
                expertise with personalized care plans and ongoing support to help you achieve 
                lasting results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 