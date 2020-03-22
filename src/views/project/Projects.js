import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import ProjectList from "./ProjectList";
import Project from "./ProjectDetailed";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Projects() {
  return (
    <Main>
      <Header />
      <section className="content">
        <Route exact path="/projects" component={ProjectList} />
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
