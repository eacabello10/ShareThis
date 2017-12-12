import React, { Component } from "react";
import PropTypes from "prop-types";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Exchange this game!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              { this.props.isLoged ?
               <li className="nav-item">
               Bienvenido <a className="nav-link" href="perfil"><span id="status"/></a>
             </li> : ""
              }
              {this.props.isLoged ? <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.props.logout}>Logout</a>
              </li>:<li className="nav-item">
                <a className="nav-link" href="#" onClick={this.props.login}>Login</a>
              </li>} 
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
};

export default Navigation;
