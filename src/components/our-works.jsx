import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import EffectSwiper from "./swiper/effect-swiper";

export const OurWorks = () => {
  return (
    <section className="lg:px-[2rem] px-[1.5rem] lg:pt-[1.5rem] pt-[2.5rem] relative">
        {/* <div className="grid grid-cols-2 gap-[2rem]">
            <div className="h-[30rem] w-full">
                 <img src="./home2.jpg" alt="" className="h-full w-full object-cover" />
            </div>

            <div>
               <h3 className="text-[1.7rem] text-[#aa8800]">Our Services</h3>
               <h1 className="golo text-[4rem]">Facial Massages.</h1>
               <button className="bg-[#aa8800] p-[1rem] mt-[2rem] text-[1.2rem]  text-white !golo  transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                   See more
               </button>
            </div>
        </div> */}
         <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between">
             <div className="mb-[1rem]">
             <h3 className="text-[1.7rem] text-[#aa8800]">Our Work</h3>
             <h1 className="golo lg:text-[4rem] text-[2.5rem]">Organic and certified natural skincare.</h1>
             </div>
             

             <div className="border-l border-[#aa8800]">
                 <p className="pl-[1rem] lg:w-[500px] w-full text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsa eius. Neque beatae animi alias ullam. Laborum, voluptatibus unde? Est saepe voluptates vero, dolorem ipsum eveniet dicta incidunt quibusdam quam!</p>
                 <button className="ml-[1rem] bg-[#aa8800] p-[1rem] mt-[2rem] text-[1.2rem]  text-white !golo transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                  See more
                </button>
             </div>
         </div>

         <EffectSwiper/>
    </section>
  );
};
