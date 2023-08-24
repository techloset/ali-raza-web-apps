import React from "react";
import UpArrow from "../assets/UpArrow.svg";
import DownArrow from "../assets/DownArrow.svg";

function Revenue() {
  return (
    <div className="grid grid-rows-1 gap-4  ml-[1rem] sm:w-full lg:w-[67.625rem] ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 items-center bg-white rounded-3xl border border-blue-300 p-4 shadow-xl ">
        {/* <div className="w-full md:w-1/4"> */}
        <div className="bg-white space-y-3 pl-4 p-4 flex-1 items-center">
          <span className="flex space-x-2 text-neutral-400 text-sm font-bold">
            Available to withdraw
            <p className="flex bg-neutral-200 border rounded-xl text-xs text-black ml-6">
              <img src={UpArrow} alt="Arrow" className="w-3" />
              10.0%
            </p>
          </span>
          <div className="text-[1.75rem] text-blue-900 font-bold font-sans">
            $1,567.99
          </div>
          <div className="text-xs md:text-sm font-bold">Wed, July 20</div>
        </div>
        {/* </div> */}

        {/* <div className="w-full md:w-1/4"> */}
        <div className="bg-white space-y-3 pl-4 p-4 flex-1 items-center">
          <span className="flex text-black text-sm font-bold">
            Today Revenue
            <p className="flex border rounded-xl text-xs bg-red-200 text-red-600 ml-6">
              <img src={DownArrow} alt="Arrow" className="w-3" />
              3.0%
            </p>
          </span>
          <div className="text-[1.75rem]  text-blue-900 font-bold font-sans">
            $2,868.99
          </div>
          <div className="text-xs md:text-sm font-bold">143 orders</div>
        </div>
        {/* </div> */}

        {/* <div className="w-full md:w-1/4"> */}
        <div className="bg-white space-y-3 pl-4 p-4 flex-1 items-center">
          <span className="flex text-black text-sm font-bold">
            Total Sessions
            <p className="flex bg-neutral-200 border rounded-xl text-xs ml-6">
              <img src={UpArrow} alt="Arrow" className="w-3" />
              3.2%
            </p>
          </span>
          <div className="text-[1.75rem] text-blue-900 font-bold font-sans">
            156K
          </div>
          <div className="text-xs md:text-sm font-bold">32k Visitors</div>
        </div>
        {/* </div> */}

        {/* <div className="w-full md:w-1/4"> */}
        <div className="bg-white space-y-3 pl-4 p-4 flex-1 items-center">
          <span className="flex text-black text-sm font-bold">
            Subscribers
            <p className="flex bg-neutral-200 border rounded-xl text-xs text-blue-500 ml-6">
              <img src={UpArrow} alt="Arrow" className="w-3 " />
              8.3%
            </p>
          </span>
          <div className="text-[1.75rem] text-blue-900 font-bold font-sans">
            3,422
          </div>
          <div className="text-xs md:text-sm font-bold">
            $34.28 Average Order
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Revenue;
