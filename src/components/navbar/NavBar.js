import React from "react";

const NavBar = () => {
  return (
    <header className='header b-bottom '>
      <h1 className='header-logo'>Startup square</h1>
      <div className='header-user'>
        <div className='header-user_info'>
          <h4 className='text-dark'>Oussama Zaid</h4>
          <small className='text-muted'>Role: Manager</small>
        </div>
        <div className='header-user_pic border'>
          <img
            src='https://via.placeholder.com/36'
            alt=''
            className='round-img border'
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
