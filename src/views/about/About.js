/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
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
                <strong>Software Engineer</strong>
              </p>
              <p>
                <strong>Location: </strong>Traverse City, Mi
              </p>
              <p>
                <strong>Languages: </strong>Javascript, Python, Java, HTML, CSS,
                SQL, noSQL
              </p>
              <p>
                <strong>Libraries/Frameworks: </strong>
                React.JS, Redux.js, Spring, Hibernate, Thunks, Firebase, Axios, Postgresql,
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
              drive organizational goals.
            </p>
            <p>
              After moving back home to be closer to family I joined Lambda School, 
              where I not only completed their curriculum in Computer Science and 
              Web Development in 2019, but was also a Team Lead mentoring
              and teaching students working their way through the curriculum.
            </p>
            <p>
              In October I joined SampleServe as a Frontend Engineer. There I developed React 
              and React Native applications and worked with product management to define 
              project needs and deliver an excellent product.
              I also championed creating a code base that could scale by focusing on 
              separation of data and presentation layers and creating reusable atomic elements.
            </p>
          </section>
        </article>
        <article className="values">
          <section className="value-block">
            <h3>Values</h3>
            <p>We are what we believe. These are my most important beliefs.</p>
          </section>
          <section className="value-content">
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
          </section>
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
      color: var(--main-color);
    }

    h4 {
      color: var(--main-color);
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
        color: var(--main-color);
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
      p {
        margin-bottom: 15px;
      }
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
          color: var(--main-color);
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
