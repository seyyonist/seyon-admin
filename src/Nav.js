import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

  let today= new Date().toString();

  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="navbar-brand-wrapper d-flex justify-content-center">
      <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
        <a className="navbar-brand brand-logo" href="index.html"><img src="https://raw.githubusercontent.com/seyyonist/seyon-gw/master/src/main/resources/static/img/logo-white.png" alt="logo"/></a>
        <a className="navbar-brand brand-logo-mini" href="index.html"><img src="https://raw.githubusercontent.com/seyyonist/seyon-gw/master/src/main/resources/static/img/logo-white.png" alt="logo"/></a>
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="fas fa-bars"></span>
        </button>
      </div>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
      <ul className="navbar-nav mr-lg-2">
        <li className="nav-item nav-profile dropdown">
          <p className="nav-link c-pointer"  data-toggle="dropdown" id="profileDropdown">
            <i className="fas fa-user "></i>
            <span className="nav-profile-name">Welcome</span>
          </p>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
            <Link className="dropdown-item" to="/">
              <i className="typcn typcn-cog-outline text-primary"></i>
              Settings
            </Link>
            <Link className="dropdown-item" to="/">
              <i className="typcn typcn-eject text-primary"></i>
              Logout
            </Link>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-date dropdown">
            <span className="nav-link d-flex justify-content-center align-items-center c-pointer" >
              <h6 className="date mb-0">Today : {today}</h6>
              <i className="typcn typcn-calendar"></i>
            </span>
          </li>
        </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span className="typcn typcn-th-menu"></span>
      </button>
    </div>
  </nav>
  );
}

export default Nav;
