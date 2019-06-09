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

const StateSelect = props => <select name="state" className="form-control" value={props.selectedValue}  onChange={(e) => props.handleStateChange(e)}><option/>{props.data.map((st,index) => <option key={index}>{st.state}</option>)}</select>;

const CitySelect = props => <select name="city" className="form-control" value={props.selectedValue}  onChange={(e) => props.handleStateChange(e)}><option/>{props.data.map((city,index) => <option key={index}>{city}</option>)}</select>;

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
        totalPages: 1,
        pageNumbers: [],
        states:[],
        cities:[]
    }

    componentDidMount(){
        this.getCityState();
    }

    getCityState(){
        let self = this;
        axios.get("/city_state.json").then(
            resp=>{
                self.setState({
                    states:resp.data.states
                })
            },
            err=>{
                console.log(err)
            }
        )

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            search: {
                [name]: value
            }
        });
    }


    handleStateChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(value===""){
            return
        }
        const cities=this.state.states.filter(st=>st.state===value).map(st=>st.districts)
        this.setState({
            search: {
                state: value
            },
            cities:cities[0]
        });
    }

    search(pageNumber, pageSize) {
        let self = this;
        let data = {
            companyName: this.state.search.companyName,
            ownerName: this.state.search.ownerName,
            city: this.state.search.city,
            state: this.state.search.state,
            status: this.state.search.status
        }

        console.log(data);
        axios.post("/api/company/filterCompany?pageNumber=0&pageSize=1", data).then(
            resp => {
                console.log(resp);
                let data = resp.data
                self.setState({
                    companyList: data.content,
                    first: data.first,
                    last: data.last,
                    number: data.number,
                    numberOfElements: data.numberOfElements,
                    size: data.size,
                    totalElements: data.totalElements,
                    totalPages: data.totalPages
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

        const statesLoaded=this.state.states.length;
        let stateData;
        if(statesLoaded>0){
            stateData= <StateSelect selectedValue={this.state.search.state} handleStateChange={(e)=>this.handleStateChange(e)} data={this.state.states}/>
        }

        const cityLoaded=this.state.cities.length;
        let cityData;
        if(cityLoaded>0){
            cityData= <CitySelect selectedValue={this.state.search.city} handleStateChange={(e)=>this.handleInputChange(e)} data={this.state.cities}/>
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
                                            <label>State</label>
                                            {stateData}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>City</label>
                                            {cityData}
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <label>Status</label>
                                             <select id="status" name="status" className="form-control" value={this.state.search.status}  onChange={(e) => this.handleInputChange(e)} >
                                                 <option/>
                                                <option value="Artificial_Juridical_person">Artificial Juridical person</option>
                                                <option value="Association_of_persons">Association of persons</option>
                                                <option value="Body_of_Individuals">Body of Individuals</option>
                                                <option value="Company">Company</option>
                                                <option value="Firm">Firm</option>
                                                <option value="Government">Government</option>
                                                <option value="Hindu_Undivided_family">Hindu Undivided family</option>
                                                <option value="Individual">Individual</option>
                                                <option value="Limited_Liability_partnership">Limited Liability partnership</option>
                                                <option value="Local_Authority">Local Authority</option>
                                                <option value="Trust">Trust</option>
                                            </select>
                                        </div>
                                    </div><div className="col-md-2">
                                        <div className="form-group">
                                            <br />
                                            <button className="btn btn-secondary mt-2" onClick={() => this.search()}>Search</button></div>
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
                    <div className="card-footer">
                        <ul className="pagination">
                            <li className="paginate_button page-item previous" id="order-listing_previous">
                                <a href="#" aria-controls="order-listing" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                            </li>
                            {
                                this.state.pageNumbers.map((no,index) => {
                                    return (
                                        <li className="paginate_button page-item active" key={index}>
                                            <a href="#" aria-controls="order-listing" key={index} data-dt-idx="1" tabIndex="0" className="page-link">{no}</a>
                                        </li>
                                    )
                                }
                                )
                            }
                            <li className="paginate_button page-item next" id="order-listing_next">
                                <a href="#" aria-controls="order-listing" data-dt-idx="2" tabIndex="0" className="page-link">Next</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}