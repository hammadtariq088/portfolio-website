import React from 'react';


export default function About() {

    return (
        <div className='about'>
            <div className="container">
                <div className="row p-5">
                    <div className="col-12">
                        <h1 className="display-4 text-center text-white">About Us</h1>
                        <hr style={{ color: "#fff" }} />
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center py-3">
                        <img src="/assets/hero-img.png" className='' alt="hero-img" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 py-3">
                        <h2 className='display-5 mb-3 text-white align-self-start '>John Smith</h2>
                        <p className="lead text-left mb-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus, magni repellat reiciendis quae incidunt dolore laborum. Commodi animi ratione pariatur dignissimos repellendus, corporis odit consequatur accusamus voluptatum distinctio. Rem?</p>
                        <div>
                        <div className="progress my-3 ">
                            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width : "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">HTML</div><span className="pro fw-bold">80%</span>
                        </div>
                        <div className="progress my-3">
                            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width : "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">CSS</div><span className="pro fw-bold">70%</span>
                        </div>
                        <div className="progress my-3">
                            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width : "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">JS</div><span className="pro fw-bold">60%</span>
                        </div>
                        <div className="progress my-3">
                            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">REACT JS</div><span className="pro fw-bold">50%</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
