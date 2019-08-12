import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

export default function(props) {
  return (
    <Footer>
      <article className="footer-content">
        <section className="about">
          <div className="dev-info">
            <h3>Josh Kersting</h3>
            <p>Software Developer</p>
          </div>
          <nav>
            <div className="nav-block">
              <a href="https://github.com/KerstingJ">Github</a>
              <a href="https://twitter.com/JoshOnThaTweet">Twitter</a>
            </div>
            <div className="nav-block">
              <a href="https://www.linkedin.com/in/josh-kersting-86142911b/">
                LinkedIn
              </a>
              <a href="mailto:Kersting.Josh@Gmail.com">Email</a>
            </div>
          </nav>
        </section>
        <section className="brief">
          <p>
            For those who have seen the Earth from space, and for the hundreds
            and perhaps thousands more who will, the experience most certainly
            changes your perspective. The things that we share in our world are
            far more valuable than those which divide us.
          </p>
        </section>
      </article>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  border-top: 1px solid lightgray;
  padding: 15px;

  .footer-content {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    p {
      font-size: 2rem;
    }
  }

  .about {
    width: 35%;

    @media (max-width: 600px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    nav {
      display: flex;
      margin-top: 15px;

      @media (max-width: 600px) {
        margin: 0;
      }

      .nav-block {
        &:last-child {
          margin-left: 30px;
        }
        a {
          display: block;
          font-size: 2rem;
          color: var(--main-color);
          transition: all 0.35s ease;

          &:hover {
            color: black;
          }
        }
      }
    }
  }
  .brief {
    width: 60%;
    max-width: 500px;
    line-height: 1.35;

    @media (max-width: 600px) {
      margin-top: 20px;

      max-width: 600px;
      width: 100%;
    }
  }
`;
