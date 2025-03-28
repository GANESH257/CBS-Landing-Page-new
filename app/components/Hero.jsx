import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <section className="relative bg-primary text-white py-20 md:py-32">
      <HeroBackground />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Weight Loss Surgery in Chesterfield
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Chesterfield Bariatric Surgery provides expert weight loss solutions including gastric sleeve, gastric bypass, and non-surgical options with personalized care for lasting results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="https://healow.com/apps/practice/physician-services-consulting-llc-saint-louis-mo-28777?v=2&t=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-accent text-dark hover:bg-opacity-90"
              >
                Request an Appointment
              </a>
              <a href="#services" className="btn-secondary bg-white text-primary hover:bg-opacity-90">
                Our Weight Loss Solutions
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <img
              src="/images/deepu.png" 
              alt="Weight Loss Surgery" 
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
