import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const Services = () => {
  const weightLossSolutions = [
    {
      title: 'Gastric Sleeve Surgery',
      description: 'A minimally invasive procedure that reduces stomach size by about 80%, helping patients feel full faster and eat less.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
    },
    {
      title: 'Gastric Bypass Surgery',
      description: 'A procedure that creates a small pouch from the stomach and connects it directly to the small intestine, reducing calorie absorption.',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
    },
    {
      title: 'Revisional Bariatric Surgery',
      description: 'Specialized procedures to modify or correct previous weight loss surgeries for improved outcomes.',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
    }
  ];

  const generalSurgerySolutions = [
    {
      title: 'Gallbladder Surgery',
      description: 'Minimally invasive removal of the gallbladder to treat gallstones and related conditions.',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      title: 'Anti-Reflux Surgery',
      description: 'Surgical treatment for chronic acid reflux and GERD to improve quality of life.',
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
    },
    {
      title: 'Panniculectomy',
      description: 'Surgical removal of excess skin and fat from the lower abdomen, often after significant weight loss.',
      icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      title: 'Cosmetic Solutions',
      description: 'Comprehensive aesthetic treatments including Botox and dermal fillers for facial rejuvenation.',
      icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Insurance Banner */}
        <div className="mb-12 py-4 bg-primary/10 border-y-2 border-primary/20">
          <div className="text-center">
            <span className="text-primary font-bold text-lg inline-block">
              We take all major insurances and have competitive cash pay options.
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Weight Loss Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive surgical solutions for sustainable weight loss and improved health
          </p>
        </motion.div>

        {/* Weight Loss Solutions Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weightLossSolutions.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Insurance Banner */}
        <div className="my-8 py-4 bg-primary/10 border-y-2 border-primary/20">
          <div className="text-center">
            <span className="text-primary font-bold text-lg inline-block">
              We take all major insurances and have competitive cash pay options.
            </span>
          </div>
        </div>

        {/* General Surgery Solutions Section */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">General Surgery Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced surgical procedures for improved quality of life and overall health
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {generalSurgerySolutions.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
