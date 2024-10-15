import React, { useState } from "react";

import searchIcon from "../assets/search.svg";

import accountIcon from "../assets/accountIcon.svg";

import notificationIcon from "../assets/notificationIcon.svg";

import menuIcon from "../assets/Layer_1.svg";

import Sidebar from "../components/Sidebar";
import Music from "../components/Music";
import Footer from "../components/Footer";
import CalenderLayout from "../components/CalenderLayout";

const Page2 = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="bg-[#FAFAF8] flex lg:flex-row flex-col w-full h-full">
        {/* sideBar   */}
        <Sidebar show={show} onChange={setShow} />
        <div className="bg-white lg:hidden py-3 flex w-full justify-between items-center px-4 z-10">
          <button onClick={() => setShow(!show)}>
            <img src={menuIcon} alt="" />
          </button>
          <div className="flex gap-3 items-center">
            <img src={searchIcon} alt="" />
            <img src={accountIcon} alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col px-2 lg:px-5 gap-5 lg:pt-14 h-full">
          {" "}
          <div className="hidden lg:flex justify-end  items-center px-20">
            <button className="  flex-1 flex justify-center">
              <span className="bg-white  p-2  shadow-sm rounded-full">
                <img src={searchIcon} alt="" />
              </span>{" "}
            </button>
            <ul className="flex items-center gap-3">
              <li>Premium</li>
              <li className="bg-black text-white px-2 py-1 rounded-2xl">
                Get app
              </li>
              <li className="relative">
                <span className="bg-green-500 absolute top-0 right-0 h-2 w-2 rounded-full"></span>
                <img src={notificationIcon} alt="" />
              </li>
              <li>
                <img src={accountIcon} alt="" />
              </li>
            </ul>
          </div>
          <div className="text-[#D8D8D8] font-thin">Back to Library</div>
          <CalenderLayout />
          <Footer />
        </div>
      </div>
      <Music />
    </>
  );
};

export default Page2;
