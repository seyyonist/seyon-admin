import React, { Component } from 'react';
import axios from 'axios';
import { API_ROOT } from '../configuration/appConfig';
export default class CompanyDetails extends Component {

    state = {
        company: {},
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params.companyId);
        this.getCompany(params.companyId);
    }

    getCompany(companyId) {
        let self = this
        let companyByIdUrl = API_ROOT.concat("/su/api/company/getCompanyById?companyId=").concat(companyId)
        axios.get(companyByIdUrl).then(
            resp => {
                let company = resp.data
                self.setState({
                    company: company
                })
            }
        )
    }

    activate(companyId){
        let self = this
        let activationUrl = API_ROOT.concat("/su/api/company/activate?companyId=").concat(companyId)
        axios.put(activationUrl).then(
            resp => {
                let company = resp.data
                self.setState({
                    company: company
                })
            }
        )
    }

    deActivate(companyId){
        let self = this
        let activationUrl = API_ROOT.concat("/su/api/company/deActivate?companyId=").concat(companyId)
        axios.put(activationUrl).then(
            resp => {
                let company = resp.data
                self.setState({
                    company: company
                })
            }
        )
    }

    render() {
        let active;
        if(!this.state.company.active){
            active=<button className="btn btn-success mr-1" onClick={()=>this.activate(this.state.company.companyId)}>Activate</button>
        }else{
            active=<button className="btn btn-danger ml-1" onClick={()=>this.deActivate(this.state.company.companyId)}>De-Activate</button>
        }
        return (
            <>
                <h2>{this.state.company.companyName}</h2>
                <div className="row">
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 class="card-title"><span className="roundNumberIcon">1</span>Company</h5>
                                <div className="form-fields">
                                    <label className="form-label">Company Name:</label>
                                    <div className="form-value">{this.state.company.companyName}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Address Line 1:</label>
                                    <div className="form-value">{this.state.company.addressLine1}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Address Line 2:</label>
                                    <div className="form-value">{this.state.company.addressLine2}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">City:</label>
                                    <div className="form-value">{this.state.company.city}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">State:</label>
                                    <div className="form-value">{this.state.company.state}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Pincode:</label>
                                    <div className="form-value">{this.state.company.pinCode}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 class="card-title"><span className="roundNumberIcon">2</span>Owner</h5>
                                <div className="form-fields">
                                    <label className="form-label">Owner name:</label>
                                    <div className="form-value">{this.state.company.city}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Primary Email:</label>
                                    <div className="form-value">{this.state.company.primaryEmail}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Secondary Email:</label>
                                    <div className="form-value">{this.state.company.secondaryEmail}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Primary Phone:</label>
                                    <div className="form-value">{this.state.company.phonePrimary}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Secondary Phone:</label>
                                    <div className="form-value">{this.state.company.phoneSecondary}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Fax:</label>
                                    <div className="form-value">{this.state.company.faxNo}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 grid-margin flex-column">
                        <div className="row">
                            <div className="col-md-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 class="card-title"><span className="roundNumberIcon bg-info">0</span>Operations</h5>
                                        {active}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 class="card-title"><span className="roundNumberIcon">3</span>Bank</h5>
                                <div className="form-fields">
                                    <label className="form-label">Bank name:</label>
                                    <div className="form-value">{this.state.company.bankName}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">IFSC Code:</label>
                                    <div className="form-value">{this.state.company.branchIFSCCode}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Branch:</label>
                                    <div className="form-value">{this.state.company.branch}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Account Number:</label>
                                    <div className="form-value">{this.state.company.accountNo}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Account Name:</label>
                                    <div className="form-value">{this.state.company.accountName}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Account Type:</label>
                                    <div className="form-value">{this.state.company.accountType}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 class="card-title"><span className="roundNumberIcon">4</span>Others</h5>
                                <div className="form-fields">
                                    <label className="form-label">Tan Number:</label>
                                    <div className="form-value">{this.state.company.tanNo}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">GST Number:</label>
                                    <div className="form-value">{this.state.company.gstNo}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">PAN:</label>
                                    <div className="form-value">{this.state.company.panNo}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Service TAX Reg Number</label>
                                    <div className="form-value">{this.state.company.serviceTaxRegNo}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Accounting Type:</label>
                                    <div className="form-value">{this.state.company.accountingType}</div>
                                </div>
                                <div className="form-fields">
                                    <label className="form-label">Swift Code:</label>
                                    <div className="form-value">{this.state.company.swiftCode}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                    Details like, number of clients,
                    Number of performa invoice,
                    Number of invoice,          
                    etc.,
                </div>
            </>
        )
    }

}

/*
companyId	1
companyName	Company 1
ownerName	vijaykarthik nagarajan
addressLine1	Company1
addressLine2	Address 1
city	Chennai
state	TN
pinCode	600092
phonePrimary	9879879876
phoneSecondary
faxNo
tanNo
gstNo
panNo
serviceTaxRegNo
accountingType
logoImg
signatureImg	null
primaryEmail	nvijaykarthik@gmail.com
secondaryEmail
bankName
branch
branchIFSCCode
accountNo
accountName
accountType
swiftCode
termsConditions	null
title	null
status	Body_of_Individuals
startDate	null
endDate	null
*/