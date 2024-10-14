import React, { useState } from "react";
import homeIcon from "../assets/homeIcon.svg";

import filterIcon from "../assets/filterIcon.svg";
import backIcon from "../assets/backIcon.svg";
import copyIcon from "../assets/copyIcon.svg";
import rightIcon from "../assets/leftIcon.svg";
import trofyIcon from "../assets/trofy_vector.svg";
import dotRoundIcon from "../assets/dot_round.svg";
import playListIcon from "../assets/playlist.svg";
import roundVector from "../assets/round_vector.svg";
import profileIcon from "../assets/profileVector.svg";
import musicIcon from "../assets/music_vector.svg";
import searchIcon from "../assets/search.svg";
import vectorIcon from "../assets/Vector.svg";
import decadesIcon from "../assets/decades-icon.svg";
import radioIcon from "../assets/radio.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import partnerIcon from "../assets/mdi_partnership.svg";
import downArrowIcon from "../assets/down-arrow.svg";
import upArrowIcon from "../assets/up-arrow.svg";
import LockIcon from "../assets/Glyph_ undefined.svg";
import leftIcon from "../assets/chevron-left.svg";
//
import decadesIcon2 from "../assets/decades-icon (1).svg";
import accountIcon from "../assets/accountIcon.svg";
import micIcon from "../assets/micIcon.svg";
import musicIcon2 from "../assets/musicIcon.svg";
import notificationIcon from "../assets/notificationIcon.svg";
import saveIcon from "../assets/saveIcon.svg";
import smileIcon from "../assets/smileIcon.svg";
import starIcon from "../assets/starIcon.svg";
import shapeIcon from "../assets/Shape.svg";
import netIcon from "../assets/netIcon.svg";
import switchGray from "../assets/swith_gray.svg";
import switchYellow from "../assets/swithPlay_yellow.svg";
import plusWhiteIcon from "../assets/whitePlus.svg";
import cycleIcon from "../assets/music/cycle.svg";
import castIcon from "../assets/music/cast.svg";
import directionIcon from "../assets/music/direction.svg";
import group3 from "../assets/music/Group_3.svg";
import musicSubIcon from "../assets/music/music_sub.svg";
import nextIcon from "../assets/music/next.svg";
import pic from "../assets/music/pic.svg";
import playCircleIcon from "../assets/music/play-circle.svg";
import speakerIcon from "../assets/music/speaker.svg";
import remindIcon from "../assets/remind.svg";
import menuIcon from "../assets/Layer_1.svg";

import closeRound from "../assets/closeround.svg";
import deleteIcons from "../assets/deleet.svg";
import calenderIcon from "../assets/calenderIcon.svg";

import prevIcon from "../assets/music/prev.svg";

