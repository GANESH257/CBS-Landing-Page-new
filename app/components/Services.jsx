import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Services() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const services = [
    {
      id: 1,
      title: "Gastric Sleeve Surgery",
      description: "A minimally invasive procedure that removes a portion of the stomach to create a smaller, sleeve-shaped stomach, helping you feel fuller faster and reducing hunger hormones.",
      extendedInfo: "Also known as sleeve gastrectomy, this procedure permanently reduces your stomach size by about 80%. Most patients lose 60-70% of their excess weight within the first year. Recovery is typically quick with most patients returning to work within 1-2 weeks.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Gastric Bypass Surgery",
      description: "A surgical procedure that creates a small stomach pouch and reroutes the digestive tract, resulting in significant weight loss through both restriction and malabsorption.",
      extendedInfo: "Gastric bypass is considered the gold standard in bariatric surgery. It works through two mechanisms: restricting food intake and reducing nutrient absorption. Most patients lose 70-80% of excess weight and experience improvement or resolution of obesity-related conditions like type 2 diabetes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Revisional Bariatric Surgery",
      description: "Specialized procedures for patients who have previously undergone weight loss surgery but may need adjustments due to complications or inadequate weight loss results.",
      extendedInfo: "If your initial weight loss surgery has not provided the expected results or if you're experiencing complications, revisional surgery may help. Our experienced surgeons can convert one type of bariatric procedure to another or correct issues from a previous surgery to improve outcomes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Non-Surgical Weight Loss",
      description: "Comprehensive medical weight loss programs including nutritional counseling, behavioral therapy, and medication management for those seeking non-surgical alternatives.",
      extendedInfo: "For patients who don't qualify for bariatric surgery or prefer non-surgical options, we offer a medically supervised weight loss program. This includes personalized nutrition plans, FDA-approved weight loss medications, lifestyle coaching, and ongoing support to help you achieve sustainable weight loss.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Comprehensive Pre-Op Preparation",
      description: "Extensive pre-surgery support including nutritional education, psychological evaluation, and medical testing to ensure you're fully prepared for weight loss surgery.",
      extendedInfo: "Our pre-operative program typically spans 3-6 months and includes consultations with our multidisciplinary team. You'll undergo nutritional counseling, psychological evaluation, fitness assessment, and medical testing. This thorough preparation helps optimize surgical outcomes and establishes healthy habits for long-term success.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Post-Operative Support",
      description: "Long-term support through support groups, nutritional counseling, and follow-up care to help you maintain your weight loss success for years to come.",
      extendedInfo: "Your journey doesn't end after surgery. Our comprehensive aftercare program includes regular follow-up appointments, monthly support group meetings, ongoing nutritional counseling, and access to our team of specialists. This continued support is crucial for maintaining weight loss and optimizing your health long-term.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 bg-grey">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title animate-fade-in">Our Weight Loss Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            At Chesterfield Bariatric Surgery, we offer a comprehensive range of weight loss procedures 
            with a focus on minimally invasive techniques for better outcomes and long-term success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 relative group h-full transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Extended info that appears on hover */}
              <div 
                className={`absolute inset-0 bg-primary bg-opacity-95 rounded-lg p-4 flex flex-col justify-center transform transition-all duration-500 ${
                  hoveredId === service.id 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
                }`}
              >
                <div className="max-h-[80%] overflow-y-auto">
                  <h3 className="text-lg font-semibold text-white mb-2 transform transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white text-opacity-90 transform transition-transform duration-300">
                    {service.extendedInfo}
                  </p>
                </div>
                <div className="mt-2">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="inline-block bg-accent text-primary text-sm font-medium py-1.5 px-3 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsFormOpen(true)}
            className="btn-primary transform hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Request a Consultation
          </button>
        </div>
      </div>

      {/* Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto transform animate-slide-up">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-primary">Schedule Consultation</h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
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
