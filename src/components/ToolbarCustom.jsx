import React, { useContext, useState } from "react";
import leftIcon from "../assets/chevron-left.svg";
import rightIcon from "../assets/leftIcon.svg";
import plusWhiteIcon from "../assets/whitePlus.svg";
import Modal from "react-modal";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { EventContext } from "../Context/EventContext";
import closeRound from "../assets/closeround.svg";

const CustomToolbar = ({ label, onNavigate, onView, view }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const { addEvent } = useContext(EventContext);
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addEvent({
        title,
        description,
        start: startTime,
        end: endTime,
      });
      setModalIsOpen(false);

      setTitle("");
      setDescription("");
      setStartTime(new Date());
      setEndTime(new Date());
    }
  };

  const date = moment(label).format("MMMM D, YYYY");
  return (
    <>
      <div className="flex justify-between flex-wrap-reverse items-center p-2 ">
        <div className="flex items-center flex-wrap gap-6">
          <div className="flex items-center ">
            <button
              onClick={() => onNavigate("PREV")}
              className="px-3 py-2   border border-[#DCDFE3] rounded"
            >
              <img src={leftIcon} alt="" />
            </button>
            <span className="px-4 py-2 text-sm  rounded">{date} Today</span>
            <button
              onClick={() => onNavigate("NEXT")}
              className="px-4 py-3   border border-[#DCDFE3] rounded"
            >
              <img src={rightIcon} alt="" />
            </button>
          </div>
          <div className="flex items-center">
            <button
              className={`px-3 py-1 ${
                view === "day" ? "bg-yellow-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => onView("day")}
            >
              Day
            </button>
            <button
              className={`px-3 py-1 ${
                view === "week" ? "bg-yellow-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => onView("week")}
            >
              Week
            </button>
            <button
              className={`px-3 py-1 ${
                view === "month" ? "bg-yellow-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => onView("month")}
            >
              Month
            </button>
          </div>
        </div>

        <button
          onClick={openModal}
          className="px-2 whitespace-nowrap flex items-center gap-2  py-1 bg-yellow-500 text-white rounded-xl"
        >
          <img src={plusWhiteIcon} alt="" /> Schedule session
        </button>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Popup Modal"
          ariaHideApp={false}
          className="w-screen flex flex-col z-9999 justify-center lg:justify-normal items-center h-screen
            backdrop-brightness-75 backdrop-opacity-200  backdrop-blur-md"
        >
          <div className="flex px-6 flex-col">
            <button
              className="self-end bg-black rounded-full p-1"
              onClick={closeModal}
            >
              <img src={closeRound} alt="" />
            </button>

            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
            >
              <h2 className="text-lg font-bold mb-4">Add New Event</h2>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time
                </label>
                <DatePicker
                  selected={startTime}
                  onChange={(date) => setStartTime(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Time
                </label>
                <DatePicker
                  selected={endTime}
                  onChange={(date) => setEndTime(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-950 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Add Event
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CustomToolbar;
