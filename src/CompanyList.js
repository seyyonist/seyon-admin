import React, { Component } from 'react';
import axios from 'axios';

const CompanyRow=(props)=>{

    return(
        <tr>
            <td>{props.txn.companyName}</td>
            <td>{props.txn.ownerName}</td>
            <td>{props.txn.primaryEmail}</td>
            <td>{props.txn.city}</td>
            <td>{props.txn.state}</td>
            <td>{props.txn.status}</td>
        </tr>
    )
}

export default class CompanyList extends Component {

    state = {
        companyList: [],
        search: {
            companyName: "",
            ownerName: "",
            city: "",
            state: "",
            status: ""
        },
        first: true,
        last: true,
        number: 0,
        numberOfElements: 7,
        size: 20,
        totalElements: 7,
        totalPages: 1
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
        axios.post("/api/company/filterCompany?pageNumber=0&pageSize=20",data).then(
            resp=>{
                console.log(resp);
                let data=resp.data
                self.setState({
                    companyList:data.content,
                    first: data.first,
                    last: data.last,
                    number: data.number,
                    numberOfElements: data.numberOfElements,
                    size: data.size,
                    totalElements: data.totalElements,
                    totalPages: data.totalPages
                })
            },
            err=>{console.log(err)}
        )
        
    }



    render() {
        const isContentSize = this.state.numberOfElements;
        let tableData;
        if(isContentSize>=0){
            tableData=this.state.companyList.map(c=><CompanyRow txn={c} key={c.companyId}/>);
        }
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
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}