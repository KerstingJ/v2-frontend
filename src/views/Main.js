import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function(props) {
  return (
    <Main>
      <Header />
      <section className="content">
        <div className="con-block carousel">
          This section is going to be a carousel to allow you to see a few
          highlighted projects
        </div>
        <div className="con-block blog-spotlight">
          This section is going to be a scrollable list of some recent blog
          posts
        </div>
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
    padding: 20px 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
