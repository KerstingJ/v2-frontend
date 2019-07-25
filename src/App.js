import React from "react";
import { Route } from "react-router-dom"

// import PrivateRoute from './components/PrivateRouter';
import Main from "./views/Main"

export default function(props) {
  return (<div className="App">
    <Route to="/" component={Main}
  </div>);
}
