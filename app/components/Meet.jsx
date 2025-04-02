export default function Meet() {
  return (
    <section id="meet" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet Our Surgeon</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get to know Dr. Deepu Sudhakaran, our experienced bariatric surgeon
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <img
                src="/images/deepu2.png"
                alt="Dr. Deepu Sudhakaran"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">Dr. Deepu Sudhakaran, MD, FACS</h3>
              <p className="text-gray-600 italic mb-4">Board Certified Bariatric Surgeon</p>
              <p className="text-gray-600">
                Dr. Deepu Sudhakaran is a fellowship-trained specialist in minimally invasive and bariatric surgery, 
                with expertise in advanced weight loss procedures such as gastric sleeve, gastric bypass, and 
                revisional bariatric surgery.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Education & Training</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• General Surgery Residency - Louisiana State University</li>
                <li>• Fellowship in Minimally Invasive and Bariatric Surgery - University of South Carolina</li>
                <li>• Board Certified in General Surgery</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Specialties</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Bariatric Surgery (Gastric Sleeve, Gastric Bypass)</li>
                <li>• Revisional Bariatric Surgery</li>
                <li>• Anti-Reflux Surgery</li>
                <li>• Hernia Repair</li>
                <li>• Gallbladder Surgery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 