import React, { Component } from 'react';
import axios from 'axios';

export default class SACCode extends Component {

    state = {
        sacList: [],
        selectedSacCode: {
            cgstPercent: "",
            id: "",
            igstPercent: "",
            sacCode: "",
            sacDesc: "",
            sgstPercent: ""
        }
    }

    componentDidMount() {
        this.getSacCodes()
    }

    getSacCodes() {
        let self = this
        axios.get("/api/invoice/sac").then(
            resp => {
                console.log(resp);
                self.setState({
                    sacList: resp.data
                })
            },
            err => {
                alert(err);
            }
        )
    }

    editSac(sac) {
        this.setState({
            selectedSacCode: {
                cgstPercent: sac.cgstPercent,
                id: sac.id,
                igstPercent: sac.igstPercent,
                sacCode: sac.sacCode,
                sacDesc: null == sac.sacDesc ? "" : sac.sacDesc,
                sgstPercent: sac.sgstPercent
            }
        })
    }
    newSac() {
        this.setState({
            selectedSacCode: {
                cgstPercent: "",
                id: "",
                igstPercent: "",
                sacCode: "",
                sacDesc: "",
                sgstPercent: ""
            }
        })
    }

    handleIdChange(event) {
        const value = event.target.value;
        this.setState({
            selectedSacCode: {
                id: value,
                cgstPercent: this.state.selectedSacCode.cgstPercent,
                igstPercent: this.state.selectedSacCode.igstPercent,
                sacCode: this.state.selectedSacCode.sacCode,
                sacDesc: this.state.selectedSacCode.sacDesc,
                sgstPercent: this.state.selectedSacCode.sgstPercent
            }
        });
    }

    handleCgstChange(event) {
        const value = event.target.value;
        this.setState({
            selectedSacCode: {
                cgstPercent: value,
                id: this.state.selectedSacCode.id,
                igstPercent: this.state.selectedSacCode.igstPercent,
                sacCode: this.state.selectedSacCode.sacCode,
                sacDesc: this.state.selectedSacCode.sacDesc,
                sgstPercent: this.state.selectedSacCode.sgstPercent
            }
        });
    }
    handleIgstChange(event) {
        const value = event.target.value;
        this.setState({
            selectedSacCode: {
                igstPercent: value,
                id: this.state.selectedSacCode.id,
                cgstPercent: this.state.selectedSacCode.cgstPercent,
                sacCode: this.state.selectedSacCode.sacCode,
                sacDesc: this.state.selectedSacCode.sacDesc,
                sgstPercent: this.state.selectedSacCode.sgstPercent
            }
        });
    }
    handleSacCodeChange(event) {
        const value = event.target.value;
        this.setState({
            selectedSacCode: {
                sacCode: value,
                id: this.state.selectedSacCode.id,
                cgstPercent: this.state.selectedSacCode.cgstPercent,
                igstPercent: this.state.selectedSacCode.igstPercent,
              
                sacDesc: this.state.selectedSacCode.sacDesc,
                sgstPercent: this.state.selectedSacCode.sgstPercent
            }
        });
    }
    handleSacDescChange(event) {
        const value = event.target.value;
        this.setState({
            selectedSacCode: {
                sacDesc: value,
                id: this.state.selectedSacCode.id,
                cgstPercent: this.state.selectedSacCode.cgstPercent,
                igstPercent: this.state.selectedSacCode.igstPercent,
                sacCode: this.state.selectedSacCode.sacCode,
                sgstPercent: this.state.selectedSacCode.sgstPercent
            }
        });
    }
    handleSgstChange(event) {
        const value = event.target.value;
        this.setState({
            selectedSacCode: {
                sgstPercent: value,
                id: this.state.selectedSacCode.id,
                cgstPercent: this.state.selectedSacCode.cgstPercent,
                igstPercent: this.state.selectedSacCode.igstPercent,
                sacCode: this.state.selectedSacCode.sacCode,
                sacDesc: this.state.selectedSacCode.sacDesc
            }
        });
    }

    handleSubmit(e){
        e.preventDefault();

        let self=this
        let editedSac={
            cgstPercent: this.state.selectedSacCode.cgstPercent,
            id: this.state.selectedSacCode.id,
            igstPercent: this.state.selectedSacCode.igstPercent,
            sacCode: this.state.selectedSacCode.sacCode,
            sacDesc: null == this.state.selectedSacCode.sacDesc ? "" : this.state.selectedSacCode.sacDesc,
            sgstPercent: this.state.selectedSacCode.sgstPercent
        }

        axios.post("/api/invoice/sac",editedSac).then(
            resp=>{
                let sac=resp.data
                self.setState({
                    selectedSacCode: {
                        cgstPercent: sac.cgstPercent,
                        id: sac.id,
                        igstPercent: sac.igstPercent,
                        sacCode: sac.sacCode,
                        sacDesc: sac.sacDesc,
                        sgstPercent: sac.sgstPercent
                    }
                })
                self.getSacCodes();
            },
            err=>{
                console.log(err);
            }
        )
    }
    render() {
        let sacList = this.state.sacList.map(sac => {
            return (
                <tr key={sac.id}>
                    <td>{sac.sacCode}</td>
                    <td>{sac.sacDesc}</td>
                    <td><button className="btn btn-secondary btn-sm" onClick={(e) => this.editSac(sac)}><i className="fas fa-arrow-circle-right"></i></button></td>
                </tr>
            )
        })
        return (
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <h5 className="mb-2 text-titlecase mb-4">SAC Codes : <button className="btn btn-success btn-sm"><i className="fas fa-plus"></i>&nbsp;New</button></h5>
                    <div className="row">
                        <div className="col-md-6 grid-margin ">
                            <div className="card">
                                <div className="card-body">

                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>SAC Code</th>
                                                <th>Description</th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sacList}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-margin">
                            <div className="card">
                                <div className="card-body">
                                    <form className="forms-sample" onSubmit={(e)=>this.handleSubmit(e)}>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">SAC Code</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={this.state.selectedSacCode.sacCode} onChange={(e) => this.handleSacCodeChange(e)} required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">SAC Description</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={this.state.selectedSacCode.sacDesc} onChange={(e) => this.handleSacDescChange(e)} required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">CGST %</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={this.state.selectedSacCode.cgstPercent} onChange={(e) => this.handleCgstChange(e)} required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">SGST %</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={this.state.selectedSacCode.sgstPercent} onChange={(e) => this.handleSgstChange(e)} required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">IGST %</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={this.state.selectedSacCode.igstPercent} onChange={(e) => this.handleIgstChange(e)} required />
                                            </div>
                                        </div>
                                        <input type="hidden" className="form-control" value={this.state.selectedSacCode.id} readOnly/>
                                        <button type="submit" className="btn btn-primary mr-2"><i className="fas fa-save"></i>&nbsp;Save</button>
                                        <button className="btn btn-danger"><i className="fas fa-trash-alt"></i>&nbsp;Delete</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}