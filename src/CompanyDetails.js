import React, { Component } from 'react';
import axios from 'axios';

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
        let companyByIdUrl = "/api/company/getCompanyById?companyId=".concat(companyId)
        axios.get(companyByIdUrl).then(
            resp => {
                let company = resp.data
                self.setState({
                    company: company
                })
            }
        )
    }

    render() {
        return (
            <>
                <h2>{this.state.company.companyName}</h2>
                <div className="row">
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 class="card-title"><span className="roundNumberIcon">1</span>Company</h5>
                                <div className="">
                                    <label className="">Company Name</label>
                                    <p>{this.state.company.companyName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 class="card-title"><span className="roundNumberIcon">2</span>Owner</h5>
                                <h6 class="card-subtitle mb-2 text-muted"></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 class="card-title"><span className="roundNumberIcon bg-info">0</span>Operations</h5>
                                <h6 class="card-subtitle mb-2 text-muted"></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 class="card-title"><span className="roundNumberIcon">3</span>Bank</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h5 class="card-title"><span className="roundNumberIcon">4</span>Others</h5>
                                <h6 class="card-subtitle mb-2 text-muted"></h6>
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