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
      <SwiperSlide className="relative lg:w-auto w-full lg:h-auto h-full">
        <div className="lg:hidden block absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="lg:hidden block px-[1rem] absolute mt-[1rem] z-20">
          <h2 className="lg:text-[6rem] text-[4rem] text-white">
            Natural Skin Care For Results
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            soluta? Delectus architecto ex, libero quisquam impedit eaque
            distinctio maiores esse id similique
          </p>
          <div className="w-full flex items-center gap-[1rem]">
            <button className="bg-[#aa8800] p-[1rem] mt-[2rem] text-[1.2rem]  text-white !golo w-1/2 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Book now
            </button>
            <button className=" lg:bg-stone-900 bg-white p-[1rem] mt-[2rem] text-[1.2rem]  lg:text-white text-black !golo w-1/2 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Contact us
            </button>
          </div>
        </div>


        <img
          src="./home.jpg"
          alt="A relaxing natural skin care treatment"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>

      <SwiperSlide className="relative lg:w-auto w-full lg:h-auto h-full">
        <div className="lg:hidden block absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="lg:hidden block px-[1rem] absolute mt-[1rem] z-20">
          <h2 className="lg:text-[6rem] text-[4rem] text-white">
            Natural Skin Care For Results
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            soluta? Delectus architecto ex, libero quisquam impedit eaque
            distinctio maiores esse id similique
          </p>
          <div className="w-full flex items-center gap-[1rem]">
            <button className="bg-[#aa8800] p-[1rem] mt-[2rem] text-[1.2rem]  text-white !golo w-1/2 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Book now
            </button>
            <button className=" lg:bg-stone-900 bg-white p-[1rem] mt-[2rem] text-[1.2rem]  lg:text-white text-black !golo w-1/2 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Contact us
            </button>
          </div>
        </div>


        <img
          src="./home2.jpg"
          alt="A relaxing natural skin care treatment"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>

      <SwiperSlide className="relative lg:w-auto w-full lg:h-auto h-full">
        <div className="lg:hidden block absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="lg:hidden block px-[1rem] absolute mt-[1rem] z-20">
          <h2 className="lg:text-[6rem] text-[4rem] text-white">
            Natural Skin Care For Results
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            soluta? Delectus architecto ex, libero quisquam impedit eaque
            distinctio maiores esse id similique
          </p>
          <div className="w-full flex items-center gap-[1rem]">
            <button className="bg-[#aa8800] p-[1rem] mt-[2rem] text-[1.2rem]  text-white !golo w-1/2 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Book now
            </button>
            <button className=" lg:bg-stone-900 bg-white p-[1rem] mt-[2rem] text-[1.2rem]  lg:text-white text-black !golo w-1/2 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Contact us
            </button>
          </div>
        </div>


        <img
          src="./home3.jpg"
          alt="A relaxing natural skin care treatment"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;

// https://dribbble.com/shots/17505858-Spa-Center-Website
// https://dribbble.com/shots/18956364-Beauty-Salon-Website
// https://dribbble.com/shots/23083217-Skincare-Cosmetic-Brand-Website
