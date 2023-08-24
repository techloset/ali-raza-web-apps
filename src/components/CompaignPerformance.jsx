import React from "react";
import Google from "../assets/Google.svg";
import Insta from "../assets/Insta.svg";
import Tiktok from "../assets/tiktok.svg";

export default function CompaignPerformance() {
  return (
    // <div className=" grid lg:flex">
    <div className="bg-white mt-[1.5rem] ml-[1rem] rounded-3xl lg:h-[20.375rem] lg:w-[47.438rem]  border border-blue-300 shadow-2xl sm:w-full">
      <div className="text-[1.4rem] m-5 mt-7 font-bold flex justify-between">
        Compaign Performance
        <button class="text-blue-900  bg-neutral-200  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2.5  text-center inline-flex items-center ">
          See all
        </button>
      </div>

      <div className=" text-black flex justify-between ml-[2%] mr-[2%] font-bold  ">
        <div className="space-y-2.5 text-center ">
          <p className="text-neutral-400 text-left mb-5 ">Compaign</p>
          <span className="flex ">
            <img
              src={Google}
              alt=" Google"
              className="inline-flex items-center"
            />
            <p className="mt-3">Google Ads</p>
          </span>
          <span className="flex">
            <img src={Tiktok} alt=" Tiktok" />
            <p className="mt-3">Tiktok </p>
          </span>
          <span className="flex">
            <img src={Insta} alt=" Instagram" />
            <p className="mt-3">Instagram</p>
          </span>
        </div>

        <div className="space-y-9 text-center ml-[15%] ">
          <p className="text-neutral-400">Impressions</p>
          <p className="mt-8">189k</p>
          <p>286k</p>
          <p>156kk</p>
        </div>

        <div className="space-y-9 text-center">
          <p className="text-neutral-400">Clicks</p>
          <p className="mt-8">9k</p>
          <p>15k</p>
          <p>12k</p>
        </div>

        <div className="space-y-9 text-center">
          <p className="text-neutral-400">CPC</p>
          <p className="mt-8">9k</p>
          <p>15k</p>
          <p>12k</p>
        </div>

        <div className="space-y-9 text-center">
          <p className="text-neutral-400">Spend</p>
          <p className="mt-8">$56,123.12</p>
          <p>$40,123.12</p>
          <p>$39,123.12</p>
        </div>
      </div>
    </div>
    // </div>
  );
}
