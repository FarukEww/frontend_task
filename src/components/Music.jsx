import React from 'react'
;
import cycleIcon from "../assets/music/cycle.svg";
import castIcon from "../assets/music/cast.svg";
import directionIcon from "../assets/music/direction.svg";
import group3 from "../assets/music/Group_3.svg";
import musicSubIcon from "../assets/music/music_sub.svg";
import nextIcon from "../assets/music/next.svg";
import pic from "../assets/music/pic.svg";
import playCircleIcon from "../assets/music/play-circle.svg";
import speakerIcon from "../assets/music/speaker.svg";


import prevIcon from "../assets/music/prev.svg";






const Music = () => {
  return (
    <div
      className="fixed z-10 lg:flex bottom-2 px-5 hidden  items-center justify-between bg-white py-4   w-full
      "
    >
      <div className="flex gap-3">
        <img src={pic} alt="" />
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Kesariya</p>
          <span>Pritam</span>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <img src={directionIcon} alt="" />
        <img src={prevIcon} alt="" /> <img src={playCircleIcon} alt="" />
        <img src={nextIcon} alt="" />
        <img src={cycleIcon} alt="" />
        <div className="flex flex-col">
          <div className="bg-[#312522] h-[2px] min-w-96"></div>
          <div className="flex text-xs justify-between">
            <span>00:06</span>
            <span>00:10</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img src={group3} alt="" />
        <img src={musicSubIcon} alt="" />
        <img src={castIcon} alt="" />
        <img src={speakerIcon} alt="" />
        <input
          type="range"
          min="0"
          max="100"
          value="100"
          className="w-32 h-[2px] bg-[#312522] rounded-lg appearance-none cursor-pointer "
        />{" "}
      </div>
    </div>
  );
}

export default Music