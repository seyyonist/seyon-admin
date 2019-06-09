import React, { Component } from 'react';
import axios from 'axios';

const CompanyRow = (props) => {

    return (
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

const StateSelect = props => <select name="state" className="form-control" value={props.selectedValue} onChange={(e) => props.handleStateChange(e)}><option />{props.data.map((st, index) => <option key={index}>{st.state}</option>)}</select>;

const CitySelect = props => <select name="city" className="form-control" value={props.selectedValue} onChange={(e) => props.handleStateChange(e)}><option />{props.data.map((city, index) => <option key={index}>{city}</option>)}</select>;

const StatusSelect = props => <select name="status" className="form-control" value={props.selectedValue} onChange={(e) => props.handleStateChange(e)}><option />{props.data.map((city, index) => <option key={index}>{city}</option>)}</select>;

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
        totalPages: 0,
        pageNumbers: [],
        states: [],
        cities: [],
        statuses: [],
        currentPage:-1
    }

    componentDidMount() {
        this.getCityState();
    }

    getCityState() {
        let self = this;
        axios.get("/city_state.json").then(
            resp => {
                self.setState({
                    states: resp.data.states
                })
            },
            err => {
                console.log(err)
            }
        )
        axios.get("/company_status.json").then(
            resp => {
                self.setState({
                    statuses: resp.data.status
                })
            },
            err => {
                console.log(err)
            }
        )

    }
    clearForm() {
        this.setState({
            search: {
                companyName: "",
                ownerName: "",
                city: "",
                state: "",
                status: ""
            }
        });
    }
    handleCompanyChange(event) {
        const value = event.target.value;
        this.setState({
            search: {
                ownerName: this.state.search.ownerName,
                city: this.state.search.city,
                state: this.state.search.state,
                status: this.state.search.status,
                companyName: value
            }
        });
    }

    handleOwnerChange(event) {
        const value = event.target.value;
        this.setState({
            search: {
                ownerName: value,
                companyName: this.state.search.companyName,

                city: this.state.search.city,
                state: this.state.search.state,
                status: this.state.search.status
            }
        });
    }

    handleCityChange(event) {
        const value = event.target.value;
        this.setState({
            search: {
                city: value,
                companyName: this.state.search.companyName,
                ownerName: this.state.search.ownerName,

                state: this.state.search.state,
                status: this.state.search.status
            }
        });
    }

    handleStatusChange(event) {
        const value = event.target.value;
        this.setState({
            search: {
                companyName: this.state.search.companyName,
                ownerName: this.state.search.ownerName,
                city: this.state.search.city,
                state: this.state.search.state,
                status: value
            }
        });
    }


    handleStateChange(event) {
        const value = event.target.value;
        if (value === "") {
            return
        }
        const cities = this.state.states.filter(st => st.state === value).map(st => st.districts)
        this.setState({
            search: {
                state: value,
                companyName: this.state.search.companyName,
                ownerName: this.state.search.ownerName,
                city: this.state.search.city,
                status: this.state.search.status
            },
            cities: cities[0]
        });
    }

    search(pageNumber=0, pageSize=20) {

        let self = this;
        let data = {
            companyName: this.state.search.companyName,
            ownerName: this.state.search.ownerName,
            city: this.state.search.city,
            state: this.state.search.state,
            status: this.state.search.status
        }

        axios.post("/api/company/filterCompany?pageNumber=".concat(pageNumber).concat("&pageSize=").concat(pageSize), data).then(
            resp => {
                let data = resp.data
                self.setState({
                    companyList: data.content,
                    first: data.first,
                    last: data.last,
                    number: data.number,
                    numberOfElements: data.numberOfElements,
                    size: data.size,
                    totalElements: data.totalElements,
                    totalPages: data.totalPages,
                    currentPage:data.pageable.pageNumber
                })
                self.generatePageNumbers(data.totalPages);
            },
            err => { console.log(err) }
        )

    }

    generatePageNumbers(totalPages) {
        let pageNumbers = Array.from(Array(totalPages), (x, index) => index + 1)
        this.setState({
            pageNumbers: pageNumbers
        })
    }

    render() {
        const isContentSize = this.state.numberOfElements;
        let tableData;
        if (isContentSize >= 0) {
            tableData = this.state.companyList.map(c => <CompanyRow txn={c} key={c.companyId} />);
        }
        let previous;
        if(this.state.currentPage+1>this.state.totalPages){
            previous=<li className="paginate_button page-item previous" ><a tabIndex="0" className="page-link c-pointer" onClick={(e)=>this.search(this.state.currentPage-1)}>Previous</a></li>
        }
        let next;
        if(this.state.currentPage+1<this.state.totalPages){
            next=<li className="paginate_button page-item next" ><a tabIndex="0" className="page-link c-pointer" onClick={(e)=>this.search(this.state.currentPage+1)}>Previous</a></li>
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
                                                onChange={(e) => this.handleCompanyChange(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>Owner Name</label>
                                            <input type="text" className="form-control" name="ownerName" value={this.state.search.ownerName}
                                                onChange={(e) => this.handleOwnerChange(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>State</label>
                                            <StateSelect selectedValue={this.state.search.state} handleStateChange={(e) => this.handleStateChange(e)}
                                                data={this.state.states} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>City</label>
                                            <CitySelect selectedValue={this.state.search.city} handleStateChange={(e) => this.handleCityChange(e)} data={this.state.cities} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>Status</label>
                                            <StatusSelect selectedValue={this.state.search.status} handleStateChange={(e) => this.handleStatusChange(e)} data={this.state.statuses} />
                                        </div>
                                    </div><div className="col-md-2">
                                        <div className="form-group">
                                            <br />
                                            <button className="btn btn-primary mt-2" onClick={() => this.search()}>Search</button>
                                            &nbsp;
                                            <button className="btn btn-inverse-primary mt-2" onClick={() => this.clearForm()}>Clear</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">List companies</h4>
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
                    <div className="card-footer">
                        <ul className="pagination">
                            {previous}
                            {next}
                        </ul>
                        displaying {this.state.currentPage + 1}/{this.state.totalPages}
                    </div>
                </div>
            </div>
        )
    }
}