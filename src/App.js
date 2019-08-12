import React, { useEffect /* useState */ } from "react";
import { Route } from "react-router-dom";

// import PrivateRoute from './components/PrivateRouter';
import code from "./utils/egg";
import Main from "./views/Main";
import About from "./views/About";
import Projects from "./views/Projects";
import Blog from "./views/Blog";
import Resume from "./views/Resume";

export default function(props) {
  // const [cute, setCute] = useState(false);

  useEffect(() => {
    const secret = code();

    window.addEventListener("keydown", secret);

    return () => {
      window.removeEventListener("keydown", secret);
    };
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />

      {/* subpaths are located in the projects and Blogs components */}
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />

      <Route path="/resume" component={Resume} />
    </div>
  );
}
