import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light p-3" style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                            <Link className="btn btn-outline-dark border border-dark rounded-pill" to="/contact">HIRE ME</Link>
                    </form>
                </div>
            </div>
        </nav>

    );
}