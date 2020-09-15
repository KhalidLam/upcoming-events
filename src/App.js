import React from "react";
import NavBar from "./components/navbar/NavBar";
import CustomCalendar from "./components/calendar/CustomCalendar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='container bg-white'>
        <h2 className='m-2'>My Calendar</h2>
        <CustomCalendar />
      </div>
    </div>
  );
}

export default App;
