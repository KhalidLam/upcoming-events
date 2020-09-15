import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { INITIAL_EVENTS } from "./event-util";

import "./main.css";

const CustomCalendar = () => {
  return (
    <div className='fullcalendar-container'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        titleFormat={{ year: "numeric", month: "long" }}
        headerToolbar={{
          left: "",
          center: "prev,title,next",
          right: "",
        }}
        // headerToolbar={false}
        initialView='dayGridMonth'
        displayEventEnd={true}
        initialEvents={INITIAL_EVENTS}
        // events={ev}
        // eventBackgroundColor='#f00'
        // eventTextColor='#FFF'
        eventContent={renderEventContent}
        dayHeaderFormat={{ weekday: "long" }}
        firstDay={1}
      />
    </div>
  );
};

export default CustomCalendar;

function renderEventContent(eventInfo) {
  // console.log(eventInfo);
  return (
    <div className='text-center content-center'>
      {/* <b>{eventInfo.timeText}</b> */}
      <i className='event-text'>{eventInfo.event.title}</i>
    </div>
  );
}
