import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import MyCalendar from "./components/calendar/MyCalendar";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>

        <div className='jumbotron border-b'>
          <div className='container'>
            <NavBar />
            <h2 className='page-header text-xl text-dark'>Calendar</h2>
            <p className='page-desc text-l'>Here is an overview of you calendar</p>
          </div>
        </div>

        <div className='container'>
          <div className='events-container'>
            <div className='up-events'>
              <h2 className='text-l text-dark-gray'>Upcoming Events</h2>

              <div className='events-cards'>
                <div className='card'>
                  <div className='card-header'>
                    <h2 className='card-title text-xxl'>10</h2>
                    <h4 class='card-subtitle text-muted'>September</h4>
                  </div>
                  <div className='card-body'>
                    <p className='card-text text-l'>Startup 2m - Meetup</p>
                  </div>
                  <div className='card-footer'>
                    <p className='event-time text-s text-blue'>
                      8:30 AM -- 18h30 PM
                    </p>
                    <p className='event-creator text-s text-muted'>
                      @ LaStartupFactory Office
                    </p>
                  </div>
                </div>
                <div className='card card-border'>
                  <div className='card-header'>
                    <h2 className='card-title text-xxl'>13 - 14</h2>
                    <h4 class='card-subtitle text-muted'>September</h4>
                  </div>
                  <div className='card-body'>
                    <p className='card-text text-l'>Hackathon xyz</p>
                  </div>
                  <div className='card-footer'>
                    <p className='event-time text-s text-blue'>
                      8:30 AM -- 18h30 PM
                    </p>
                    <p className='event-creator text-s text-muted'>
                      @ LaStartupFactory Office
                    </p>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-header'>
                    <h2 className='card-title text-xxl'>23</h2>
                    <h4 class='card-subtitle text-muted'>September</h4>
                  </div>
                  <div className='card-body'>
                    <p className='card-text text-l'>Scaletor (Batch 5)</p>
                  </div>
                  <div className='card-footer'>
                    <p className='event-time text-s text-blue'>
                      8:30 AM -- 18h30 PM
                    </p>
                    <p className='event-creator text-s text-muted'>
                      @ LaStartupFactory Office
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <MyCalendar />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
