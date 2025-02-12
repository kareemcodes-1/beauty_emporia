const About = () => {
  return (
    <div className='lg:px-[2rem] px-[1.5rem] py-[4rem]'>
         {/* <div className="flex items-center justify-between">
             <div>
             <h3 className="text-[1.7rem] text-[#aa8800]">About us</h3>
             <h1 className="golo text-[4rem]">Organic and certified natural skincare.</h1>
             </div>
             

             <div className="border-l border-[#aa8800]">
                 <p className="pl-[1rem] w-[500px] text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsa eius. Neque beatae animi alias ullam. Laborum, voluptatibus unde? Est saepe voluptates vero, dolorem ipsum eveniet dicta incidunt quibusdam quam!</p>
             </div>
         </div> */}
         <div className="lg:grid flex flex-col grid-cols-2 gap-[2rem]">
           <div className="flex flex-col items-start lg:mb-0 mb-[2rem]">
             <h3 className="text-[1.7rem] text-[#aa8800]">About us</h3>
             <h1 className="golo lg:text-[4rem] text-[2.5rem]">Organic and certified natural skincare.</h1>
             <p>MDPro Makeover & Beauty Spa is your trusted beauty destination, dedicated to offering a wide range of services that cater to all aspects of beauty and wellness.</p>
             <button className="bg-[#aa8800] p-[1rem] mt-[2rem] text-[1.2rem]  text-white !golo w-[10rem] transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
               Book now
             </button>
             </div>

            <div className="shadow-[-15px_15px_0px_#aa8800]">
                <img src="./home5.jpg" alt="" className="lg:h-[30rem] h-[25rem] w-full object-cover" />
            </div>
         </div>
    </div>

// <div className='lg:px-[2rem] px-[1.5rem] py-[4rem]'>
// <div className="lg:grid grid-cols-2 gap-[2rem]">
// <div className="flex flex-col items-start lg:mb-0 mb-[2rem]">
//     <h4 className="text-[1.7rem] text-[#d5a654]">Welcome to bellavida spa</h4>

//     <h2 className="golo lg:text-[3.9rem] text-[2.5rem]">Your Sanctuary for Beauty and Relaxation​</h2>

//     <p className="mt-[1.5rem] text-[#98623C]">At Bellavida Spa, we believe that true beauty lies in a harmonious blend of inner peace and outer radiance. Our mission is to provide a serene and luxurious environment where you can indulge in top-tier beauty and wellness services.</p>

//     <a href="/about" className='cart-btn golo !mt-[1.2rem]'>Learn more</a>
// </div>

// <div  className="lg:h-[30rem] h-[25rem]">
// <img src="/home1.jpg" alt="" className="h-full w-full object-cover rounded-[.5rem] magic-radius-2 lg:rotate-[-5deg]"/>
//  </div>

// </div>
// </div>
  )
}

export default About