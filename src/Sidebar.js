import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <i className="typcn typcn-archive menu-icon"></i>
            <span className="menu-title">Companies</span>
            <div className="badge badge-danger">new</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
