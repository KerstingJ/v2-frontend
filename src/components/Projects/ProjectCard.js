import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function(props) {
  const { project } = props;
  return (
    <Main>
      <section>
        <h4>{project.name}</h4>
        <p>{project.short}</p>
      </section>
      <section className="button">
        <Link to={`/projects/${project.id}`}> See More </Link>
      </section>
    </Main>
  );
}

const Main = styled.main`
  max-width: 300px;
  margin: 15px;
  padding: 10px;
  border: 1px solid orange;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    color: orange;
    margin-bottom: 10px;
    font-size: 2.4rem;
  }

  p {
    margin-bottom: 10px;
    font-size: 2rem;
  }

  .button {
    text-align: right;

    a {
      padding: 3px 7px;
      border-radius: 3px;
      background: orange;
      border: 1px solid orange;
      color: white;
      font-size: 2rem;

      transition: all 0.25s ease;

      &:hover {
        text-decoration: none;
        background: white;
        color: orange;
      }
    }
  }
`;
