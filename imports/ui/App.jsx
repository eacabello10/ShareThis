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
  }

  loadSdkAsynchronously() {
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = `https://connect.facebook.net/en_US/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  setFbAsyncInit() {
    const { appId, xfbml, cookie, version, autoLoad } = this.props;
    window.fbAsyncInit = () => {
      window.FB.init({
        appId : "hol",
        xfbml : true,
        cookie : true
      });
      this.setStateIfMounted({ isSdkLoaded: true });
      if (autoLoad || window.location.search.includes('facebookdirect')) {
        window.FB.getLoginStatus(this.checkLoginAfterRefresh);
      }
    };
  }

  componentDidMount() {
    console.log(process.env.APPID);
    loadSdkAsynchronously()
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
