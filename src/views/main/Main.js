import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import ProjectSpotlight from "./ProjectSpotlight";
import BlogSpotlight from "./BlogSpotlight";

export default function _Main() {
  return (
    <Main>
      <Header />
      <section className="content">
        <div className="con-block carousel">
          <ProjectSpotlight />
        </div>
        <div className="con-block blog-spotlight">
          <BlogSpotlight />
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
    padding: 20px 0;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 1000px) {
      padding: 20px 10px;
    }

    @media (max-width: 800px) {
      flex-direction: column;
    }

    .con-block {
      width: 49%;

      @media (max-width: 800px) {
        width: 99%;
      }
    }
  }
`;
