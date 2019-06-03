import React, { Component } from 'react';
import axios from 'axios';

export default class CompanyList extends Component {

    state = {
        companyList: [],
        search: {
            companyName: "",
            ownerName: "",
            city: "",
            state: "",
            status: ""
        }
    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            search:{
                [name]: value
            }
        });
    }
    search(){
        let self=this;
        let data={
            companyName: self.state.search.companyName,
            ownerName: self.state.search.ownerName,
            city: self.state.search.city,
            state: self.state.search.state,
            status:self.state.search.status
        }
        axios.post("/api/company/filterCompany",data).then(
            resp=>{
                console.log(resp);
            },
            err=>{console.log(err)}
        )
    }

    render() {
        return (
            <div className="col-12 grid-margin">
                <div className="accordion accordion-solid-header" id="accordion-4" role="tablist">
                    <div className="card">
                        <div className="card-header" role="tab" id="heading-10">
                            <h6 className="mb-0">
                                <a data-toggle="collapse" href="#collapse-10" aria-expanded="true" aria-controls="collapse-10"  >
                                    Search Company
                                </a>
                            </h6>
                        </div>
                        <div id="collapse-10" className="collapse show" role="tabpanel" aria-labelledby="heading-10" data-parent="#accordion-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label >Company Name</label>
                                            <input type="text" className="form-control" name="companyName" value={this.state.search.companyName}
                                                onChange={(e) => this.handleInputChange(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>Owner Name</label>
                                            <input type="text" className="form-control" name="ownerName" value={this.state.search.ownerName}
                                                onChange={(e) => this.handleInputChange(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>City</label>
                                            <input type="text" className="form-control" name="city" value={this.state.search.city}
                                                onChange={(e) => this.handleInputChange(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>State</label>
                                            <input type="text" className="form-control" name="state" value={this.state.search.state}
                                                onChange={(e) => this.handleInputChange(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>Status</label>
                                            <input type="text" className="form-control" name="status" value={this.state.search.status}
                                                onChange={(e) => this.handleInputChange(e)} />
                                        </div>
                                    </div><div className="col-md-2">
                                        <div className="form-group">
                                            <br />
                                            <button className="btn btn-secondary mt-2" onClick={()=>this.search()}>Search</button></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">List companies</h4>
                        <p className="card-description">
                            displaying 1/10
                        </p>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Companies</th>
                                        <th>Owner name</th>
                                        <th>Email</th>
                                        <th>City</th>
                                        <th>State</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Companies</td>
                                        <td>Owner name</td>
                                        <td>Email</td>
                                        <td>City</td>
                                        <td>State</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}