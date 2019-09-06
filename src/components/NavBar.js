import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div className="container">
      <Link className="navbar-brand" to="/">Herolo Weather App</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">Favorites</Link>
          </li>

        </ul>
      </div>
    </div>
  </nav>


);

export default NavBar;