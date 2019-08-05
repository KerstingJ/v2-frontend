import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function(props) {
  return (
    <Header>
      <article>
        <a className="h1" href="/">
          <h1>Josh Kersting</h1>
        </a>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects*</NavLink>
          <NavLink to="/blog">Blog*</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </nav>
      </article>
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 15px;

  article {
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    a.h1 {
      color: inherit;
      font-size: inherit;
      text-decoration: none;
      padding: 0;
      margin: 0;
    }
  }

  a {
    font-size: 2rem;
    margin-left: 20px;
    color: orange;

    transition: color 0.35s ease;

    &.active {
      color: orange;
      font-weight: bold;
    }

    &:hover {
      color: black;
    }
  }
`;
