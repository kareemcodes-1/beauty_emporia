import { Facebook, Instagram } from "lucide-react"
import { Link } from "react-router"

const Footer = () => {
  return (
   <footer className="footer pt-[2rem]">
   <div className=" mx-[1.5rem]">
     <div className="lg:grid lg:grid-cols-2 flex flex-col  mb-[2rem]">
       <div>
         <div className="mb-[3rem]">
             <Link to={'/'}>
                 <img src="./logo2.png" alt="" className="lg:h-[8rem] lg:w-[5rem] w-[8rem] h-[10rem] lg:object-cover object-contain"/>
            </Link>

           <p
             className="  lg:text-[1.1rem] text-[1rem] lg:w-[400px] w-full"
           >
             The best store to find all your unique and quality
             jewelleries, we're unique in every way.
           </p>
         </div>

         <div className="flex items-start lg:gap-[4rem] flex-row gap-[3rem] lg:mb-0 mb-[1.5rem]">
           <div>
             <div className="flex items-start flex-col lg:text-[1rem] text-[1rem] font-medium lg:gap-[1.4rem] gap-[1rem]">
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/services">Services</Link>
               <Link to="/our-works">Our works</Link>
               <Link to="/contact">Contact</Link>
             </div>
           </div>

           <div>
             <div className="flex items-start flex-col lg:text-[1rem] text-[.9rem] font-medium lg:gap-[1.4rem] gap-[1rem]">
               <Link to="https://www.instagram.com/beauty_emporia">Instagram</Link>
               <Link to="https://web.facebook.com/BeautynBridebyBridge/">Facebook</Link>
               <Link to="wa.me/2348054885901" target="_blank"  className="text-[1rem]">Whatsapp</Link>
               <Link to="tel:+2348054885901"  className="text-[1rem]">+2348054885901</Link>
            <Link to="mailto:beautyemporia@gmail.com" target="_blank"  className="text-[1rem]">beautyemporia@gmail.com</Link>
            <Link to="https://www.google.com/search?kgmid=/g/11pt_xxj4_&hl=en-NG&q=Beauty+Emporia+%7C+Abuja+Beauty+Salon+in+Abuja&shndl=30&shem=lrnolc,lsde,vslcea&source=sh/x/loc/osrp/m5/3&kgs=3afddae999bf2e5a" target="_blank"  className="text-[1rem] flex items-start text-start">3 Haile Selassie Street Asokoro, Abuja, Nigeria 900103.</Link>
               {/* <Link>Delivery & Returns</Link>
               <Link>Vip Access</Link> */}
             </div>
           </div>
         </div>
       </div>

       <div className="shadow-[-15px_15px_0px_#aa8800] lg:h-[400px] h-[350px]">
                <img src="./home5.jpg" alt="" className="h-full w-full object-cover" />
            </div>
     </div>

     <div className="flex lg:flex-row flex-col lg:items-center gap-[.5rem] justify-between">
       <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[1.5rem] gap-[.5rem] lg:text-[1rem] text-[.9rem] font-medium !golo">

         <div className="!golo">Terms + Conditions</div>

         <div className="!golo">Privacy Policy</div>
       </div>

       <div className="lg:text-[1rem] text-[.9rem] font-medium !golo">© Beauty Emporia 2025.</div>

     </div>
   </div>
 </footer>
  )
}

export default Footer