import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import Calendar from "./pages/calendar/Calendar";
import Dashboard from "./pages/dashboard/Dashboard";
import Applications from "./pages/applications/Applications";
import UpComingEvents from "./pages/upcomingevents/UpComingEvents";
import Investors from "./pages/investors/Investors";

export default function App() {
  return (
    <Router>
      <div className='App'>
        {/* Header */}
        <Header />

        {/* Navigation */}
        <NavBar />

        {/* Main */}
        <main className='main'>
          <Switch>
            <Route path='/upcomingevents' component={UpComingEvents} />
            <Route path='/investors' component={Investors} />
            <Route path='/applications' component={Applications} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/startupschool' component={Applications} />
            <Route path='/' component={Dashboard} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
