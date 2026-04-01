import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import logo from "../../static/logo.png";

import './Navbar.scss';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div id="navbar">
      <div id="navbar-desktop">
        <div className="left">
          <Link to="/">
            <img src={logo} alt="logo" className="home-logo" />
          </Link>
        </div>
        <div className="right">
          <Link to="/services">services</Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRhZQyCdsi0JbcyConkMem5Cd1pZChOtG5hE8g9WGFgDvtKQ/viewform?usp=publish-editor">join the crew</a>
          <Link to="/book-us">book us</Link>
        </div>
      </div>
      <div id="navbar-mobile">
        <div className="top">
          <div className="left">
            <Link
              to="/"
              onClick={closeMobile}
              className={`${mobileOpen ? ' open' : ' closed'}`}
            >
              <Link to="/">
                <img src={logo} alt="logo" className="home-logo" />
              </Link>
            </Link>
          </div>
          <div className={`right ${mobileOpen ? ' open' : ' closed'}`}>
            <Hamburger toggled={mobileOpen} toggle={setMobileOpen} />
          </div>
        </div>
        <div className={`dropdown${mobileOpen ? ' open' : ' closed'}`}>
          <Link to="/services" onClick={closeMobile}>services</Link>
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeRhZQyCdsi0JbcyConkMem5Cd1pZChOtG5hE8g9WGFgDvtKQ/viewform?usp=publish-editor" onClick={closeMobile}>join the crew</Link>
          <Link to="/book-us" onClick={closeMobile}>book us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
