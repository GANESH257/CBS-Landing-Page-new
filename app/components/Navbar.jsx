import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            CBS
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
            <Link href="#about" className={`nav-link ${isScrolled ? 'text-primary' : 'text-white'}`}>
              About
            </Link>
            <Link href="#services" className={`nav-link ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Services
            </Link>
            <Link href="#success-stories" className={`nav-link ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Success Stories
            </Link>
            <Link href="#testimonials" className={`nav-link ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Testimonials
            </Link>
            <div className="flex items-center space-x-4">
              <a 
                href="https://healow.com/apps/practice/physician-services-consulting-llc-saint-louis-mo-28777?v=2&t=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-accent text-dark hover:bg-opacity-90"
              >
                Request Appointment
              </a>
              <a 
                href="tel:+13142056868"
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden lg:inline">Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-lg mt-2 p-4`}>
          <div className="flex flex-col space-y-4">
            <Link href="#about" className="nav-link text-primary" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#services" className="nav-link text-primary" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="#success-stories" className="nav-link text-primary" onClick={() => setIsOpen(false)}>
              Success Stories
            </Link>
            <Link href="#testimonials" className="nav-link text-primary" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://healow.com/apps/practice/physician-services-consulting-llc-saint-louis-mo-28777?v=2&t=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-accent text-dark hover:bg-opacity-90 text-center"
                onClick={() => setIsOpen(false)}
              >
                Request Appointment
              </a>
              <a 
                href="tel:+13142056868"
                className="flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
