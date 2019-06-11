import React from 'react';
import Nav from "./Nav"
import Sidebar from "./Sidebar";
import { Switch, Route } from 'react-router-dom';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';

import './App.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={CompanyList} />
      <Route exact path="/companyDetails/:companyId" component={CompanyDetails} />
    </Switch>
  </main>
)

function App() {
  return (
    <div>
      <Nav />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
