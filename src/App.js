import React from "react";
import NavBar from "./components/navbar/NavBar";
import CustomCalendar from "./components/calendar/CustomCalendar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='container bg-white'>
        <h1 style={{ margin: "2rem" }}>Test Calendar</h1>
        <CustomCalendar />
      </div>
    </div>
  );
}

export default App;
