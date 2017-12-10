import React, { Component } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footInfo">
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Share this game 2017
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
