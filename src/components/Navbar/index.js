import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';

import './Navbar.scss';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div id="navbar">
      <div id="navbar-desktop">
        <div className="left">
          <Link to="/">home</Link>
        </div>
        <div className="right">
          <Link to="/services">services</Link>
          <Link to="/experience">experience</Link>
          <Link to="/join-the-crew">join the crew</Link>
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
              home
            </Link>
          </div>
          <div className={`right ${mobileOpen ? ' open' : ' closed'}`}>
            <Hamburger toggled={mobileOpen} toggle={setMobileOpen} />
          </div>
        </div>
        <div className={`dropdown${mobileOpen ? ' open' : ' closed'}`}>
          <Link to="/services" onClick={closeMobile}>services</Link>
          <Link to="/experience" onClick={closeMobile}>experience</Link>
          <Link to="/join-the-crew" onClick={closeMobile}>join the crew</Link>
          <Link to="/book-us" onClick={closeMobile}>book us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
