import React, { Component } from "react";
import PropTypes from "prop-types";
import { createContainer } from "meteor/react-meteor-data";

import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import Menu from "./Menu.jsx";
import Content from "./Content.jsx";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }

  loadFbLoginApi() {
    Meteor.call("env.getId",(error, result)=>{
      process.env.REACT_APP_APPID = result
      window.fbAsyncInit = () => {
        FB.init({
          appId: result,
          xfbml: true,
          cookie: true,
          version: "v2.11"
        });
      };
      console.log("fuck");
      console.log("meeen"+result)
      console.log("Loading fb api");
      // Load the SDK asynchronously
      ((d, s, id) => {
        const element = d.getElementsByTagName(s)[0];
        const fjs = element;
        let js = element;
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = `https://connect.facebook.net/en_US/sdk.js`;
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    });
  }

  statusChangeCallback(response) {
    console.log("statusChangeCallback");
    console.log(response);
    if (response.status === "connected") {
      this.testAPI();
    } else if (response.status === "not_authorized") {
      console.log("Please log into this app.");
    } else {
      console.log("Please log into this facebook.");
    }
  }

  testAPI() {
    console.log("Welcome!  Fetching your information.... ");
    FB.api("/me", function(response) {
      console.log("Successful login for: " + response.name);
      document.getElementById("status").innerHTML =
        "Thanks for logging in, " + response.name + "!";
    });
  }

  checkLoginState() {
    FB.getLoginStatus(
      function(response) {
        this.statusChangeCallback(response);
      }.bind(this)
    );
  }

  handleFBLogin() {
    FB.login(this.checkLoginState);
  }

  componentWillMount() {
    this.loadFbLoginApi();
  }

  render() {
    return (
      <div className="app">
        <Navigation />
        <button
          className="btn-facebook"
          id="btn-social-login"
          onClick={this.handleFBLogin}>
          <span className="fa fa-facebook" /> Sign in with Facebook
        </button>
        <Content />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {};

export default createContainer(() => {
  return {};
}, App);
