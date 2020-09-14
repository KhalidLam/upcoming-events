import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CustomCalendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      headerToolbar={{
        left: "",
        center: "prev,title,next",
        right: "",
      }}
      initialView='dayGridMonth'
      events={[
        { title: "event 1", date: "2020-10-01" },
        { title: "event 2", date: "2020-09-15" },
      ]}
    />
  );
};

export default CustomCalendar;
