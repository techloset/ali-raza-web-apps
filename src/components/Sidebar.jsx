import React, { useState } from "react";
import LogoSvg from "../assets/LogoSVG.svg";
import DbSvg from "../assets/DbSVG.svg";
import AudienceSvg from "../assets/AudienceSVG.svg";
import CompaignSvg from "../assets/CompaignSVG.svg";
import PromoteSvg from "../assets/PromoteSVG.svg";
import ProfileSvg from "../assets/ProfileSVG.svg";
import PerformanceSVG from "../assets/PerformanceSVG.svg";
import SettingSvg from "../assets/SettingSVG.svg";
import bPic from "../assets/bPic.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const hover =
  "flex items-center space-x-4 h-12 decoration-transparent hover:scale-105 hover:bg-white active:bg-neutral-500 rounded-md ";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex flex-col text-lg ">
      <div className="flex items-center gap-2 mt-[2.5rem] ml-[3.188rem]  text-4xl">
        {/* Hamburger menu button */}
        <button onClick={toggleSidebar} className="lg:hidden">
          <GiHamburgerMenu />
        </button>

        <img
          src={LogoSvg}
          alt="Company Logo "
          className={`h-12 ${showSidebar ? "block " : ""}`}
        />
        <span
          className={`text-blue-800 font-normal  ${
            showSidebar ? "block " : ""
          }`}
        >
          Ads<span className=" font-sans font-bold">litics</span>
        </span>
      </div>

      <div
        className={`lg:w-[14.438rem]  lg:mt-[3.5rem] lg:ml-[2.188rem]  ${
          showSidebar ? "block " : "hidden lg:block"
        }`}
        id="navbar-default"
      >
        <div className="lg:ml-[2rem] lg:space-y-8 text-black text-xl bg-white ">
          <span className={hover}>
            <img src={DbSvg} alt="Dashboard" className="  h-8" />
            <Link className="text-black " to={"/"}>
              Dashboard
            </Link>
          </span>
          <span className={hover}>
            <img src={CompaignSvg} alt="Compaign" className=" h-8" />
            <Link className="text-black" to={"/compaign"}>
              Compaign
            </Link>
          </span>

          <span className={hover}>
            <img src={AudienceSvg} alt="Audience" className="h-8" />
            <Link className="text-black" to={"/audience"}>
              Audience
            </Link>
          </span>

          <span className={hover}>
            <img src={PerformanceSVG} alt="Performance" className="h-8 " />
            <Link className="text-black" to={"/performance"}>
              Performance
            </Link>
          </span>

          <span className={hover}>
            <img src={PromoteSvg} alt="Promote" className="h-8" />
            <Link className="text-black" to={"/promote"}>
              Promote
            </Link>
          </span>
          <hr />
          <span className={hover}>
            <img src={ProfileSvg} alt="Profile" className="h-8" />
            <Link className="text-black" to={"/profile"}>
              Profile
            </Link>
          </span>

          <span className={hover}>
            <img src={SettingSvg} alt="Settings" className="h-8" />
            <Link className="text-black" to={"/settings"}>
              Settings
            </Link>
          </span>
        </div>
        <div className=" lg:mt-56 lg:ml-10 ">
          <span className="flex mb-0 ">
            <img src={bPic} alt="Picture" />
            <p className="text-black ml-2 mt-2" to={"/"}>
              Gavano
            </p>
            <p className="mx-10 mt-1">...</p>
          </span>
        </div>
      </div>
    </div>
  );
}
