import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link class="nav-link" href="/">
            <i className="fas fa-building menu-icon"></i>
            <span class="menu-title">Company</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
