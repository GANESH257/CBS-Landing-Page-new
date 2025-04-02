'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Appointment() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Start Your Weight Loss Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a consultation with Dr. Deepu Sudhakaran to discuss your weight loss goals and explore the best surgical options for you.
          </p>
          
          {/* Business Hours */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: By Appointment</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <button
            onClick={() => setIsFormOpen(true)}
            className="btn-primary bg-accent text-white hover:bg-opacity-90"
          >
            Schedule Consultation
          </button>
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