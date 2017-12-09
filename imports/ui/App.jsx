import React, { Component } from "react";
import PropTypes from "prop-types";
import { createContainer } from "meteor/react-meteor-data";

import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(newProps) {
    
  }

  render() {
    return (
      <div className="app">
        <Navigation />
        <Content />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
};

export default createContainer(() => {
  return {
    
  };
}, App);
