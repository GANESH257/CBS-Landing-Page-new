import { motion } from 'framer-motion';

export default function Meet() {
  return (
    <section id="meet" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet Our Surgeon</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get to know Dr. Deepu Sudhakaran, our experienced bariatric surgeon dedicated to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src="/images/deepu2.png"
                alt="Dr. Deepu Sudhakaran"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Dr. Deepu Sudhakaran, MD, FACS</h3>
            <p className="text-gray-600 italic mb-6">Board Certified Bariatric Surgeon</p>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Dr. Deepu Sudhakaran is a fellowship-trained specialist in minimally invasive and bariatric surgery, 
                with expertise in advanced weight loss procedures such as gastric sleeve, gastric bypass, and revisional 
                bariatric surgery. In addition to bariatric care, he performs a range of general surgical procedures, 
                including anti-reflux surgery, hernia repair, and gallbladder surgery.
              </p>
              <p>
                Dr. Sudhakaran completed his General Surgery residency at Louisiana State University before pursuing 
                advanced fellowship training in Minimally Invasive and Bariatric Surgery at the University of South Carolina.
              </p>
              <p>
                With thousands of successful bariatric and general surgeries to his credit, Dr. Sudhakaran is dedicated 
                to delivering compassionate, patient-centered care. He is committed to helping individuals achieve 
                long-term weight loss and improved health through personalized, innovative surgical solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 