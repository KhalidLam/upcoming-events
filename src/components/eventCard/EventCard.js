import React from "react";
import PropTypes from "prop-types";

import "./eventCard.css";

const EventCard = ({ event: { date, month, title, time, host } }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2 className='card-title text-xxl'>{date}</h2>
        <h4 class='card-subtitle text-muted'>{month}</h4>
      </div>
      <div className='card-body'>
        <p className='card-text text-l'>{title}</p>
      </div>
      <div className='card-footer'>
        <p className='event-time text-s text-blue'>{time}</p>
        <p className='event-creator text-s text-muted'>{host}</p>
      </div>
    </div>
  );
};

export default EventCard;

EventCard.defaultProps = {
  event: {
    date: "10",
    month: "September",
    title: "Startup 2m - Meetup",
    time: "8:30 AM -- 18h30 PM",
    host: "@ LaStartupFactory Office",
  },
};

EventCard.prototype = {
  eventInfo: PropTypes.object.isRequired,
};
