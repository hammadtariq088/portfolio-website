import React from 'react';
import DATA from "./Data";

export default function service() {
    const cards = ({ id, img, title, desc }) => {
        return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6" key={id}>
                <div className="card">
                    <img src={img} className="card-img-top mx-auto p-3" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{title}</h5>
                        <p className="card-text text-center">{desc}</p>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <div className='service'>
            <div className="container">
                <div className="row p-5">
                    <div className="col-12">
                        <h1 className="display-4 text-center text-white">Services</h1>
                        <hr style={{ color: "#fff" }} />
                    </div>
                </div>
                <div className="row p-5 g-3">
                    {DATA.map(cards)}
                </div>
            </div>
        </div>
    )
}
