import React, { Fragment } from "react";
import EventCard from "../eventCard/EventCard";

const UpEvents = () => {
  const events = [
    {
      date: "10",
      month: "September",
      title: "Startup 2m - Meetup",
      time: "8:30 AM -- 18h30 PM",
      host: "@ LaStartupFactory Office",
    },
    {
      date: "13 - 14",
      month: "September",
      title: "Hackathon xyz",
      time: "8:30 AM -- 18h30 PM",
      host: "@ LaStartupFactory Office",
    },
    {
      date: "23",
      month: "September",
      title: "Scaletor (Batch 5)",
      time: "8:30 AM -- 18h30 PM",
      host: "@ LaStartupFactory Office",
    },
  ];

  return (
    <Fragment>
      {events.map((event) => (
        <EventCard event={event} />
      ))}
    </Fragment>
  );
};

export default UpEvents;
