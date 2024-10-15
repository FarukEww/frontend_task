import React, { useState } from 'react'
import speakerIcon from "../assets/music/speaker.svg";
import pic from "../assets/music/pic.svg";
import closeRound from "../assets/closeround.svg";
import deleteIcons from "../assets/deleet.svg";
import calenderIcon from "../assets/calenderIcon.svg";


const EventCustom = ({ event }) => {
  const [isModel, setModel] = useState(false);

  return (
    <>
      <div
        onClick={() => setModel(true)}
        className="bg-[#F3F4F6] border-4 border-l-blue text-black p-1 "
      >
        <strong>{event.title}</strong>
        <p>{event.description}</p>
      </div>
      {isModel && (
        <div className=" backdrop-blur-sm w-screen h-screen text-black flex justify-center items-center  fixed z-10 top-0 right-0 left-0">
          <div className="bg-white flex gap-3 flex-col p-4  rounded-2xl">
            <div className="flex self-end gap-2 ">
              <img src={speakerIcon} alt="" />
              <img src={deleteIcons} alt="" />
              <button onClick={() => setModel(false)}>
                {" "}
                <img src={closeRound} alt="" />
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <button className="bg-yellow-500 p-2 rounded-md">
                <img src={calenderIcon} alt="" />
              </button>
              <div className="flex flex-col">
                {" "}
                <span className="font-semibold">15 November</span>
                <span>10:00 - 11:00 AM</span>
              </div>
            </div>
            <p className="text-base mt-2">Upcoming Song For Morning Prayers</p>
            <p className="text-sm mt-2">
              To Be Played In <span className="text-green-500">(15min)</span>
            </p>
            <p className="font-bold ">Playlist</p>
            <div className="flex gap-3">
              <img className="w-12" src={pic} alt="" />
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-base">Kesariya</p>
                <span className="text-xs">
                  Pritam Chakraborty - Kesariya (From "Brahmastra")
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <img className="w-12" src={pic} alt="" />
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-base">Kesariya</p>
                <span className="text-xs">
                  Pritam Chakraborty - Kesariya (From "Brahmastra")
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCustom