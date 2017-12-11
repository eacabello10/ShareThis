import React, { Component } from "react";
import PropTypes from "prop-types";
import { createContainer } from "meteor/react-meteor-data";

import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./components/Menu.jsx";
import Content from "./components/Content.jsx";

import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loged: false
    };
  }

  loadFbLoginApi() {
    Meteor.call("env.getId", (error, result) => {
      process.env.REACT_APP_APPID = result;
      window.fbAsyncInit = () => {
        FB.init({
          appId: 153016145332580,
          xfbml: false,
          cookie: true,
          version: "v2.11",
          scope: "public_profile,user_friends,publish_actions"
        });
      };
      console.log("fuck");
      console.log("meeen" + result);
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

  testGameAPI() {
    //gameClient.platforms({fields: "*"}).then(response => {console.log(response.body)}).catch(error => {throw error;});
    /*var proxyUrl = "https://cors-anywhere.herokuapp.com/",
    targetUrl = "https://api-2445582011268.apicast.io/platforms/?fields=<name></name>"
    HTTP.get(proxyUrl+targetUrl, {
      headers: {
        "user-key" : "3f33fc8eff221f5bf3df8d6e26704ca3",
        "Accept" : "application/json"
      }}, function(error, response) {
        if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
      });*/
      Meteor.call("games.getGameByName", {name: "zelda"}, (err, res)  => { if (err) {alert(err)} else {console.log("it works!")}});
  }

  statusChangeCallback(response) {
    console.log("statusChangeCallback");
    console.log(response);
    if (response.status === "connected") {
      this.testAPI();
      this.setState({ loged: true });
    } else if (response.status === "not_authorized") {
      console.log("Please log into this app.");
    } else {
      console.log("Please log into this facebook.");
      this.setState({ loged: false });
    }
  }

  testAPI() {
    console.log("Welcome!  Fetching your information.... ");
    FB.api("/me", function(response) {
      console.log(response);
      console.log("Successful login for: " + response.name);
      document.getElementById("status").innerHTML =
        "Thanks for logging in, " + response.name + "!";
    });
  }

  checkLoginState() {
    console.log("meeenod");
    FB.getLoginStatus(response => {
      console.log(response);
      this.statusChangeCallback(response);
    });
  }

  handleFBLogin() {
    console.log("in");
    FB.login(this.checkLoginState.bind(this));
  }

  handleFBLogout() {
    console.log("out");
    FB.logout(this.checkLoginState.bind(this));
  }

  componentWillMount() {
    this.loadFbLoginApi();
  }

  componentDidMount() {}

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
        <button id="testAPIbut" onClick={this.testGameAPI}>Test Game API</button>
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
