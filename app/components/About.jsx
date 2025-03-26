import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedBackground from './AnimatedBackground';

export default function About() {
  const leftRef = useScrollAnimation('left');
  const rightRef = useScrollAnimation('right');

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <AnimatedBackground />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftRef}
            className="opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out animate-in:opacity-100 animate-in:translate-x-0"
          >
            <h2 className="section-title">About Chesterfield Bariatric Surgery</h2>
            <p className="text-gray-600 mb-4">
              Chesterfield Bariatric Surgery has been proudly serving the St. Louis area with 
              comprehensive weight loss solutions for over 15 years. Our board-certified surgeons 
              specialize exclusively in bariatric surgery with a focus on minimally invasive techniques.
            </p>
            <p className="text-gray-600 mb-4">
              As a dedicated weight loss surgery center, we understand the challenges of obesity and 
              provide personalized care to help you achieve lasting weight loss and improved health.
            </p>
            <p className="text-gray-600 mb-4">
              Our team works closely with each patient to develop individualized treatment plans, 
              providing support before, during, and long after your weight loss procedure.
            </p>
            <div className="mt-6">
              <a 
                href="https://healow.com/apps/practice/physician-services-consulting-llc-saint-louis-mo-28777?v=2&t=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
          
          <div 
            ref={rightRef}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md opacity-0 translate-x-[50px] transition-all duration-1000 ease-out animate-in:opacity-100 animate-in:translate-x-0"
          >
            <div className="mb-6">
              <img 
                src="/images/deepu2.png" 
                alt="Dr. Deepu Sudhakaran" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6 transform hover:scale-105 transition-transform duration-300 ml-4 mt-16"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Meet Dr. Deepu Sudhakaran</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-primary">Dr. Deepu Sudhakaran, MD, FACS</h4>
              <p className="text-gray-600 italic mb-2">Board Certified Bariatric Surgeon</p>
              <p className="text-gray-600 mb-4">
                As a fellowship-trained bariatric surgeon, Dr. Sudhakaran specializes in advanced weight loss 
                procedures including gastric sleeve, gastric bypass, and revisional bariatric surgery.
              </p>
              <p className="text-gray-600 mb-4">
                After completing his General Surgery residency at the University of Miami, Dr. Sudhakaran pursued 
                advanced fellowship training in Minimally Invasive and Bariatric Surgery at the Cleveland Clinic Florida.
              </p>
              <p className="text-gray-600">
                With thousands of successful bariatric surgeries performed, Dr. Sudhakaran is committed to 
                providing compassionate care and helping patients transform their lives through sustainable weight loss.
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-primary mb-2">Why Choose Us</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Specialized focus on bariatric surgery</li>
                <li>• Minimally invasive surgical techniques</li>
                <li>• Comprehensive pre and post-op support</li>
                <li>• Multidisciplinary team approach</li>
                <li>• Long-term relationship with patients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 