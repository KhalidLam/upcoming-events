import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "./fullcalendar.css";

const MyCalendar = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        // console.log(res);
        setEventsData(res);
      });
  }, []);

  return (
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
      events={eventsData}
      eventContent={renderEventContent}
      // dayCellClassNames={["tdClassName", "otherclassname"]}

      eventClassNames={function (arg) {
        // console.log(arg.event);
        if (arg.event.extendedProps.isUrgent) {
          return ["urgent"];
        } else {
          return ["normal"];
        }
      }}
    />
  );
};

export default MyCalendar;

function renderEventContent(eventInfo) {
  // console.log(eventInfo);
  return (
    <div className='text-center event-content'>
      <p className='event-text'>{eventInfo.event.title}</p>
    </div>
  );
}
