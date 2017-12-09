import React from "react";
import {Meteor} from "meteor/meteor";
import {render} from "react-dom";

//Import del imports/ui
import App from "../imports/ui/App.jsx";

//Config de users
import '../imports/startup/accounts-config.js';

Meteor.startup(()=> {
  render(<App />, document.getElementById("render-target"));
});