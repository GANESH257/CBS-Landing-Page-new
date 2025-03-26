import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/images/logo.svg" 
                alt="Chesterfield Bariatric Surgery Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-dark hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-dark hover:text-primary transition-colors">Services</a>
            <a href="#testimonials" className="text-dark hover:text-primary transition-colors">Patient Stories</a>
            <a href="#success-stories" className="text-dark hover:text-primary transition-colors">Success Stories</a>
            <a href="#appointment" className="text-dark hover:text-primary transition-colors">Contact</a>
            <a 
              href="https://healow.com/apps/practice/physician-services-consulting-llc-saint-louis-mo-28777?v=2&t=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Request Appointment
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-dark hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-dark hover:text-primary transition-colors">Services</a>
              <a href="#testimonials" className="text-dark hover:text-primary transition-colors">Patient Stories</a>
              <a href="#success-stories" className="text-dark hover:text-primary transition-colors">Success Stories</a>
              <a href="#contact" className="text-dark hover:text-primary transition-colors">Contact</a>
              <a 
                href="https://healow.com/apps/practice/physician-services-consulting-llc-saint-louis-mo-28777?v=2&t=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-block text-center"
              >
                Request Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
