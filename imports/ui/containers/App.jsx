import React, { Component } from "react";
import PropTypes from "prop-types";
import { createContainer } from "meteor/react-meteor-data";

import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import Menu from "../components/Menu.jsx";
import Content from "../components/Content.jsx";

import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loged: false,
      "topGames": [],
      user : {},
      friends : []
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
    Meteor.call("games.getGameByName", {name: "zelda"}, 
        (err, res)  => { 
          if (err) {
            alert(err)
          } else 
            {
              console.log(res.body[0].cover.url)
              this.setState({
                "topGames": res.body
              });
              }
            }
        );
  }

  statusChangeCallback(response) {
    if (response.status === "connected") {
      this.getUser();
      this.setState({ loged: true });
      this.handleFBGetFriends()
    } else if (response.status === "not_authorized") {
      console.log("Please log into this app.");
    } else {
      console.log("Please log into this facebook.");
      this.setState({ loged: false });
    }
  }

  getUser() {
    FB.api("/me",(response)=> {
      this.setState({user : response})
      document.getElementById("status").innerHTML =
        "Thanks for logging in, " + response.name + "!";
    });
  }

  checkLoginState() {
    FB.getLoginStatus(response => {
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

  handleFBGetFriends(){
    FB.api("/me/friends", (response)=>{
      console.log(response)
    });
  }

  componentWillMount() {
    this.loadFbLoginApi();
    this.testGameAPI();
  }

  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <Navigation
          login={this.handleFBLogin.bind(this)}
          logout={this.handleFBLogout.bind(this)}
          isLoged={this.state.loged}
        />
        <p id="status" />
        <button id="testAPIbut" onClick={this.testGameAPI}>Test Game API</button>
        <Content topGames = {this.state.topGames} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {};

export default createContainer(() => {
  return {};
}, App);
