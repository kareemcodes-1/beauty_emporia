import ReviewSwiper from "./swiper/reviews-swiper"
import SwiperSlider from "./swiper/swiper"


const Testimonials = () => {
  return (
    <div className='lg:px-[2rem] px-[1.5rem] py-[4rem]'>
         <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
             <div>
             <h3 className="text-[1.7rem] text-[#aa8800]">Reviews</h3>
             <h1 className="golo lg:text-[4rem] text-[2.5rem] lg:mb-0 mb-[1rem]">What our special clients say about us.</h1>
             </div>
             

             <div className="border-l border-[#aa8800]">
                  {/* <div className="h-[5rem] bg-[#000] w-[50%]"/> */}
                 <p className="pl-[1rem] lg:w-[500px] w-full text-gray-700">We are grateful for the trust our clients place in us and the wonderful reviews that reflect our dedication to exceptional service</p>
             </div>
         </div>

         <ReviewSwiper />
    </div>
  )
}

export default Testimonials