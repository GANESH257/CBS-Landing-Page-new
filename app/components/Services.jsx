import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Services() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Gastric Sleeve Surgery',
      description: 'A minimally invasive procedure that removes approximately 80% of the stomach, creating a sleeve-shaped stomach that helps you feel full with less food.',
      extendedInfo: 'The gastric sleeve surgery is one of the most popular weight loss procedures. It works by reducing the size of your stomach, which helps you eat less and feel full faster. This procedure also removes the part of the stomach that produces the hunger hormone ghrelin, helping to reduce appetite.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Gastric Bypass Surgery',
      description: 'A comprehensive weight loss solution that creates a small stomach pouch and reroutes the small intestine to reduce calorie absorption.',
      extendedInfo: 'Gastric bypass surgery is a highly effective weight loss procedure that works in two ways: by reducing the size of your stomach and by bypassing part of your small intestine. This dual mechanism helps you eat less and absorb fewer calories, leading to significant weight loss.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Revision Surgery',
      description: 'Specialized procedures to modify or correct previous weight loss surgeries, helping patients achieve better results.',
      extendedInfo: 'Revision surgery is designed for patients who have had previous weight loss surgery but need adjustments or improvements. This can include converting one type of surgery to another or repairing complications from previous procedures.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'General Surgery',
      description: 'General surgery covers a wide range of surgical procedures that primarily address abdominal organs like the stomach, liver, intestines, and gallbladder, along with surgeries involving other parts of the body.',
      extendedInfo: 'Our general surgery services include procedures for various conditions affecting the digestive system and other parts of the body. We use minimally invasive techniques whenever possible to ensure faster recovery and less discomfort.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Hernia Repair',
      description: 'Advanced surgical techniques to repair various types of hernias, including inguinal, umbilical, and incisional hernias.',
      extendedInfo: 'Hernia repair surgery is performed to fix weakened areas in the abdominal wall where organs or tissue protrude. We use the latest minimally invasive techniques to ensure a quick recovery and minimal discomfort.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16M4 8h16M4 12h16M4 16h16" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Gallbladder Surgery',
      description: 'Minimally invasive removal of the gallbladder to treat gallstones and other gallbladder conditions.',
      extendedInfo: 'Gallbladder surgery, or cholecystectomy, is performed to remove the gallbladder when it becomes diseased or develops stones. We use laparoscopic techniques to ensure a quick recovery and minimal scarring.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Anti-Reflux Surgery',
      description: 'Surgical treatment for severe acid reflux and GERD, helping patients find relief from chronic heartburn.',
      extendedInfo: 'Anti-reflux surgery is designed to treat severe cases of acid reflux and GERD that don\'t respond to medication. The procedure strengthens the valve between the esophagus and stomach to prevent acid from flowing back up.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
        </svg>
      )
    }
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
