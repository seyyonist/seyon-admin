import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
            <i className="typcn typcn-document-text menu-icon"></i>
            <span className="menu-title">Companies</span>
            <i className="menu-arrow"></i>
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className="nav-link" to="/">FYA</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/">Search</Link></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}
