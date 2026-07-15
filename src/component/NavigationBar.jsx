import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg galaxy-navbar">
        <div className="container-fluid">

          <Link className="navbar-brand galaxy-brand" to="/">
            🚀 Space-Camp
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">

              <Link className="nav-link galaxy-link" to="/">
                Camp Registration
              </Link>

              <Link className="nav-link galaxy-link" to="/vi">
                View Registration
              </Link>

            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default NavigationBar