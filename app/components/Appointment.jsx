import ContactForm from './ContactForm';

export default function Appointment({ isFormOpen, setIsFormOpen }) {
  return (
    <section id="appointment" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Schedule Your Consultation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take the first step towards a healthier life. Contact us to schedule your consultation 
            with Dr. Deepu Sudhakaran and learn more about your weight loss options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-primary bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-gray-600">222 Clarkson Road</p>
                    <p className="text-gray-600">Chesterfield, MO 63011</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-gray-600">(314) 205-6868</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: By Appointment</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://healow.com/apps/practice/physician-services-consulting-llc-saint-louis-mo-28777?v=2&t=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-3 inline-block"
            >
              Request Consultation
            </a>
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
    </section>
  );
} 