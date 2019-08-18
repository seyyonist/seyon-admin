import React,{Component} from 'react';
import Nav from "./Nav"
import Sidebar from "./Sidebar";
import { Switch, Route } from 'react-router-dom';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import axios from 'axios';

import './App.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={CompanyList} />
      <Route exact path="/companyDetails/:companyId" component={CompanyDetails} />
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
    let url = "/api/user/authenticated"
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
