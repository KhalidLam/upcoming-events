let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
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
  {
    groupId: "blueEvents", // recurrent events in this group move together
    // startTime: "10:45:00",
    // endTime: "12:45:00",
    title: "recurse",
    startRecur: "2020-09-14",
    endRecur: "2020-09-17",
    display: "background",
    color: "#219653",
  },
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
  {
    id: createEventId(),
    title: "event 3",
    start: "2020-09-11T10:00:00",
    end: "2020-09-11T16:00:00",
    display: "background",
    color: "#828282",
  },
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
  {
    id: createEventId(),
    title: "event 2",
    date: "2020-10-01",
    display: "background",
    color: "#2D9CDB",
  },
  {
    id: createEventId(),
    title: "event 2",
    date: "2020-10-02",
    display: "background",
    color: "#2D9CDB",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
