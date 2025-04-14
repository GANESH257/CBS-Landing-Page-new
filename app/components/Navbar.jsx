'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-lg">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <img
                src={process.env.NODE_ENV === 'production' ? '/landingpage/images/logo.svg' : '/images/logo.svg'}
                alt="CBS Logo"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </a>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" legacyBehavior>
              <a className="nav-link text-primary hover:text-accent">
                About
              </a>
            </Link>
            <Link href="#services" legacyBehavior>
              <a className="nav-link text-primary hover:text-accent">
                Services
              </a>
            </Link>
            <Link href="#success-stories" legacyBehavior>
              <a className="nav-link text-primary hover:text-accent">
                Success Stories
              </a>
            </Link>
            <Link href="#testimonials" legacyBehavior>
              <a className="nav-link text-primary hover:text-accent">
                Testimonials
              </a>
            </Link>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsFormOpen(true)}
                className="btn-primary bg-accent text-white hover:bg-opacity-90"
              >
                Request Appointment
              </button>
              <a
                href="tel:+13145002424"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden sm:inline">Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-lg mt-2 p-4`}>
          <div className="flex flex-col space-y-4">
            <Link href="#about" legacyBehavior>
              <a className="nav-link text-primary hover:text-accent" onClick={() => setIsOpen(false)}>
                About
              </a>
            </Link>
            <Link href="#services" legacyBehavior>
              <a className="nav-link text-primary hover:text-accent" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </Link>
            <Link href="#success-stories" legacyBehavior>
              <a className="nav-link text-primary hover:text-accent" onClick={() => setIsOpen(false)}>
                Success Stories
              </a>
            </Link>
            <Link href="#testimonials" legacyBehavior>
              <a className="nav-link text-primary hover:text-accent" onClick={() => setIsOpen(false)}>
                Testimonials
              </a>
            </Link>
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => {
                  setIsFormOpen(true);
                  setIsOpen(false);
                }}
                className="btn-primary bg-accent text-white hover:bg-opacity-90 text-center"
              >
                Request Appointment
              </button>
              <a
                href="tel:+13145002424"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => setIsOpen(false)}
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
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
    </nav>
  );
}
