import React from 'react';
import Nav from "./Nav"
import Sidebar from "./Sidebar";
import { Switch, Route } from 'react-router-dom';
import CompanyList from './CompanyList';
import './App.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={CompanyList} />
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
