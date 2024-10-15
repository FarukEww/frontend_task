import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";

export default function Calendar(props) {
  return <BigCalendar {...props} />;
}
