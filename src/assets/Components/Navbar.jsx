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

  );
};

export default Navbar;
