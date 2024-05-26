import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success justify-content-center ">
      <div className="container-fluid">
      <div className="navbar-header mx-auto">
          <Link className="navbar-brand fw-bold fs-3 " to="/">
            Simple React App 
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="btn btn-outline-light" to="/adduser">
        <i className="fas fa-add" aria-hidden="true"></i>
                      ADD
        </Link>
      </div>
    </nav>

  </div>
  )
}

export default Navbar