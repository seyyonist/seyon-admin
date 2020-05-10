import React, { Component } from 'react';
import {updateAuthentication} from '../redux/actions/index';
import { connect } from "react-redux";
import { API_ROOT } from '../configuration/appConfig';
import axios from 'axios';
import { Redirect,Link } from "react-router-dom";

const mapStateToProps = state => {
    return {
        jwt: state.jwt,
        picture: state.picture,
        name: state.name,
        email: state.email,
        isAuthenticated: false
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateAuthentication: (jwt, name, email, picture) => dispatch(updateAuthentication( jwt,name,email,picture))
    };
}

class ConnectedProcessLogin extends Component {
    componentDidMount(){
        let qsearch=this.props.location.search
        let code=new URLSearchParams(qsearch).get("code")
        this.getJwtAuth(code)
    }

    getJwtAuth(code) {
        let self = this
        let url = API_ROOT.concat("/jwt")
        let req={
            code:code,
            redirectUrl:"http://"+window.location.host+"/processLogin"
        }
        axios.post(url,req).then(
          resp => {
            let data = resp.data
            if(data.admin){
                self.props.updateAuthentication(data.jwt,data.name,data.email,data.picture);
            }else{
                alert("You are not admin to access")
            }
          }
        )
      }
    render() {
        if(this.props.isAuthenticated){
            return <Redirect to="/companylst"/>
        }
        return (
            <div>
                 <Link className="nav-link" to="/companylst">Home</Link>                
            </div>
        )
    }
}

const ProcessLogin=connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedProcessLogin)

export default ProcessLogin