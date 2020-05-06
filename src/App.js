import React,{Component} from 'react';
import Nav from "./core/Nav"
import Sidebar from "./core/Sidebar";
import { Switch, Route } from 'react-router-dom';
import CompanyList from './component/CompanyList';
import CompanyDetails from './component/CompanyDetails';
import axios from 'axios';

import { API_ROOT } from './configuration/appConfig';

import './App.css';
import SACCode from './component/SACCode';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={CompanyList} />
      <Route exact path="/companyDetails/:companyId" component={CompanyDetails} />
      <Route exact path="/sac" component={SACCode} />
      
    </Switch>
  </main>
)

class App extends Component{

  checkSuperUser(){
    return false;
  }

  state = {
    username:""
  }

  componentDidMount() {
    this.getAuthenicatedUser();
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

  render(){
  return (
    <div>
      <Nav username={this.state.username}/>
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

export default App;
