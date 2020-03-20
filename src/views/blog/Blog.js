import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import BlogContainer from "./posts/test"

export default function Blog() {
  return (
    <Main>
      <Header />
      <section className="content">
        <h1>Coming Soon...</h1>
        {/* <Route path="/projects" component={Search} />
        <Route exact path="/projects" component={SearchResults} />
        <Route path="/projects/:key" component={Project} /> */}
        <BlogContainer />
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

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
