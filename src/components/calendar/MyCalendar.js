import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { INITIAL_EVENTS } from "./event-util";

import "./fullcalendar.css";

const MyCalendar = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        console.log(res);
        setEventsData(res)
      })
  }, [])

  return (
    <div className="my-calendar">
      <h2 className='text-l text-dark-gray'>My Calendar</h2>
      <div className='fullcalendar-container bg-white'>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          headerToolbar={{
            left: "",
            center: "prev,title,next",
            right: "",
          }}
          titleFormat={{ year: "numeric", month: "long" }}
          dayHeaderFormat={{ weekday: "long" }}
          firstDay={1}
          initialEvents={INITIAL_EVENTS}
          events={eventsData}
          eventContent={renderEventContent}
          // dayHeaderClassNames="mydayheader"
          // headerToolbar={false}
          // displayEventEnd={true}
          // eventBackgroundColor='#f00'
          // eventColor='red'
          // eventTextColor='#000'
          // eventBorderColor="#f0f"
          // events={[
          //   {
          //     title: "event 2",
          //     date: "2020-09-24",
          //     display: "background",
          //     color: "#2D9CDB",
          //   },
          // ]}
        />
      </div>
    </div>
  );
};

export default MyCalendar;

function renderEventContent(eventInfo) {
  // console.log(eventInfo);
  return (
    <div className='text-center content-center'>
      {/* <b>{eventInfo.timeText}</b> */}
      <i className='event-text'>{eventInfo.event.title}</i>
    </div>
  );
}
