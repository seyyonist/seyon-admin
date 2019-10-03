import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="fas fa-building menu-icon"></i>
            <span className="menu-title">Company</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sac">
          <i className="fas fa-stroopwafel menu-icon" ></i>
            <span className="menu-title">SAC Code</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
