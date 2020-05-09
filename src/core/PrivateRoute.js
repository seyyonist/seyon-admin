import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated
    };
};

const ConnectedPrivateRoute = ({ component: Component,isAuthenticated, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated === true
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    )
}

const PrivateRoute = connect(mapStateToProps)(ConnectedPrivateRoute)

export default PrivateRoute