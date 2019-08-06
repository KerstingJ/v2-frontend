import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function(props) {
  return (
    <Main>
      <Header />
      {/* <section className="content">
        <iframe
          src="./images/JoshKerstingResume20190804.pdf"
          width="100%"
          height="500px"
          title="resume"
        >
          <p>
            Your web browser doesn't have a PDF plugin. Instead you can{" "}
            <a href="./images/JoshKerstingResume20190804.pdf">
              click here to download the PDF file.
            </a>
          </p>
        </iframe> */}
      <section className="content">
        <object
          className="resume"
          data="./resume.html" /* "./images/JoshKerstingResume20190804.pdf" */
          type="text/html"
          width="100%"
          height="100%"
        >
          You are not able to view my resume inline, please download a copy.
        </object>
        <a href="./images/JoshKerstingResume20190804.pdf">Download</a>
      </section>
      {/* </section> */}
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
    padding: 0;

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;

    a {
      display: inline-block;
      border: 1px solid orange;
      background: orange;
      color: white;
      font-weight: bold;
      border-radius: 3px;
      padding: 4px 7px;
      margin: 10px 0;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
      transition: all 0.25s ease;

      &:hover {
        text-decoration: none;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }
    }

    @media (max-width: 1000px) {
      padding: 0 10px;
    }

    @media (max-width: 800px) {
      flex-direction: column;
    }

    iframe {
      width: 100%;
      height: 100vh;
      margin: 0px;
      padding: 0px;
    }

    .resume {
      width: 100%;
      height: 50vh;
      margin: 0;
      padding: 0;
    }

    .con-block {
      width: 49%;

      @media (max-width: 800px) {
        width: 99%;
      }
    }
  }
`;
