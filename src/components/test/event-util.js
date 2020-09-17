let eventGuid = 0;
// let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    groupId: "redEvents",
    title: "Event 2",
    startRecur: "2020-09-14",
    endRecur: "2020-09-17",
    display: "background",
    color: "#d44646",
  },
  {
    groupId: "blueEvents",
    title: "Meeting one to one",
    startRecur: "2020-09-11",
    endRecur: "2020-09-13",
    display: "background",
    color: "#1e32ca",
  },
  {
    id: createEventId(),
    title: "Event 3",
    date: "2020-10-01",
    display: "background",
    color: "#2D9CDB",
  },

  // {
  //   id: createEventId(),
  //   title: "All-day event",
  //   start: todayStr,
  // },
  // {
  //   id: createEventId(),
  //   title: "Timed event",
  //   start: todayStr + "T12:00:00",
  // },
  // {
  //   id: createEventId(),
  //   title: "Test event again",
  //   start: "2020-09-17",
  // },
  // {
  //   id: createEventId(),
  //   title: "Test event",
  //   start: "2020-09-18",
  //   // display: "background",
  //   // color: "#378006",
  //   textColor: "#000",
  // },
  // {
  //   id: createEventId(),
  //   title: "event 1",
  //   date: "2020-09-15",
  //   display: "background",
  //   color: "green",
  // },
  // {
  //   id: createEventId(),
  //   title: "event 3",
  //   start: "2020-09-11T10:00:00",
  //   end: "2020-09-11T16:00:00",
  //   display: "background",
  //   color: "#828282",
  // },
  // {
  //   id: createEventId(),
  //   title: "event 6",
  //   start: "2020-09-24",
  //   end: "2020-09-27",
  //   overlap: true,
  //   display: "background",
  // },
  // {
  //   id: createEventId(),
  //   title: "event 5",
  //   start: "2020-09-06",
  //   end: "2020-09-08",
  //   overlap: false,
  //   display: "background",
  // },
  // {
  //   id: createEventId(),
  //   title: "event 2",
  //   date: "2020-10-02",
  //   display: "background",
  //   color: "#2D9CDB",
  // },
];

export function createEventId() {
  return String(eventGuid++);
}


const events = [
  {
    date: "10",
    month: "September",
    title: "Startup 2m - Meetup",
    time: "8:30 AM -- 18h30 PM",
    location: "@ LaStartupFactory Office",
  },
  {
    date: "13 - 14",
    month: "September",
    title: "Hackathon xyz",
    time: "8:30 AM -- 18h30 PM",
    location: "@ LaStartupFactory Office",
  },
  {
    date: "23",
    month: "September",
    title: "Scaletor (Batch 5)",
    time: "8:30 AM -- 18h30 PM",
    location: "@ LaStartupFactory Office",
  },
];