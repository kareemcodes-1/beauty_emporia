import SwiperSlider from "./swiper/swiper"


const Hero = () => {
    return (
      <div className="flex items-start justify-center">
       <div className="px-[1rem] w-1/2 lg:block hidden">
         <h2 className="text-[6rem] text-black">Natural Skin Care For Results</h2>
         <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, soluta? Delectus architecto ex, libero quisquam impedit eaque distinctio maiores esse id similique</p>
         <div className="w-full flex items-center gap-[1rem]">
         <button className="bg-[#aa8800] p-[1rem] mt-[2rem] text-[1.2rem]  text-white !golo w-1/2 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Book now
      </button>
      <button className=" bg-stone-900 p-[1rem] mt-[2rem] text-[1.2rem]  text-white !golo w-1/2 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Contact us
      </button>
         </div>
         </div>


        <SwiperSlider />

      </div>
    )
  }
  
  export default Hero
  