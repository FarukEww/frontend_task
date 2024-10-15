import React, { useState } from "react";
import homeIcon from "../assets/homeIcon.svg";

import copyIcon from "../assets/copyIcon.svg";
import trofyIcon from "../assets/trofy_vector.svg";
import dotRoundIcon from "../assets/dot_round.svg";
import profileIcon from "../assets/profileVector.svg";
import musicIcon from "../assets/music_vector.svg";
import vectorIcon from "../assets/Vector.svg";
import radioIcon from "../assets/radio.svg";

import partnerIcon from "../assets/mdi_partnership.svg";
import downArrowIcon from "../assets/down-arrow.svg";
import upArrowIcon from "../assets/up-arrow.svg";

import micIcon from "../assets/micIcon.svg";
import musicIcon2 from "../assets/musicIcon.svg";
import netIcon from "../assets/netIcon.svg";
import closeRound from "../assets/closeround.svg";

const Sidebar = ({show, onChange }) => {
  const [isOpen, setIsOpen] = useState(null);

 const handleShow = () => {
   onChange(!show); // Toggle visibility based on the parent state
 };
  const toggleVisble = (id) => {
    setIsOpen((prev) => (prev == id ? null : id));
  };
  return (
    <div
      className={`lg:min-h-full  lg:relative     bg-white  lg:rounded-r-[30px] ${
        show
          ? "  fixed top-0 z-20  w-72 h-screen flex flex-col  shadow-inner px-3 pt-3 gap-5   "
          : "hidden lg:flex  lg:flex-col"
      }`}
    >
      <button className="lg:hidden self-end" onClick={() => handleShow()}>
        <img src={closeRound} alt="" />
      </button>
      <div className="bg-white font-custom flex items-center justify-center h-screen w-60 z-10  rounded-r-[30px] ">
        <div className="flex flex-col gap-5">
          <button className="flex gap-3 items-center">
            <img src={homeIcon} alt="" /> <span className="text-">Home</span>
          </button>
          <button className="flex gap-3 items-center">
            <img src={profileIcon} alt="" /> <span>Profile</span>
          </button>{" "}
          <button
            onClick={() => toggleVisble(1)}
            className="flex w-40 justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <img src={vectorIcon} alt="" /> <span>Library</span>
            </div>{" "}
            {isOpen == 1 ? (
              <img src={upArrowIcon} alt="" />
            ) : (
              <img src={downArrowIcon} alt="" />
            )}
          </button>
          {isOpen == 1 && (
            <div className="flex flex-col pl-8 -mt-4 text-[#A8A8A8]">
              <button className="flex gap-2 items-center">
                <img src={musicIcon2} alt="" /> <span>Playlists</span>
              </button>{" "}
              <button className="flex gap-2 items-center">
                <img src={musicIcon} alt="" /> <span>Tracks</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={micIcon} alt="" /> <span>Artists</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={musicIcon2} alt="" /> <span>Albums</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={musicIcon} alt="" /> <span>Genres</span>
              </button>{" "}
              <button className="flex gap-2 items-center">
                <img src={netIcon} alt="" /> <span>Geos</span>
              </button>
            </div>
          )}
          <button
            onClick={() => toggleVisble(2)}
            className="flex w-40 justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <img src={copyIcon} alt="" /> <span>Collection</span>
            </div>
            {isOpen == 2 ? (
              <img src={upArrowIcon} alt="" />
            ) : (
              <img src={downArrowIcon} alt="" />
            )}
          </button>{" "}
          {isOpen == 2 && (
            <div className="flex flex-col pl-8 -mt-4 text-[#A8A8A8]">
              <button className="flex gap-2 items-center">
                <img src={musicIcon2} alt="" /> <span>Playlists</span>
              </button>{" "}
              <button className="flex gap-2 items-center">
                <img src={musicIcon} alt="" /> <span>Tracks</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={micIcon} alt="" /> <span>Artists</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={musicIcon2} alt="" /> <span>Albums</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={musicIcon} alt="" /> <span>Genres</span>
              </button>{" "}
              <button className="flex gap-2 items-center">
                <img src={netIcon} alt="" /> <span>Geos</span>
              </button>
            </div>
          )}
          <button className="flex gap-3 items-center">
            <img src={dotRoundIcon} alt="" /> <span>Community</span>
          </button>
          <button
            onClick={() => toggleVisble(3)}
            className="flex w-40 justify-between items-center"
          >
            <div className="flex gap-3 items-center">
              <img src={radioIcon} alt="" /> <span>Stations</span>{" "}
            </div>
            {isOpen == 3 ? (
              <img src={upArrowIcon} alt="" />
            ) : (
              <img src={downArrowIcon} alt="" />
            )}
          </button>{" "}
          {isOpen == 3 && (
            <div className="flex flex-col pl-8 -mt-4 text-[#A8A8A8]">
              <button className="flex gap-2 items-center">
                <img src={musicIcon2} alt="" /> <span>Playlists</span>
              </button>{" "}
              <button className="flex gap-2 items-center">
                <img src={musicIcon} alt="" /> <span>Tracks</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={micIcon} alt="" /> <span>Artists</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={musicIcon2} alt="" /> <span>Albums</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={musicIcon} alt="" /> <span>Genres</span>
              </button>{" "}
              <button className="flex gap-2 items-center">
                <img src={netIcon} alt="" /> <span>Geos</span>
              </button>
            </div>
          )}
          <button
            onClick={() => toggleVisble(4)}
            className="flex w-40 justify-between items-center"
          >
            {" "}
            <div className="flex gap-3 items-center">
              <img src={trofyIcon} alt="" /> <span>Performance</span>
            </div>
            {isOpen == 4 ? (
              <img src={upArrowIcon} alt="" />
            ) : (
              <img src={downArrowIcon} alt="" />
            )}
          </button>{" "}
          {isOpen == 4 && (
            <div className="flex flex-col pl-8 -mt-4 text-[#A8A8A8]">
              <button className="flex gap-2 items-center">
                <img src={musicIcon2} alt="" /> <span>Playlists</span>
              </button>{" "}
              <button className="flex gap-2 items-center">
                <img src={musicIcon} alt="" /> <span>Tracks</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={micIcon} alt="" /> <span>Artists</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={musicIcon2} alt="" /> <span>Albums</span>
              </button>
              <button className="flex gap-2 items-center">
                <img src={musicIcon} alt="" /> <span>Genres</span>
              </button>{" "}
              <button className="flex gap-2 items-center">
                <img src={netIcon} alt="" /> <span>Geos</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <button className="bg-black  text-white font-thin py-2  self-center rounded-xl px-4 flex items-center gap-3 ">
        Pro Partner <img src={partnerIcon} alt="" />{" "}
      </button>
    </div>
  );
};

export default Sidebar;