const Page2 = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isModel, setModel] = useState(false);
  const [show,setShow] =useState(false)
  console.log(isOpen);
  const toggleVisble = (id) => {
    setIsOpen((prev) => (prev == id ? null : id));
  };
  const events = [
    { time: "08:00", title: "Jai Shree raam", details: "To be played" },
    { time: "09:00", title: "Office chill track", details: "To be played" },
    { time: "10:00", title: "B Prank", details: "Checked in" },
    // Add more events as per the structure
  ];
  return (
    <>
      <div className="bg-[#FAFAF8] flex lg:flex-row flex-col w-full h-full">
        {/* sideBar   */}
        <div className="min-h-full  relative hidden lg:flex flex-col  bg-white rounded-r-[30px]">
          <div className="bg-white flex items-center justify-center h-screen w-60 z-10  rounded-r-[30px] ">
            <div className="flex flex-col gap-5">
              <button className="flex gap-3 items-center">
                <img src={homeIcon} alt="" />{" "}
                <span className="text-">Home</span>
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
        <div className="bg-white lg:hidden py-3 flex w-full justify-between items-center px-4 z-10">
          <button onClick={() => setShow(true)}>
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
          <div className="hidden lg:flex gap-2 items-center">
            <button className="px-7 py-1 w-20 rounded-2xl bg-[#F1B942] text-white">
              All
            </button>
            <button className="px-7 py-1 rounded-2xl bg-white hover:bg-[#F1B942] hover:text-white">
              Listing
            </button>
            <button className="px-7 py-1 rounded-2xl bg-white hover:bg-[#F1B942] hover:text-white">
              Learning
            </button>
            <button className="px-7 py-1 rounded-2xl bg-white hover:bg-[#F1B942] hover:text-white">
              Rehearsal
            </button>
            <button className="px-7 py-1 rounded-2xl bg-white hover:bg-[#F1B942] hover:text-white">
              Perform
            </button>
          </div>
          <div className="bg-white flex flex-col">
            <div className="justify-between flex p-5">
              <h2 className="text-2xl">Calender</h2>
              <div className="flex gap-2 items-center">
                <img src={LockIcon} alt="" /> Google Calender
              </div>
            </div>
            <div className="  h-[2px]  bg-[#A8A8A8]"></div>
            <div className="flex lg:flex-row flex-col gap-4">
              <div className="flex-1">
                {" "}
                <div className="flex justify-between flex-wrap-reverse items-center p-2 ">
                  {/* Date and Navigation */}
                  <div className="flex items-center ">
                    <button className="px-3 py-2   border border-[#DCDFE3] rounded">
                      <img src={leftIcon} alt="" />
                    </button>
                    <span className="px-4 py-2 text-sm  rounded">
                      May 27, 2022 Today
                    </span>
                    <button className="px-4 py-3   border border-[#DCDFE3] rounded">
                      <img src={rightIcon} alt="" />
                    </button>
                  </div>
                  <div className="flex items-center   ">
                    <button className="px-3 py-1 bg-yellow-500 rounded-tl-sm rounded-bl-sm text-white ">
                      Day
                    </button>
                    <button className="px-3 py-1 bg-gray-200 ">Week</button>
                    <button className="px-3 py-1 bg-gray-200 rounded-tr-sm rounded-br-sm ">
                      Month
                    </button>
                  </div>
                  {/* Day, Week, Month buttons */}

                  {/* Schedule Session Button */}
                  <button className="px-2 whitespace-nowrap flex items-center gap-2  py-1 bg-yellow-500 text-white rounded-xl">
                    <img src={plusWhiteIcon} alt="" /> Schedule session
                  </button>
                </div>
                <div className="flex flex-grow">
                  <div className="flex-grow">
                    <div className="flex">
                      {/* Time column */}
                      <div className="flex flex-col w-16 border-r">
                        {Array.from({ length: 6 }, (_, i) => i + 8).map(
                          (hour) => (
                            <div
                              key={hour}
                              className="h-16 border-b flex items-center justify-center text-gray-600"
                            >
                              {hour}:00
                            </div>
                          )
                        )}
                      </div>

                      {/* Events */}
                      <div className="flex-grow">
                        {events.map((event, index) => (
                          <div
                            key={index}
                            onClick={() => setModel(true)}
                            className="flex items-start pl-4 border-b h-16"
                          >
                            <div className="w-1/4 text-gray-600">
                              {event.time}
                            </div>
                            <div className="w-3/4">
                              <div className="bg-gray-200 p-2 rounded">
                                {event.title} - {event.details}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3  p-4 ">
                <div className="hidden lg:block">
                  <h2 className="text-lg font-semibold mb-2">January 2022</h2>
                  {/* Calendar placeholder */}
                  <div className="grid grid-cols-7 gap-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div key={day} className="text-center text-gray-500">
                          {day}
                        </div>
                      )
                    )}
                    {/* Example days */}
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <div
                        key={day}
                        className="h-10 w-10 flex items-center justify-center rounded bg-gray-100"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-2">Schedule</h3>
                  <div className="flex flex-col font-thin  gap-3">
                    <div className="flex gap-2  items-center">
                      <button className="bg-[#E9E9E9] px-3 py-1 text-sm rounded-2xl">
                        Listen
                      </button>
                      <button className="bg-[#FFDCDC] px-3 py-1 text-sm rounded-2xl">
                        Learn
                      </button>
                      <button className="bg-[#FFEBD4] px-3 py-1 text-sm whitespace-nowrap rounded-2xl">
                        Work-Out
                      </button>
                      <button className="bg-[#EAFFDC] px-3 py-1 text-sm rounded-2xl">
                        Study
                      </button>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button className="bg-[#E9E9E9] px-3 py-1 text-sm rounded-2xl">
                        Practice
                      </button>
                      <button className="bg-[#B3B1B7] px-3 py-1 text-sm rounded-2xl">
                        Other
                      </button>
                      <button className="bg-[#FFEBD4] px-3 py-1 text-sm whitespace-nowrap rounded-2xl">
                        Work-Out
                      </button>
                      <button className="bg-[#EAFFDC] px-3 py-1 text-sm rounded-2xl">
                        Study
                      </button>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button className="bg-[#E9E9E9] px-3 py-1 text-sm rounded-2xl">
                        Listen
                      </button>
                      <button className="bg-[#FFDCDC] px-3 py-1 text-sm rounded-2xl">
                        Learn
                      </button>
                      <button className="bg-[#FFEBD4] px-3 py-1 whitespace-nowrap text-sm rounded-2xl">
                        Work-Out
                      </button>
                      <button className="bg-[#EAFFDC] px-3 py-1 text-sm rounded-2xl">
                        Study
                      </button>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button className="bg-[#E2DBC1] px-3 py-1 text-sm rounded-2xl">
                        Practice
                      </button>
                      <button className="bg-[#B3B1B7] px-3 py-1 text-sm rounded-2xl">
                        Other
                      </button>
                      <button className="bg-[#FFEBD4] px-3 py-1 whitespace-nowrap text-sm rounded-2xl">
                        Work-Out
                      </button>
                      <button className="bg-[#EAFFDC] px-3 py-1 text-sm rounded-2xl">
                        Study
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold mb-2">Music</h3>
                  <div className="bg-[#F3F4F6] flex gap-3 py-2 rounded-lg justify-between items-center px-2">
                    {" "}
                    <p>Ronald rich playlist</p>{" "}
                    <img src={switchYellow} alt="" />{" "}
                    <img src={deleteIcon} alt="" />
                  </div>
                  <div className="bg-[#F3F4F6] flex mt-1 py-2 justify-between  rounded-lg items-center px-2">
                    {" "}
                    <p>Ronald rich playlist</p> <img src={switchGray} alt="" />{" "}
                    <img src={deleteIcon} alt="" />
                  </div>
                  <div className="flex gap-3 justify-center">
                    <button className="bg-yellow-500 font-thin text-white flex items-center gap-3 mt-3  self-center px-3 py-1 rounded-2xl">
                      {" "}
                      <img src={shareIcon} alt="" /> Share
                    </button>
                    <button className="bg-[#A8A8A8] lg:hidden font-thin text-white flex items-center gap-3 mt-3  self-center px-3 py-1 rounded-2xl">
                      {" "}
                      <img src={remindIcon} alt="" /> Remind me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex flex-col items-center py-4 mb-48 text-gray-600 text-sm">
            {/* Navigation Links */}
            <div className="flex flex-wrap space-x-4 mb-4">
              <a href="#" className="hover:underline">
                About
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Help
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Copyright Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </div>
          </footer>
        </div>
      </div>
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

      <div
        className={` ${
          show
            ? "  fixed top-0 z-20  w-72 h-screen bg-white shadow-inner px-3 pt-3 gap-5 flex flex-col transition-transform duration-300 ease-in-out   "
            : "hidden"
        }`}
      >
        <button onClick={()=>setShow(false)} className="self-end"><img src={closeRound} alt="" /></button>
        <div className="bg-white flex items-center justify-center h-screen w-60 z-10  rounded-r-[30px] ">
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
      </div>
      {isModel && (
        <div className=" backdrop-blur-sm w-full h-screen flex justify-center items-center  fixed z-10 top-0">
          <div className="bg-white flex gap-3 flex-col p-4 rounded-2xl">
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

export default Page2;
