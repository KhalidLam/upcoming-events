import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className='header border-b'>
      <h1 className='logo'>Startup square</h1>
      <div className='user'>
        <div className='user_info'>
          <h4 className='text-dark'>Oussama Zaid</h4>
          <small className='text-muted'>Role: Manager</small>
        </div>
        <div className='user_pic'>
          <img
            src='https://via.placeholder.com/42'
            alt='user avatar'
            className='round-img'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
