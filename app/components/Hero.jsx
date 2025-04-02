'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Life with Expert Weight Loss Surgery
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience life-changing results with Dr. Deepu Sudhakaran's specialized bariatric procedures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn-primary bg-accent text-white hover:bg-opacity-90"
            >
              Schedule Consultation
            </button>
            <a
              href="tel:+13145002424"
              className="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
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
    </div>
  );
}
