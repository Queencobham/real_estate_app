import React, { Component } from "react"
import { Link } from 'react-router-dom'


class HomePage extends Component {

	render() {
		
		return (
			<header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">Real Estate App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/how-it-works">How it Works</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>   

            <Link to="/login" className="ml-3 btn btn-outline-light">Login</Link>
          </div>
          </div>
        </nav>
        <div className="hero-image" style={{width:'100%'}}>
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-md-8 col-lg-8 mx-auto text-center">
              <h1 className="text-light mt-5" style={{fontSize: '3rem'}}>Your Dream Home. A Click Away.</h1>
            </div>
          </div>
        </div>

			</header>
		);
	}
}

export default HomePage;