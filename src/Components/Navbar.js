import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm py-3 fixed-top">
        <div className="container-fluid mx-4">
          <a className="navbar-brand fw-bold" href="/">ahmakbar.dev</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to="/" className="nav-link text-decoration-none">
                    Home
                </Link>
                {/* <Link to="/card" className="nav-link text-decoration-none" aria-disabled="true">
                    Card
                </Link> */}
                <Link to="/foods" className="nav-link text-decoration-none" aria-disabled="true">
                    Foods
                </Link>
                <Link to="/inggredient" className="nav-link text-decoration-none" aria-disabled="true">
                    Inggredients
                </Link>
                <Link to="/location" className="nav-link text-decoration-none" aria-disabled="true">
                    Local Culinary
                </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  };

export default Navbar