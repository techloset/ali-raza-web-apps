import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
// import Revenue from "./Revenue";

export default function () {
  return (
    <div className=" flex lg:flex-row flex-col bg-white h-screen w-screen">
      <Sidebar />
      {/* <Revenue />    */}
      <div className="flex-1 ">
        <Header />
        <div className="p-4">{<Outlet />}</div>
      </div>
    </div>
  );
}
