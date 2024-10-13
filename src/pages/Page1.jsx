import React from "react";
import homeIcon from "../assets/homeIcon.svg";

import filterIcon from "../assets/filterIcon.svg";
import backIcon from "../assets/backIcon.svg";
import copyIcon from "../assets/copyIcon.svg";

import trofyIcon from "../assets/trofy_vector.svg";
import dotRoundIcon from "../assets/dot_round.svg";
import playListIcon from "../assets/playlist.svg";
import roundVector from "../assets/round_vector.svg";
import profileIcon from "../assets/profileVector.svg";
import musicIcon from "../assets/music_vector.svg";
import searchIcon from "../assets/search.svg";
import vectorIcon from "../assets/Vector.svg";
import decadesIcon from "../assets/decades-icon.svg";
import decadesIcon2 from "../assets/decades-icon (1).svg";
import accountIcon from "../assets/accountIcon.svg";
import micIcon from "../assets/micIcon.svg";
import musicIcon2 from "../assets/musicIcon.svg";
import notificationIcon from "../assets/notificationIcon.svg";
import saveIcon from "../assets/saveIcon.svg";
import smileIcon from "../assets/smileIcon.svg";
import starIcon from "../assets/starIcon.svg";
import shapeIcon from "../assets/Shape.svg";

const Page1 = () => {
  const navBarData = [
    playListIcon,
    smileIcon,
    roundVector,
    saveIcon,
    starIcon,
    musicIcon2,
    micIcon,

    musicIcon,

    decadesIcon,
    filterIcon,
    backIcon,
  ];
  return (
    <div className="bg-[#FAFAF8] flex flex-col gap-4 py-8 px-6 h-screen">
      <h1 className="font-bold  text-2xl">Assets Used</h1>
      <div className="flex gap-3 items-center">
        <button>
          <img src={homeIcon} alt="" />
        </button>
        <button>
          <img src={copyIcon} alt="" />
        </button>
        <button>
          <img src={profileIcon} alt="" />
        </button>
        <button>
          <img src={vectorIcon} alt="" />
        </button>{" "}
        <button>
          <img src={dotRoundIcon} alt="" />
        </button>{" "}
        <button>
          <img src={trofyIcon} alt="" />
        </button>
      </div>
      <div className="flex gap-3 items-center">
        {navBarData.map((i, index) => (
          <button key={index}>
            <img src={i} alt="" />
          </button>
        ))}
      </div>
      <div className="flex gap-7 items-center">
        <button>
          <img src={searchIcon} alt="" />
        </button>
        <button className="relative">
          <span className="bg-green-500 absolute top-0 right-0 h-2 w-2 rounded-full"></span>
          <img src={notificationIcon} alt="" />
        </button>
        <button>
          <img src={accountIcon} alt="" />
        </button>
      </div>
      <div>
        <button className="border border-[#DCDFE3] py-2 px-3 rounded-sm">
          <img src={shapeIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Page1;
