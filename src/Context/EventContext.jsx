import React, { createContext, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {



  const [events, setEvents] = useState([
    {
      title: "Jai Shree raam",
      description: "To be played in 15 min",
      start: new Date(2024, 9, 15, 14, 0),
      end: new Date(2024, 9, 15, 16, 0),
    },
    {
      title: "Office chill track",
      description: "To be played in 2 min",
      start: new Date(2001, 9, 15, 14, 30),
      end: new Date(2001, 9, 15, 16, 0),
    },
    {
      title: "B Prank",
      description: "To be played in 5 min",
      start: new Date(2024, 9, 20, 14, 20),
      end: new Date(2024, 9, 20, 16, 0),
    },
  ]);

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };



  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};
