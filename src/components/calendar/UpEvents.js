import React, { Fragment, useEffect, useState } from "react";
import EventCard from "../eventCard/EventCard";

const UpEvents = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        setEventsData(res);
      });
  }, []);

  // .filter(event => isNotPased(event.startRecur) )
  const filteredEvents = eventsData.filter(event => isNotPased(event.startRecur)).map((event) => {
    return {
      date: getDate(event.startRecur, event.endRecur),
      month: getMonth(event.startRecur),
      title: event.title,
      time: `${formatAMPM(
        new Date(event.startRecur + event.start)
      )} -- ${formatAMPM(new Date(event.startRecur + event.end))}`,
      location: event.location,
    };
  });

  return (
    <Fragment>
      {eventsData.length &&
        filteredEvents
          .splice(0, 3)
          .map((event, index) => <EventCard key={index} event={event} />)}
    </Fragment>
  );
};

export default UpEvents;


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function getMonth(date) {
  var arr = date.split("-");
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var month_index = parseInt(arr[1], 10) - 1;
  return months[month_index];
  // console.log("The current month is " + months[month_index]);
}

function getDate(start, end){
  const date1 = new Date(start);
  const date2 = new Date(end);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if(diffDays === 1) return date1.getDate();
  return `${date1.getDate()} - ${date2.getDate()}`
}


function isNotPased(date){
  const currentDate = new Date().getTime();
  const otherdate = new Date(date).getTime();
  return (currentDate - otherdate) < 0;
}
