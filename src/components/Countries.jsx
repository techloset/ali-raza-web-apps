import React from "react";
import USA from "../assets/USA.svg";
import UK from "../assets/UK.svg";
import Swiss from "../assets/Swiss.svg";
const countryStyle =
  "flex items-center space-x-4 text-base font-sans font-bold";

export default function Countries() {
  return (
    //              sm:w-full  lg:w-[17.938rem] lg:h-[20.375rem] bg-white  p-5 border border-blue-300 rounded-3xl shadow-2xl
    <div className="sm:w-full lg:w-[17.938rem] lg:h-[20.375rem] bg-white p-4 border border-blue-300 rounded-3xl shadow-2xl">
      <div className="text-[1.4rem] font-sans font-bold  ml-3 mt-3 ">
        Top Countries
      </div>
      <div className="lg:grid lg:space-y-5 flex  mt-10  ">
        {/* First Row */}
        <span className={countryStyle}>
          <img src={USA} alt="USA" className="lg:px-2  h-12" />
          <p>UnitedState</p>
          <p className="text-blue-900 text-[1.125rem] px-3">48%</p>
        </span>
        {/* Second Row */}
        <span className={countryStyle}>
          <img src={UK} alt="UK" className="lg:px-2 h-12" />
          <p>United King..</p>
          <p className="text-blue-900 text-[1.125rem] px-1">12%</p>
        </span>
        {/* Third Row */}
        <span className={countryStyle}>
          <img src={Swiss} alt="Switzerland" className=" lg:px-2 h-12" />
          <p>Switzerland</p>
          <p className="text-blue-900 text-[1.125rem] px-6">9%</p>
        </span>
      </div>
    </div>
  );
}
