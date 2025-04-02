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

        <div className="flex justify-center">
          <button
            onClick={() => setIsFormOpen(true)}
            className="btn-primary text-lg px-8 py-3 inline-block"
          >
            Request Consultation
          </button>
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