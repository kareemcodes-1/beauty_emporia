import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper lg:!h-[100vh] h-[75vh] lg:mt-[-7.5rem] lg:!w-[60%]"
    >
      <SwiperSlide>
        <img src="./home.jpg" alt="A relaxing natural skin care treatment" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./home2.jpg" alt="Skincare products for natural care" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./home3.jpg" alt="Refreshing nature-inspired skincare" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
  


// https://dribbble.com/shots/17505858-Spa-Center-Website
// https://dribbble.com/shots/18956364-Beauty-Salon-Website
// https://dribbble.com/shots/23083217-Skincare-Cosmetic-Brand-Website