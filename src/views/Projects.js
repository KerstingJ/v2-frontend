import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Header from "../components/Header";
import Search from "../components/Projects/ProjectSearch";
import SearchResults from "../components/Projects/ProjectSearchResults";
import Project from "../components/Projects/ProjectDetailed";
import Footer from "../components/Footer";

export default function(props) {
  return (
    <Main>
      <Header />
      <section className="content">
        <Route path="/projects" component={Search} />
        <Route exact path="/projects" component={SearchResults} />
        <Route path="/projects/:key" component={Project} />
      </section>
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;

  .content {
    min-height: 50vh;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
  }
`;
