import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';

//Import del imports/ui
import App from "../imports/ui/containers/App.jsx";

Meteor.startup(() => {
  $('html').attr('lang', 'es');
  render((
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  ), document.getElementById("render-target"));
});