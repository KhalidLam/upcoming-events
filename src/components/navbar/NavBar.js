import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='navbar bg-gray'>
      <div className='container'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink exact to='/'>
              Dashboard
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/startupschool'>Startup School</NavLink>
          </li>
          <li className='nav-item active'>
            <NavLink to='/calendar'>Calendar</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/applications'>Applications</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/investors'>Investors</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/upcomingevents'>Upcoming Events</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
