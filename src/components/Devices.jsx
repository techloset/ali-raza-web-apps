import React from "react";
import Mobile from "../assets/Mobile.svg";
import Desktop from "../assets/Desktop.svg";
import Tablet from "../assets/Tablet.svg";

const textStyle = " text-blue-900 text-[1.125rem] font-bold ";
const imageStyle = " px-2 w-[3.7rem] ";

export default function Devices() {
  return (
    <div className=" sm:w-full  lg:w-[17.938rem] lg:h-[20.375rem] bg-white font-bold  p-5 border border-blue-300 rounded-3xl shadow-2xl">
      <span className="text-[1.4rem] px-3">Device Catagory</span>

      {/* Inner div STYLES */}
      <div className="lg:grid lg:space-y-5 flex  mt-10  ">
        {/* First Row */}
        <span className="flex items-center  ">
          <img src={Mobile} alt="Mobile" className={imageStyle} />
          <p className="text-[1rem] font-normal">Mobile</p>
          <p className={`mx-11 ${textStyle}`}>96.42%</p>
        </span>
        {/* Second Row */}
        <span className="flex items-center ">
          <img src={Desktop} alt="Desktop" className={imageStyle} />
          <p className="text-[1rem] font-normal">Desktop</p>
          <p className={`mx-12 ${textStyle}`}>2.76%</p>
        </span>
        {/* Third Row */}
        <span className="flex items-center ">
          <img src={Tablet} alt="Tablet" className={imageStyle} />
          <p className="text-[1rem] font-normal">Tablet</p>
          <p className={`mx-16 ${textStyle}`}>0.82%</p>
        </span>
      </div>
    </div>
  );
}
