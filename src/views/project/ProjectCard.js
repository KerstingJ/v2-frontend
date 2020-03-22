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
  border: 1px solid var(--main-color);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    color: var(--main-color);
    /* background: var(--main-color); */
    margin-bottom: 10px;
    font-size: 2.4rem;
    padding: 10px;
  }

  p {
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: 2rem;
  }

  .button {
    text-align: right;
    padding: 10px 5px;

    a {
      padding: 3px 7px;
      border-radius: 3px;
      background: var(--main-color);
      border: 1px solid var(--main-color);
      color: white;
      font-size: 2rem;

      transition: all 0.25s ease;

      &:hover {
        text-decoration: none;
        background: white;
        color: var(--main-color);
      }
    }
  }
`;
