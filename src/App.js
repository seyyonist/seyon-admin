import React, { Component } from 'react';
import Nav from "./core/Nav"
import Sidebar from "./core/Sidebar";
import { Switch, Route } from 'react-router-dom';
import CompanyList from './component/CompanyList';
import CompanyDetails from './component/CompanyDetails';
import axios from 'axios';

import { API_ROOT } from './configuration/appConfig';
import { logout } from "./redux/actions/index";
import './App.css';
import SACCode from './component/SACCode';
import { connect } from "react-redux";
import Login from './core/login';
import PrivateRoute  from "./core/PrivateRoute";
import ProcessLogin from './core/processLogin';

const Main = () => (
  <main>
    <Switch>
      <PrivateRoute exact path='/' component={CompanyList} />
      <PrivateRoute exact path='/companylst' component={CompanyList} />
      <PrivateRoute exact path="/companyDetails/:companyId" component={CompanyDetails} />
      <PrivateRoute exact path="/sac" component={SACCode} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/processLogin" component={ProcessLogin} />
    </Switch>
  </main>
)

const mapStateToProps = state => {
  return {
    jwt: state.jwt,
    picture: state.picture,
    name: state.name,
    email: state.email,
    isAuthenticated: state.isAuthenticated
  };
};
function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

class ConnectedApp extends Component {

  checkSuperUser() {
    return false;
  }

  state = {
    username: "",
  }

  componentDidMount() {
   // this.getAuthenicatedUser();
  }

  getAuthenicatedUser() {
    let self = this
    let url = API_ROOT.concat("/api/user/authenticated")
    axios.get(url).then(
      resp => {
        let user = resp.data
        self.setState({
          username: user.name
        })
      }
    )
  }

  render() {
    return (
      <div>
        <Nav username={this.props.name} logout={this.props.logout} />
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
}
const App = connect(mapStateToProps,mapDispatchToProps)(ConnectedApp);

export default App;
