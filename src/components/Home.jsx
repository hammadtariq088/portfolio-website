import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';

export default function Home() {
  return (
      <>
    <div className='home-hero'>
        <div className="container">
            <div className="row p-5">
                <div className="col-12 d-flex justify-content-center align-items-center flex-column py-3">
                        <h1 className='display-4 mb-3 text-white'>I'm Web Developer</h1>
                        <h2 className='display-5 mb-3 text-white'>John Smith</h2>
                        <p className="lead text-left mb-5 text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus, magni repellat reiciendis quae incidunt dolore laborum. Commodi animi ratione pariatur dignissimos repellendus, corporis odit consequatur accusamus voluptatum distinctio. Rem?</p>
                    <div className="d-flex">
                            <Link className="btn btn-outline-light border border-light rounded-pill" to="/contact">GET STARTED</Link>
                            <Link className="btn btn-outline-primary border border-primary rounded-pill ms-3" to="/about">MORE ABOUT ME</Link>
                    </div>        
                </div>
            </div>
        </div>
    </div>
    <About/>
    <Services/>
    <Contact/>
    </>
  )
}
