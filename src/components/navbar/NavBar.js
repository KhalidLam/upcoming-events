import React from "react";

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <a href='sa'>Dashboard</a>
        </li>
        <li className='nav-item'>
          <a href='sa'>Startup School</a>
        </li>
        <li className='nav-item active'>
          <a href='sa' className='active'>
            Calendar
          </a>
        </li>
        <li className='nav-item'>
          <a href='sa'>Applications</a>
        </li>
        <li className='nav-item'>
          <a href='sa'>Investors</a>
        </li>
        <li className='nav-item'>
          <a href='sa'>Upcoming Events</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
