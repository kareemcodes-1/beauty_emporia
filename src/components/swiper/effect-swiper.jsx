import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function EffectSwiper() {
  return (
    <>
      {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper !mt-[3rem] !hidden lg:block swiper-lg"
      >
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
      </Swiper> */}

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper !mt-[3rem] !hidden lg:block swiper-sm"
      >
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./home.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}