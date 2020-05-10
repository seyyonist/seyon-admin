import React, { Component } from 'react';
import { OAUTH_DDETAILS } from "../configuration/appConfig";

class Login extends Component {
    state={
        randStr:this.randomStr(),
        redirectUrl:"http://"+window.location.host+"/processLogin"
    }
    componentDidMount(){
        document.getElementById('oauthForm').submit();
    }
    
    randomStr(len=20, arr=['1','2','3','4','5','6','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p']) { 
        var ans = ''; 
        for (var i = len; i > 0; i--) { 
            ans +=  
              arr[Math.floor(Math.random() * arr.length)]; 
        } 
        return ans
      } 

    render() {
        return (
            <div>
                <form id="oauthForm" method="GET" action={OAUTH_DDETAILS.url}>
                    <input type="hidden" name="client_id" value={OAUTH_DDETAILS.client_id}/>
                    <input type="hidden" name="redirect_uri" value={this.state.redirectUrl}/>
                    <input type="hidden" name="response_type" value="code"/>
                    <input type="hidden" name="scope" value="profile email"/>
                    <input type="hidden" name="state" value={this.state.randStr}/>
                    <input type="Submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}

export default Login