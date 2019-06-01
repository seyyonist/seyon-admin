import React from 'react';

export default function CompanyList() {
    return (
        <div className="col-12 grid-margin">
            <div className="accordion accordion-solid-header" id="accordion-4" role="tablist">
                <div className="card">
                    <div className="card-header" role="tab" id="heading-10">
                        <h6 className="mb-0">
                            <a data-toggle="collapse" href="#collapse-10" aria-expanded="true" aria-controls="collapse-10" className="">
                                Filter
                            </a>
                        </h6>
                    </div>
                    <div id="collapse-10" className="collapse show" role="tabpanel" aria-labelledby="heading-10" data-parent="#accordion-4">
                        <div className="card-body">
                            <div className="row">
                                Form for search
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Result</h4>
                    <p className="card-description">
                       displaying 1/10
                    </p>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        User
                          </th>
                                    <th>
                                        First name
                          </th>
                                    <th>
                                        Progress
                          </th>
                                    <th>
                                        Amount
                          </th>
                                    <th>
                                        Deadline
                          </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-1">
                                        <img src="../../../../images/faces/face1.jpg" alt="image" />
                                    </td>
                                    <td>
                                        Herman Beck
                          </td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>
                                        $ 77.99
                          </td>
                                    <td>
                                        May 15, 2015
                          </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}