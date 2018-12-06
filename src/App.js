import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/userprofile";
import SignIn from "./components/SignIn";
import Property from "./components/property";
import Rental from "./components/rental";

import SignOut from "./components/SignOut";

const checkAuth = () => {
  const token = localStorage.getItem("session_token");
  if (!token) {
    return false;
  }
  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Redirect to={{ pathname: "/SignOut" }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/SignOut" component={SignOut} />
      <AuthRoute path="/signin" component={SignIn} />
      <Route path="/userprofile" component={UserProfile} />
      <Route path="/property" component={Property} />
      <Route path="/uploadimages" component={UserProfile} />
      <Route path="/view" component={UserProfile} />
      <Route path="/rental" component={Rental} />
    </div>
  </BrowserRouter>
);
