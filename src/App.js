import React from "react";
import { Route } from "react-router-dom";

// import PrivateRoute from './components/PrivateRouter';
import Main from "./views/Main";

export default function(props) {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route path="/about" component={() => <h1>Coming Soon...</h1>} />
      <Route path="/projects" component={() => <h1>Coming Soon...</h1>} />
      <Route path="/blog" component={() => <h1>Coming Soon...</h1>} />
    </div>
  );
}
