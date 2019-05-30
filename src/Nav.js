import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="navbar-brand-wrapper d-flex justify-content-center">
      <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
        <a className="navbar-brand brand-logo" href="index.html"><img src="https://avatars2.githubusercontent.com/u/46738606?s=200&v=4" alt="logo"/></a>
        <a className="navbar-brand brand-logo-mini" href="index.html"><img src="https://avatars2.githubusercontent.com/u/46738606?s=200&v=4" alt="logo"/></a>
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
            <Link className="dropdown-item">
              <i className="typcn typcn-cog-outline text-primary"></i>
              Settings
            </Link>
            <Link className="dropdown-item">
              <i className="typcn typcn-eject text-primary"></i>
              Logout
            </Link>
          </div>
        </li>
      </ul>
      <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item nav-date dropdown">
            <a class="nav-link d-flex justify-content-center align-items-center" href="javascript:;">
              <h6 class="date mb-0">Today : Mar 23</h6>
              <i class="typcn typcn-calendar"></i>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
              <i class="typcn typcn-cog-outline mx-0"></i>
              <span class="count"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
              <p class="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                    <img src="../../../../images/faces/face4.jpg" alt="image" class="profile-pic"/>
                </div>
                <div class="preview-item-content flex-grow">
                  <h6 class="preview-subject ellipsis font-weight-normal">David Grey
                  </h6>
                  <p class="font-weight-light small-text text-muted mb-0">
                    The meeting is cancelled
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                    <img src="../../../../images/faces/face2.jpg" alt="image" class="profile-pic"/>
                </div>
                <div class="preview-item-content flex-grow">
                  <h6 class="preview-subject ellipsis font-weight-normal">Tim Cook
                  </h6>
                  <p class="font-weight-light small-text text-muted mb-0">
                    New product launch
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                    <img src="../../../../images/faces/face3.jpg" alt="image" class="profile-pic"/>
                </div>
                <div class="preview-item-content flex-grow">
                  <h6 class="preview-subject ellipsis font-weight-normal"> Johnson
                  </h6>
                  <p class="font-weight-light small-text text-muted mb-0">
                    Upcoming board meeting
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li class="nav-item dropdown mr-0">
            <a class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
              <i class="typcn typcn-bell mx-0"></i>
              <span class="count"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-success">
                    <i class="typcn typcn-info mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">Application Error</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Just now
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-warning">
                    <i class="typcn typcn-cog-outline mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">Settings</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-info">
                    <i class="typcn typcn-user mx-0"></i>
                  </div>
                </div>
                <div class="preview-item-content">
                  <h6 class="preview-subject font-weight-normal">New user registration</h6>
                  <p class="font-weight-light small-text mb-0 text-muted">
                    2 days ago
                  </p>
                </div>
              </a>
            </div>
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
