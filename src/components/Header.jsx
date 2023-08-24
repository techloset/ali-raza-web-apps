import React from "react";

import { HiOutlineBell } from "react-icons/hi";
export default function Header() {
  return (
    <div className="bg-white flex justify-between mr-14 ">
      <div className="font-bold font-sans text-[2rem] lg:w-[22.688rem] lg:h-[2.438rem]  ml-[2rem] mt-[2.5rem]">
        Good Morning, Gavano!
      </div>
      <div>
        <HiOutlineBell
          // fontSize={30}
          className="bg-neutral-200 mr-12 mt-12 text-4xl border rounded-xl "
        />
      </div>
    </div>
  );
}
