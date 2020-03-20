import React, { useEffect /* useState */ } from "react";
import { Route } from "react-router-dom";

// import PrivateRoute from './components/PrivateRouter';
import code from "./utils/egg";
import Main from "./views/main/Main";
import About from "./views/about/About";
import Projects from "./views/project/Projects";
import Blog from "./views/blog/Blog";

export default function App() {
  // const [cute, setCute] = useState(false);

  useEffect(() => {
    const secret = code();
    const corn = code(() => {
      window.location.href = "https://www.duranirving.com";
    }, ["c", "o", "r", "n", "Enter"]);

    window.addEventListener("keydown", secret);
    window.addEventListener("keydown", corn);

    return () => {
      window.removeEventListener("keydown", secret);
      window.removeEventListener("keydown", corn);
    };
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={Main} />
      <Route path="/about" component={About} />

      {/* subpaths are located in the projects and Blogs components */}
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
    </div>
  );
}
