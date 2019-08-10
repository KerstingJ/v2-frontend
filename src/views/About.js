import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function(props) {
  return (
    <Main>
      <Header />
      <section className="content">
        <article className="about">
          <section className="details">
            <img
              className="profile-pic"
              src="./images/me.jpg"
              alt="Handsome And Talented Software Developer"
            />
            <section className="details-content">
              <h2>Josh Kersting</h2>
              <p>
                <strong>Software Developer</strong>
              </p>
              <p>
                <strong>Location: </strong>Muskegon, Mi
              </p>
              <p>
                <strong>Languages: </strong>Java, Javascript, Python, HTML, CSS,
                SQL, noSQL
              </p>
              <p>
                <strong>Libraries/Frameworks: </strong>Spring, Hibernate,
                React.JS, Redux.js, Thunks, Firebase, Axios, Postgresql,
                Styled-components, reactstrap, canvas, and more...
              </p>
            </section>
          </section>
          <section className="brief">
            <h3>About</h3>
            <p>
              I am a Software Developer, and Father. Born in Muskegon, Mi, I
              spent most of my professional life traveling the Mid-South and
              Mid-west helping grass-roots organizations manage and use data to
              drive organizational goals. After moving back home to be closer to
              family I started working in manufacturing, where I was able to
              apply my skills and work with a cross functional team to improve
              the processes and systems used in my work area. My passion for
              problem solving and Tech lead me to join Lambda School in Febuary
              of 2019, where I now work as a Team Lead, and will shortly finish
              a course on Computer Science with Web Development focus.
            </p>
          </section>
        </article>
        <article className="values">
          <section className="value-block">
            <h3>Values</h3>
            <p>We are, what we believe. These are my most important beliefs.</p>
          </section>
          <div className="value-content">
            <p>
              <strong>Inclusivity </strong>
              The amazing thing about people are their unique and powerful
              points of view. Einstein once said. "We can not solve our problems
              with the same level of thinking that created them" Nowhere is that
              more clear than on a diverse and inclusive team.
            </p>
            <p>
              <strong>Safety </strong>
              One of the most fundamental human needs is that of safety. When
              all of our resources are spent on building up our walls and
              defences none of them are spent growing past our barriers.
              providing safety to the people around you not only allows them to
              flourish but also allows you to grow with them.
            </p>
            <p>
              <strong>Community </strong>I believe that each one of us, has an
              incredible intrinsic value. One of the most important things we
              can do for each other is acknowledging that value. When one of us
              is lifted that cascades through each of us and we're all better
              for it.
            </p>
          </div>
        </article>
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

    h3 {
      color: orange;
    }

    h4 {
      color: orange;
      font-size: 2rem;
    }

    p {
      font-size: 2rem;
    }

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

    .details {
      display: flex;
      justify-content: space-between;
      padding: 15px;

      strong {
        color: orange;
        font-weight: bold;
      }

      @media (max-width: 500px) {
        flex-direction: column;
      }
    }

    .profile-pic {
      display: block;
      max-width: 500px;
      max-height: 500px;
      width: 48%;
      border-radius: 3px;
      object-fit: cover;
      object-position: bottom right;

      margin-right: 15px;

      @media (max-width: 500px) {
        width: 100%;
      }
    }

    .brief {
      padding: 15px;
    }

    .details-content {
      max-width: 500px;
      width: 49%;

      @media (max-width: 500px) {
        width: 100%;
      }
    }

    .values {
      padding: 15px;

      p {
        margin-bottom: 15px;

        strong {
          color: orange;
          font-size: 2rem;
          font-weight: bold;
        }
      }
    }

    .value-content {
      @media (max-width: 800px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

      @media (max-width: 600px) {
        display: block;
      }

      p {
        @media (max-width: 800px) {
          width: 31%;
        }

        @media (max-width: 600px) {
          width: 98%;
        }
      }
    }
  }
`;
