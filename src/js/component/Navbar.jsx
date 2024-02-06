import React from "react";
const toggleMenu = () => {
  const menu = document.querySelector(".menuDropdown");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
};
const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav>
        <h4 className='nav-title'>
          <a href='#'>Start Bootstrap</a>
        </h4>
        <div className='nav-links'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Contact</a>
        </div>
        <div
          className='hamburger-menu'
          onClick={toggleMenu}
        >
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
      </nav>
      <div className='menuDropdown'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Services</a>
        <a href='#'>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
