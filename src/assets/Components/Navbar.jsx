import React from "react";
import { BrowserRouter } from "react-router";
import { Link } from "react-router";
import Button from "./Button/Button";
import Logo from "../Images/MJEC LOGO BLUE TEXT_edited.avif";

const Navbar = () => {
  return (
    <div className="w-[100%] h-[150px] flex flex-col">
      <div className="w-[100%] h-[40px] flex justify-center items-center bg-[#30D5C8]">
        <div className="w-[70%] h-[30px] flex justify-between items-center gap-x-2">
          <div className="email w-fit flex items-center">
            <img src="" alt="" />
            <address  className="flex items-center text-[14px] font-semibold">
              Email:&nbsp;
              <a href="mailto:info@mysite.com" className="text-[12px] font-normal  ">eyecare@markjoneseyecare.com</a>
            </address> 
          </div>
          <div className="address w-fit flex items-center ">
            <img src="" alt="" />
            <address className="flex items-center text-[14px] font-semibold">
              Address: &nbsp;
              <p className="hover:text-[#30D5C8] text-[12px] font-normal ">Mark Jones Eye Care 21 Fisherton Street Salisbury</p>
            </address>
          </div>
          <div className="address w-fit flex items-center">
            <img src="" alt="" />
            <address  className="flex items-center text-[14px] font-semibold">
              Phone:&nbsp;
              <p className="text-[12px] font-normal font-helvetica ">01722 322891</p>
            </address>
        </div>
        </div>
       
       
      </div>
      <div className="w-[100%] h-[80px] flex justify-center gap-x-5 items-center border-b border-b-[#30D5C8] static">
        <div className="logo w-[15%] h-fit">
                <img src={Logo} className="w-[90px]" alt="logo" />
        </div>
        <div className="tabs w-[50%] h-fit">
               <ul className="w-full h-[50px] flex justify-between items-center">
                <li className="tabItem w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">Home</li>
                <li className="tabItem w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">About</li>
                <li className="tabItem w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">Clinical</li>
                <li className="tabItem w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">Our Range</li>
                <li className="tabItem w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">Substainability</li>
                <li className="tabItem w-fit p-3 px-5 rounded-3xl h-fit hover:border-b hover:border-b-[#30D5C8] ">Contact</li>
               </ul>
        </div>
        <div className="btn w-[15%] h-fit flex items-center justify-center">
                <Button title="Contact us"/>
        </div>
      </div>
    </div>

//     <>
//     <div data-layer="Header" className="Header w-[100%] h-[144px] flex-col justify-start items-start inline-flex">
//   <div data-layer="Background" className="Background self-stretch h-12 px-72 py-3 bg-[#30D5C8] w-[100%] justify-start items-center flex">
//     {/* <div data-layer="Container" className="Container h-[24px] px-3.5 flex-col justify-start items-start flex">
//       <div data-layer="Container" className="Container self-stretch justify-between items-center inline-flex"> */}
//         <div data-layer="Container" className="Container w-[100%] justify-start items-start inline-flex">
//           <div data-layer="List" className="List self-stretch justify-start items-center inline-flex">
//             {/* <div data-layer="Item:margin" className="ItemMargin pr-6 flex-col justify-start items-start inline-flex"> */}
//               <div data-layer="Item" className="Item w-fit bg-amber-100 justify-start items-start flex">
//                 {/* <div data-layer="Container" className="Container bg-amber-100 w-6 flex-col justify-start items-start inline-flex">
//                   <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
//                     <div data-layer="Component 3" className="Component3 w-6 h-4 justify-center items-center flex" />
//                   </div>
//                 </div> */}
//                 <div data-layer="Email: " className="Email flex text-white text-base font-normal font-['Roboto'] leading-relaxed">Email: </div>
//                 <a data-layer="Link" className="Link justify-start items-start flex">
//                   <li data-layer="sample@example.com" className="SampleExampleCom text-white text-base font-normal font-['Roboto'] leading-relaxed">sample@example.com</li>
//                 </a>
//               </div>
//             {/* </div> */}
//             {/* <div data-layer="Item:margin" className="ItemMargin pr-6 flex-col justify-start items-start inline-flex"> */}
//               <div data-layer="Item" className="Item  justify-start items-start flex">
//                 <div data-layer="380 Albert St, Melborne" className="AlbertStMelborne text-white text-base font-normal font-['Roboto'] leading-relaxed">380 Albert St, Melborne</div>
//                 {/* <div data-layer="Container" className="Container h-4 flex-col justify-start items-start flex">
//                   <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
//                     <div data-layer="Component 3" className="Component3 w-3.5 h-4 px-px py-px flex-col justify-center items-center inline-flex" />
//                   </div>
//                 </div> */}
//               </div>
//             {/* </div> */}
//             <div data-layer="Item" className="Item pl-7 justify-start items-start flex">
//               <div data-layer="Container" className="Container w-5 flex-col justify-start items-start inline-flex">
//                 <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
//                   <div data-layer="Component 3" className="Component3 w-4 h-4 px-px py-px justify-center items-center flex" />
//                 </div>
//               </div>
//               <div data-layer="Call: " className="Call text-white text-base font-normal font-['Roboto'] leading-relaxed">Call: </div>
//               <div data-layer="Link" className="Link justify-start items-start flex">
//                 <div data-layer="+1 (230)-456-155-23" className="123045615523 text-white text-base font-normal font-['Roboto'] leading-relaxed">+1 (230)-456-155-23</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div data-layer="Container" className="Container pr-20 justify-start items-center flex">
//           <div data-layer="Margin" className="Margin pr-7 flex-col justify-start items-start inline-flex">
//             <div data-layer="Container" className="Container pl-7 flex-col justify-start items-start flex">
//               <div data-layer="Sun-Thu 08:00AM-05:00PM" className="SunThu0800am0500pm text-white text-base font-normal font-['Roboto'] leading-relaxed">Sun-Thu 08:00AM-05:00PM</div>
//               <div data-layer="Container" className="Container h-5 flex-col justify-start items-start flex">
//                 <div data-layer="Container" className="Container self-stretch justify-start items-start inline-flex">
//                   <div data-layer="Component 3" className="Component3 w-5 h-5 justify-center items-center flex" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         {/* </div>
//       </div> */}
//     </div>
//   </div>


//   <div data-layer="Background+Shadow" className="BackgroundShadow self-stretch h-24 px-72 bg-white shadow-[0px_20px_30px_0px_rgba(0,0,0,0.05)] flex-col justify-start items-center flex">
//     <div data-layer="Container" className="Container h-24 px-3.5 flex-col justify-start items-start flex">
//       <div data-layer="Container" className="Container self-stretch pr-px justify-between items-center inline-flex">
//         <div data-layer="Container" className="Container flex-col justify-start items-start inline-flex">
//           <div data-layer="Figure" className="Figure self-stretch h-6 py-0.5 flex-col justify-start items-start flex">
//             <div data-layer="Link" className="Link pt-1 pb-px justify-start items-center inline-flex">
//               <img data-layer="logo.png" className="LogoPng w-32 h-3.5 relative" src="https://via.placeholder.com/130x15" />
//             </div>
//           </div>
//         </div>
//         <div data-layer="Container" className="Container flex-col justify-start items-start inline-flex">
//           <div data-layer="Nav → List" className="NavList self-stretch justify-center items-start gap-7 inline-flex">
//             <div data-layer="Item → Link" className="ItemLink w-16 pr-5 py-9 flex-col justify-start items-center inline-flex">
//               <div data-layer="Home" className="Home text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Home</div>
//             </div>
//             <div data-layer="Item → Link" className="ItemLink w-16 pr-5 py-9 flex-col justify-start items-center inline-flex">
//               <div data-layer="Pages" className="Pages text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Pages</div>
//             </div>
//             <div data-layer="Item → Link" className="ItemLink w-24 pr-5 py-9 flex-col justify-start items-center inline-flex">
//               <div data-layer="Treatment" className="Treatment text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Treatment</div>
//             </div>
//             <div data-layer="Item → Link" className="ItemLink w-32 pr-5 py-9 flex-col justify-start items-center inline-flex">
//               <div data-layer="Doctor Listing" className="DoctorListing text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Doctor Listing</div>
//             </div>
//             <div data-layer="Item → Link" className="ItemLink w-20 pr-5 py-9 flex-col justify-start items-center inline-flex">
//               <div data-layer="Elements" className="Elements text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Elements</div>
//             </div>
//             <div data-layer="Item → Link" className="ItemLink w-14 pr-5 py-9 flex-col justify-start items-center inline-flex">
//               <div data-layer="Shop" className="Shop text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Shop</div>
//             </div>
//             <div data-layer="Item → Link" className="ItemLink w-14 pr-5 py-9 flex-col justify-start items-center inline-flex">
//               <div data-layer="Blog" className="Blog text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Blog</div>
//             </div>
//             <div data-layer="Item → Link" className="ItemLink w-14 py-9 flex-col justify-start items-center inline-flex">
//               <div data-layer="Contact" className="Contact text-center text-neutral-900 text-base font-medium font-['Jost'] leading-loose">Contact</div>
//             </div>
//           </div>
//         </div>
//         <div data-layer="Container" className="Container justify-start items-center flex">
//           <div data-layer="Margin" className="Margin pr-7 pt-0.5 pb-2 flex-col justify-start items-start inline-flex">
//             <div data-layer="Container" className="Container flex-col justify-start items-start flex">
//               <div data-layer="Component 3" className="Component3 w-6 h-6 px-px py-px flex-col justify-center items-center flex" />
//             </div>
//           </div>
//           <div data-layer="Link" className="Link px-11 py-4 bg-color-cyan-38 rounded-3xl justify-start items-center flex overflow-hidden">
//             <div data-layer="Contact Us" className="ContactUs text-center text-white text-lg font-medium font-['Jost'] capitalize leading-relaxed">Contact Us</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     </>
  );
};

export default Navbar;
