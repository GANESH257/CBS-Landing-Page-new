import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AnimatedBackground from './AnimatedBackground';

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <AnimatedBackground />
      <div className="container relative z-10">
        <h2 className="section-title text-center mb-12">Success Stories</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {[...Array(11)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="relative group h-[500px]">
                <img
                  src={`/images/ss/ss${index + 1}.png`}
                  alt={`Success Story ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Success Story</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 