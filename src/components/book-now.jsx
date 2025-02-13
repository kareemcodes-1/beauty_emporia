import React from 'react'
import { motion } from "framer-motion";

const BookNow = () => {
  return (
    <section className='bg-[#aa8800] lg:h-[28rem] pt-[5rem] pb-[7rem] lg:px-[2rem] px-[1.5rem]'>
        <div className='text-center mx-auto flex flex-col gap-[1.2rem]'>
        <h2 className='lg:text-[4rem] text-[2.5rem] !text-white golo'>Book Your <span className="relative">
          Appointment
        </span>{" "} Today!</h2>
        <p className='text-[1rem] lg:w-[600px] w-full text-center flex items-center justify-center mx-auto !text-white opacity-[.9]'>Don’t wait to experience the Beauty Emporia difference. Schedule your appointment online now and embark on a journey of beauty and relaxation. Let us help you discover your most radiant self.</p>
        <button className=" bg-white p-[1rem] mt-[2rem] mx-auto text-[1.2rem]  text-[#000] !golo lg:w-[20%] font-medium transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Contact us
      </button>
        </div>
    </section>
  )
}

export default BookNow