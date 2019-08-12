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
        <article className="resume">
          <section className="resume-head">
            <h2>Joshua Kersting</h2>
            <h3>231-327-3500 – Kersting.Josh@gmail.com – JoshKersting.com</h3>
          </section>

          <section className="skills">
            <h4>SKILLS</h4>
            <table className="skill-table">
              <tbody>
                <tr>
                  <td>Java</td>
                  <td>Javascript</td>
                  <td>Python</td>
                  <td>React.JS</td>
                  <td>HTML</td>
                  <td>CSS</td>
                </tr>
                <tr>
                  <td>Spring</td>
                  <td>Hibernate</td>
                  <td>Redux.js</td>
                  <td>Less/Sass</td>
                  <td>Git</td>
                  <td>SQL</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="projects">
            <h4>PROJECTS</h4>

            <section className="project-block">
              <h5>
                <span className="left">
                  <a
                    className="strong"
                    href="https://agitated-curran-1cd505.netlify.com"
                  >
                    VOID DUNGEON
                  </a>{" "}
                  - Full Stack Developer
                </span>
                <span className="date right"> 7/2019</span>
              </h5>
              <p className="project-description">
                Multi-user Dungeon with a horror theme, and full messaging
                system
              </p>
              <p>
                Full Stack Dev | Python | JavaScript | React | Redux | Django |
                PostgreSQL | HTML | CSS | Websockets
              </p>
              <ul>
                <li>
                  Learned an inherited codebase and unfamiliar framework to
                  achieve MVP in 4 days
                </li>
                <li>
                  Utilized new data structures and algorithms to create worlds
                  and efficiently render game maps
                </li>
              </ul>
            </section>

            <section className="project-block">
              <h5>
                <span className="left">
                  <a className="Strong" href="https://tiemendocrm.com">
                    TIEME NDO CLIENT DATABASE
                  </a>{" "}
                  - Full Stack Developer
                </span>
                <span className="date right">6/2019</span>
              </h5>
              <p className="project-description">
                Client management application built to track partners, clients,
                leads, loans given, installments paid, and inventory
              </p>
              <p>
                Full Stack Dev | Java | Spring | Javascript | React | Redux |
                Postgresql | REST | HTML | CSS
              </p>
              <ul>
                <li>
                  Worked with a team of 5 developers to turn project spec into
                  user stories and then execute those assignments
                </li>
                <li>
                  Eliminated bugs in complex relational management mappings and
                  refactored to create an easily digested codebase
                </li>
                <li>
                  Pair programmed with team mates to compose user interface and
                  eliminate bugs
                </li>
              </ul>
            </section>

            <section className="project-block">
              <h5>
                <span className="left">
                  <a
                    className="strong"
                    href="https://party-planner-the-app.netlify.com"
                  >
                    PARTY PLANNER APP{" - "}
                  </a>
                  Front-End Developer
                </span>
                <span className="date right">4/2019</span>
              </h5>
              <p className="project-description">
                Application to track to-dos, shopping lists, guests, and other
                aspects of planning a part
              </p>
              <p>
                Front End Dev | JavaScript | React | Redux | HTML | CSS | REST
              </p>
              <ul>
                <li>
                  Applied newly learned tools to effectively manage complex UI
                  states
                </li>
                <li>
                  Collaborated with back-end developers to plan implementation
                  of REST API endpoints
                </li>
              </ul>
            </section>
          </section>

          <section className="experience">
            <h4>WORK EXPERIENCE</h4>

            <section className="experience-block">
              <h5>
                <span className="left">
                  Lambda School - <strong>TEAM LEAD</strong> - Remote
                </span>
                <span className="date right"> 5/2019 - Current</span>
              </h5>
              <ul>
                <li>
                  Oversee 2 groups of 7-10 students, as they manage a fast paced
                  web development curriculum
                </li>
                <li>
                  Work directly with students to debug their code and offer
                  insights to fixes
                </li>
                <li>
                  Host one on one and group meetings to engage students with
                  curriculum and teach valuable development skills
                </li>
              </ul>
            </section>

            <section className="experience-block">
              <h5>
                <span className="left">
                  Haworth, Inc. - <strong>TEAM MEMBER</strong> - Holland, Mi
                </span>
                <span className="date right"> 05/2018 - 02/2019</span>
              </h5>
              <ul>
                <li>
                  Implemented a stream wide communication system creating an
                  hourly agile/lean feedback loop
                </li>
                <li>
                  Standardized processes for paint line increasing productivity,
                  accuracy, and onboarding effectiveness
                </li>
              </ul>
            </section>

            <section className="experience-block">
              <h5>
                <span className="left">
                  Mid South Organizing Committee -
                  <strong> DATA COORDINATOR</strong> - Saint Louis, Mo
                </span>
                <span className="date right"> 2/2014 - 01/2017</span>
              </h5>
              <ul>
                <li>
                  Automated data processes making a 3 day process happen in
                  seconds, increasing productivity across the board
                </li>
                <li>
                  Worked with organizers to develop trainings and increase
                  utilization of data collection processes
                </li>
                <li>
                  Increased organization expansion by 300% by creating
                  actionable reports from field data
                </li>
              </ul>
            </section>
          </section>

          <section className="education">
            <h4>EDUCATION</h4>
            <section className="education-block">
              <h5>
                <span className="left">
                  <strong>LAMBDA SCHOOL</strong> - Computer Science / Full Stack
                  Web Development
                </span>
                <span className="date right"> 2/2019 - Current</span>
              </h5>
              <p>
                Computer Science & Software Engineering Academy that provides an
                immersive (full-time, 40+ hours/week) hands-on curriculum with a
                focus on computer science, software engineering, and web
                development
              </p>
            </section>
          </section>
        </article>
        <a className="download" href=".\images\Joshua_Kersting_Resume.pdf">
          Download
        </a>
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
    max-width: 800px;
    margin: 0 auto;
    padding: 0;

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 1000px) {
      padding: 0 10px;
    }

    .download {
      margin-top: 15px;
      padding: 3px 7px;
      border-radius: 3px;
      color: white;
      background: var(--main-color);
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
      transition: all 0.25s ease;

      &:hover {
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
        text-decoration: none;
      }
    }

    .resume {
      max-width: 800px;

      h2,
      h3,
      h4,
      h5 {
        color: rgb(132, 60, 11);
      }
      h2 {
        font-size: 2.4rem;
        border-bottom: 1px dotted rgb(132, 60, 11);
        padding: 5px 0;
        text-align: center;
        width: 100%;
      }

      h3 {
        font-size: 1.6rem;
        border-bottom: 1px dotted rgb(132, 60, 11);
        padding: 5px;
        text-align: center;
        width: 60%;
        display: inline-block;
        margin: 0 auto;
      }

      h4 {
        font-size: 1.6rem;
        border-bottom: 1px solid rgb(132, 60, 11);
        font-weight: bold;
        margin: 10px 0 5px;
      }

      h5 {
        font-size: 1.2rem;
        border-bottom: 1px dotted rgb(132, 60, 11);
        border-top: 1px dotted rgb(132, 60, 11);

        display: flex;
        justify-content: space-between;
      }

      li {
        list-style-position: inside;
      }

      strong {
        font-weight: bold;
      }

      table {
        width: 90%;
        text-align: center;
        margin: 0 auto;
      }

      ul,
      p {
        padding-left: 2rem;
      }

      .resume-head {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .project-block {
        margin-bottom: 10px;
      }

      .experience-block {
        margin-bottom: 10px;
      }

      .education-block {
        margin-bottom: 10px;
      }
    }
  }
`;
