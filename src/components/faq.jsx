import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const FAQ = () => {
  return (

    <div className="py-[2rem] lg:px-[2rem] px-[1.5rem]">
    <div className="lg:grid flex flex-col grid-cols-2 gap-[2rem]">
      <div className="flex flex-col  lg:order-last order-first mt-[1rem] mb-[2.5rem]">
        <h4 className="lg:text-[1.7rem] text-[1.3rem] text-[#aa8800]">
          Why choose Beauty emporia?
        </h4>

        <h2 className="golo lg:text-[3.7rem] text-[2.5rem]">
          Here's why you should choose us.​
        </h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-[#aa8800]">
            <AccordionTrigger className="golo text-[1.3rem] text-gray-700 !no-underline">
              Experienced Professionals
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-[#aa8800]">
            <AccordionTrigger className="golo text-[1.3rem] text-gray-700 !no-underline">
              Premium Quality Products
            </AccordionTrigger>
            <AccordionContent className="text-[#98623C]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-[#aa8800]">
            <AccordionTrigger className="golo text-[1.3rem] text-gray-700 !no-underline">
              Personalized Approach
            </AccordionTrigger>
            <AccordionContent className="text-[#98623C]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-#aa8800]">
            <AccordionTrigger className="golo text-[1.3rem] text-gray-700 !no-underline">
              Convenient Online Booking
            </AccordionTrigger>
            <AccordionContent className="text-[#98623C]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="border-2 border-[#aa8800] lg:h-[30rem] h-[25rem] relative">
                <img src="./home2.jpg" alt="" className="h-full w-full object-cover pl-[1rem] pb-[1rem] absolute top-[-1rem] right-[-1rem]" />
        </div>
    </div>
  </div>
  );
};

export default FAQ;
