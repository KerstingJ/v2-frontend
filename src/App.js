import React from "react";
import { Route } from "react-router-dom";

// import PrivateRoute from './components/PrivateRouter';
import Main from "./views/Main";
import About from "./views/About";
import Resume from "./views/Resume";

export default function(props) {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={() => <h1>Coming Soon...</h1>} />
      <Route path="/blog" component={() => <h1>Coming Soon...</h1>} />
      <Route path="/resume" component={Resume} />
    </div>
  );
}
