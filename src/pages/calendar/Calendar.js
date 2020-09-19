import React, { Fragment, useState, useEffect } from "react";
import MyCalendar from "../../components/calendar/MyCalendar";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import UpEvents from "../../components/calendar/UpEvents";

import "./calendar.css";

const Calendar = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    // fetch("./data.json")
    //   .then((resp) => {
    //     return resp.json();
    //   })
    //   .then((res) => {
    //     // console.log(res);
    //     setEventsData(res);
    //   });
    getEvents();
  }, []);

  const getEvents = async () => {
    await fetch("./data.json")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        // console.log(res);
        setEventsData(res);
      });
  };

  return (
    <Fragment>
      <Jumbotron header='Calendar' desc='Here is an overview of you calendar' />

      <div className='container events-container'>
        {/* Upcoming Events */}
        <div className='up-events'>
          <h2 className='text-l text-dark-gray'>Upcoming Events</h2>
          <div className='events-cards'>
            <UpEvents eventsData={eventsData}/>
          </div>
        </div>

        {/* Calendar */}
        <div className='calendar'>
          <h2 className='calendar-title text-l text-dark-gray'>My Calendar</h2>
          <div className='fullcalendar-container'>
            <MyCalendar eventsData={eventsData}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Calendar;
