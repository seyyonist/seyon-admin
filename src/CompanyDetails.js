import React, { Component } from 'react';
import axios from 'axios';

export default class CompanyDetails extends Component {

    componentDidMount(){
        const { match: { params } } = this.props;
        console.log(params.companyId);
    }
    render(){
        return(
            <h1>Company Details</h1>
        )
    }

}