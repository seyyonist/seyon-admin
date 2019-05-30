import React from 'react';

export default function CompanyList() {
    return (
        <div class="col-12 grid-margin">
            <div class="card">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card-body">
                            <h4 class="card-title">Single color buttons</h4>
                            <p class="card-description">Add class <code>.btn-&lt;color&lg;</code> for buttons in theme colors</p>
                            <div class="template-demo">
                                <button type="button" class="btn btn-primary">Primary</button>
                                <button type="button" class="btn btn-secondary">Secondary</button>
                                <button type="button" class="btn btn-success">Success</button>
                                <button type="button" class="btn btn-danger">Danger</button>
                                <button type="button" class="btn btn-warning">Warning</button>
                                <button type="button" class="btn btn-info">Info</button>
                                <button type="button" class="btn btn-light">Light</button>
                                <button type="button" class="btn btn-dark">Dark</button>
                                <button type="button" class="btn btn-link">Link</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h4 class="card-title">Rounded buttons</h4>
                            <p class="card-description">Add class <code>.btn-rounded</code></p>
                            <div class="template-demo">
                                <button type="button" class="btn btn-primary btn-rounded btn-fw">Primary</button>
                                <button type="button" class="btn btn-secondary btn-rounded btn-fw">Secondary</button>
                                <button type="button" class="btn btn-success btn-rounded btn-fw">Success</button>
                                <button type="button" class="btn btn-danger btn-rounded btn-fw">Danger</button>
                                <button type="button" class="btn btn-warning btn-rounded btn-fw">Warning</button>
                                <button type="button" class="btn btn-info btn-rounded btn-fw">Info</button>
                                <button type="button" class="btn btn-light btn-rounded btn-fw">Light</button>
                                <button type="button" class="btn btn-dark btn-rounded btn-fw">Dark</button>
                                <button type="button" class="btn btn-link btn-rounded btn-fw">Link</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}