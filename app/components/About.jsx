import { useScrollAnimation } from '../hooks/useScrollAnimation';
import HeroBackground from './HeroBackground';

export default function About() {
  const leftRef = useScrollAnimation('left');
  const rightRef = useScrollAnimation('right');

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-primary text-white">
      <HeroBackground />
      <div className="container relative z-10 px-8 sm:px-12 md:px-8 lg:px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-16 items-start">
          <div 
            ref={leftRef}
            className="opacity-0 translate-x-[-50px] transition-all duration-1000 ease-out animate-in:opacity-100 animate-in:translate-x-0 space-y-4 w-full px-8 sm:px-16 md:px-6 lg:px-8 text-center md:text-left mx-auto max-w-2xl md:max-w-none"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-6">About Chesterfield Bariatric Surgery</h2>
            <div className="space-y-6 md:space-y-4 text-white">
              <p className="text-sm sm:text-base md:text-lg">
                Chesterfield Bariatric Surgery has been proudly serving the St. Louis area with 
                comprehensive weight loss solutions for over 15 years. Our board-certified surgeons 
                specialize exclusively in bariatric surgery with a focus on minimally invasive techniques.
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                As a dedicated weight loss surgery center, we understand the challenges of obesity and 
                provide personalized care to help you achieve lasting weight loss and improved health.
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                Our team works closely with each patient to develop individualized treatment plans, 
                providing support before, during, and long after your weight loss procedure.
              </p>
            </div>
            <div className="mt-10 md:mt-8 flex justify-center md:justify-start">
              <a 
                href="https://healow.com/apps/practice/physician-services-consulting-llc-saint-louis-mo-28777?v=2&t=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 md:px-6 md:py-3 bg-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
          
          <div 
            ref={rightRef}
            className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 md:p-6 lg:p-8 rounded-lg shadow-md opacity-0 translate-x-[50px] transition-all duration-1000 ease-out animate-in:opacity-100 animate-in:translate-x-0 mt-8 md:mt-0 w-full max-w-2xl mx-auto md:max-w-none md:ml-4 lg:ml-6"
          >
            <div className="flex flex-col items-center md:items-start px-6 sm:px-10 md:px-4 lg:px-6">
              <img 
                src="/images/deepu2.png" 
                alt="Dr. Deepu Sudhakaran" 
                className="w-full max-w-lg md:max-w-md h-48 sm:h-64 object-cover rounded-lg shadow-md mb-10 md:mb-6 transform hover:scale-105 transition-transform duration-300"
              />
            
              <div className="text-center md:text-left w-full px-6 sm:px-10 md:px-4 lg:px-6">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 md:mb-4">Meet Dr. Deepu Sudhakaran</h3>
                
                <div className="space-y-4 sm:space-y-6 md:space-y-3">
                  <h4 className="text-lg sm:text-xl font-semibold text-primary">Dr. Deepu Sudhakaran, MD, FACS</h4>
                  <p className="text-gray-600 italic text-sm sm:text-base">Board Certified Bariatric Surgeon</p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    As a fellowship-trained bariatric surgeon, Dr. Sudhakaran specializes in advanced weight loss 
                    procedures including gastric sleeve, gastric bypass, and revisional bariatric surgery.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    After completing his General Surgery residency at the University of Miami, Dr. Sudhakaran pursued 
                    advanced fellowship training in Minimally Invasive and Bariatric Surgery at the Cleveland Clinic Florida.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    With thousands of successful bariatric surgeries performed, Dr. Sudhakaran is committed to 
                    providing compassionate care and helping patients transform their lives through sustainable weight loss.
                  </p>
                </div>
                
                <div className="mt-8 pt-8 md:mt-6 md:pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-primary mb-4 md:mb-3">Why Choose Us</h4>
                  <ul className="text-gray-600 space-y-3 md:space-y-2 text-sm sm:text-base list-none">
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
        </div>
      </div>
    </section>
  );
} 