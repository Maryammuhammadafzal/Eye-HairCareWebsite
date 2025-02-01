import React from 'react'
import './hero.css'
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Hero = () => {
  return (
    // <div className='w-[100%] h-screen'>
    //   <div className="backgroundImage w-[100%] h-screen ">
    //        <div className="bgimage bg-[#30D5C8]">
           
  
    //   <div data-layer="Section" className="Section bg-amber-200 self-stretch h-96 flex-col justify-start items-start flex">
    //     <div data-layer="Container" className="Container self-stretch h-96 flex-col justify-start items-start flex overflow-hidden">
    //       <div data-layer="Container" className="Container h-96 flex-col justify-start items-start flex">
    //         <div data-layer="Container" className="Container self-stretch h-96 px-96 py-52 flex-col justify-start items-center flex">
    //           <img data-layer="Image" className="Image w-96 h-96" src="https://via.placeholder.com/2232x1385" />
    //           <div data-layer="Background" className="Background w-96 h-96 bg-color-cyan-38" />
    //           <div data-layer="Background" className="Background w-96 h-96 opacity-60 bg-black" />
    //           <img data-layer="Image" className="Image w-96 h-28" src="https://via.placeholder.com/423x113" />
    //           <img data-layer="Image" className="Image w-56 h-56" src="https://via.placeholder.com/231x231" />
    //           <div data-layer="Container" className="Container h-96 flex-col justify-start items-start gap-1.5 flex">
    //             <div data-layer="Container" className="Container h-36 opacity-40 flex-col justify-start items-center flex">
    //               <div data-layer="Optc" className="Optc text-center text-orange-400 text-9xl font-extrabold font-['Jost'] uppercase leading-10">Optc</div>
    //             </div>
    //             <div data-layer="Heading 3" className="Heading3 self-stretch h-16 px-36 flex-col justify-start items-center flex">
    //               <div data-layer="Eye Care & Holistic Health Center" className="EyeCareHolisticHealthCenter self-stretch text-center text-color-cyan-38 text-2xl font-medium font-['Jost'] leading-loose">Eye Care & Holistic Health Center</div>
    //             </div>
    //             <div data-layer="Heading 2" className="Heading2 self-stretch h-60 px-2.5 flex-col justify-start items-center flex">
    //               <div data-layer="Eye Care & Holistic Health Center" className="EyeCareHolisticHealthCenter self-stretch text-center text-white text-7xl font-bold font-['Jost'] leading-10">Eye Care & Holistic<br/>Health Center</div>
    //             </div>
    //             <div data-layer="Container" className="Container self-stretch h-24 px-2 pt-2.5 flex-col justify-start items-center flex">
    //               <div data-layer="We solve all your eye care needs by providing personalized and holistic eye care for you and your family!" className="WeSolveAllYourEyeCareNeedsByProvidingPersonalizedAndHolisticEyeCareForYouAndYourFamily self-stretch text-center text-white text-lg font-normal font-['Roboto'] leading-7">We solve all your eye care needs by providing personalized and holistic eye care<br/>for you and your family!</div>
    //             </div>
    //             <div data-layer="Container" className="Container self-stretch h-28 px-56 pt-6 flex-col justify-center items-center flex">
    //               <div data-layer="Link" className="Link self-stretch px-11 py-4 bg-color-cyan-38 rounded-3xl justify-center items-center inline-flex overflow-hidden">
    //                 <div data-layer="Contact Now" className="ContactNow grow shrink basis-0 text-center text-white text-lg font-medium font-['Jost'] capitalize leading-relaxed">Contact Now</div>
    //               </div>
    //             </div>
    //           </div>
    //           <img data-layer="Image" className="Image w-80 h-80" src="https://via.placeholder.com/305x305" />
    //           <img data-layer="Image" className="Image w-28 h-28" src="https://via.placeholder.com/120x120" />
    //         </div>
    //       </div>
    //     </div>
    //     <div data-layer="Container" className="Container bg-amber-300 h-96 px-16 pb-80 justify-center items-start gap-96 inline-flex">
    //       <div data-layer="Background" className="Background w-14 self-stretch px-6 pt-2.5 pb-2 bg-white rounded-3xl flex-col justify-start items-center inline-flex">
    //         <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
    //           <div data-layer="Component 3" className="Component3 w-3.5 h-10 px-0.5 py-2.5 flex-col justify-center items-center inline-flex" />
    //         </div>
    //       </div>
    //       <div data-layer="Background" className="Background  w-14 self-stretch px-6 pt-2.5 pb-2 bg-white rounded-3xl flex-col justify-start items-center inline-flex">
    //         <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
    //           <div data-layer="Component 3" className="Component3 w-3.5 h-10 px-0.5 py-2.5 flex-col justify-center items-center inline-flex" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    

    //        </div>
    //   </div>
      
    // </div>

    <>
     <div className="relative w-[100%] h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-[#146f68] opacity-70"></div>
      <div className="relative text-center text-white z-10 max-w-2xl p-6 flex items-center flex-col gap-y-2">
        <motion.h2 
          className="text-xl font-semibold text-teal-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Eye Care & Holistic Health Center
        </motion.h2>
        <motion.h1 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Eye Care & Holistic <br /> Health Center
        </motion.h1>
        <motion.p 
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          We solve all your eye care needs by providing personalized and holistic eye care for you and your family!
        </motion.p>
        <motion.button 
         className='transition w-[150px] py-3 rounded-4xl flex justify-center items-center border-[#30D5C8] border  hover:bg-transparent hover:text-black hover:border-black bg-[#30D5C8] text-white'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6 }}
        >
          Contact Now
        </motion.button>
      </div>
      {/* <button className="absolute left-5 text-white bg-white/20 p-3 rounded-full">
        <FiChevronLeft size={24} />
      </button>
      <button className="absolute right-5 text-white bg-white/20 p-3 rounded-full">
        <FiChevronRight size={24} />
      </button> */}
    </div>

    </>
  )
}

export default Hero
