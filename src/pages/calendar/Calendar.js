import React, { Fragment } from "react";
import MyCalendar from "../../components/calendar/MyCalendar";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import UpEvents from "../../components/calendar/UpEvents";

import "./calendar.css";

const Calendar = () => {
  return (
    <Fragment>
      <Jumbotron header='Calendar' desc='Here is an overview of you calendar' />

      <div className='container events-container'>
        {/* Upcoming Events */}
        <div className='up-events'>
          <h2 className='text-l text-dark-gray'>Upcoming Events</h2>
          <div className='events-cards'>
            <UpEvents />
          </div>
        </div>

        {/* Calendar */}
        <div className='calendar'>
          <h2 className='calendar-title text-l text-dark-gray'>My Calendar</h2>
          <div className='fullcalendar-container bg-white'>
            <MyCalendar />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Calendar;
