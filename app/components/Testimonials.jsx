import { useState } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Rachel T.',
      text: 'After years of struggling with my weight, Dr. Sudhakaran helped me find a solution through gastric sleeve surgery. I\'ve lost over 120 pounds and my type 2 diabetes is completely resolved. This surgery has truly saved my life.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael W.',
      text: 'The team at Chesterfield Bariatric Surgery guided me through every step of my gastric bypass journey. Down 95 pounds in 10 months, I\'m no longer on blood pressure medication and can play with my kids without getting winded.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jennifer L.',
      text: 'As someone who tried every diet imaginable, I was skeptical about weight loss surgery. Dr. Sudhakaran and his team helped me understand my options. Six months after my sleeve surgery, I\'ve lost 78 pounds and feel amazing.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Robert K.',
      text: 'I had my gastric bypass surgery over 2 years ago, and the support from Chesterfield Bariatric Surgery continues to this day. The comprehensive follow-up care has been crucial to maintaining my 135-pound weight loss.',
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Weight Loss Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read about the life-changing transformations our patients have experienced through bariatric surgery at Chesterfield Bariatric Surgery.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-grey p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg italic text-gray-700 mb-6">"{testimonials[activeIndex].text}"</p>
            <p className="font-semibold text-primary">- {testimonials[activeIndex].name}</p>
          </div>

          <div className="flex justify-between mt-6">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary text-white hover:bg-opacity-90 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary text-white hover:bg-opacity-90 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
