import React, { useContext } from "react";

import deleteIcon from "../assets/deleteIcon.svg";
import shareIcon from "../assets/shareIcon.svg";

import LockIcon from "../assets/Glyph_ undefined.svg";

import switchGray from "../assets/swith_gray.svg";
import switchYellow from "../assets/swithPlay_yellow.svg";

import remindIcon from "../assets/remind.svg";
import Calendar from "../utilities/CalendarSetup";
import CustomToolbar from "./ToolbarCustom";
import "./calendar.css";
import moment from "moment";
import { momentLocalizer } from "react-big-calendar";
import { EventContext } from "../Context/EventContext";

import EventCustom from "./EventCustom";

const CalenderLayout = () => {
  const { events } = useContext(EventContext);

  const localizer = momentLocalizer(moment);

  return (
    <>
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
            <div className="h-[95vh]">
              <Calendar
                defaultView={"day"}
                events={events}
                localizer={localizer}
                views={["month", "week", "day"]}
                components={{
                  toolbar: CustomToolbar,
                  event: EventCustom,
                }}
              />
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
                <p>Ronald rich playlist</p> <img src={switchYellow} alt="" />{" "}
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
    </>
  );
};

export default CalenderLayout;
