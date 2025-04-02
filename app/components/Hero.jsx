'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative bg-primary text-white py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Weight Loss Surgery in Chesterfield
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Chesterfield Bariatric Surgery provides expert weight loss solutions including gastric sleeve, gastric bypass, and non-surgical options with personalized care for lasting results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="btn-primary bg-accent text-dark hover:bg-opacity-90"
              >
                Request an Appointment
              </button>
              <a href="#services" className="btn-secondary bg-white text-primary hover:bg-opacity-90">
                Our Weight Loss Solutions
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src="/images/deepu.png" 
              alt="Weight Loss Surgery" 
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
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
    </section>
  );
}
