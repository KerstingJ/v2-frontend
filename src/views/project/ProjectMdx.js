import React, {useState, useEffect, Suspense} from "react";
import styled from "styled-components";
import { projectLongForms } from "./projects/index"

export default function Project(props) {
  let projName = props.match.params.key;
  let Component = projectLongForms[projName]

  if (!Component) {
    return (
      <Main>
        <h3>We couldn't find that project</h3>
      </Main>
    );
  }

  return (
    <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
    </Main>
  );
}

const Main = styled.main`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 25px;

  h3 {
    margin-bottom: 15px;
  }

  h4 {
    margin-bottom: 10px;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .tag {
    background: rgb(230, 230, 230);
    padding: 0 7px;
    margin: 0 5px 5px;
    border-radius: 3px;
    border-bottom: 2px solid gray;
    border-right: 2px solid gray;

    font-weight: 700;
  }

  .project-img {
    width: 100%;
    height: auto;
    border-radius: 3px;
  }

  .links {
    display: flex;
    justify-content: flex-end;

    a {
      color: white;
      font-size: 2.4rem;
      padding: 3px 15px;
      border-radius: 3px;
      background: var(--main-color);
      margin-left: 15px;
      border: 1px solid var(--main-color);

      transition: all 0.25s ease;

      &:hover {
        text-decoration: none;
        color: var(--main-color);
        background: white;
      }

      &:first-child {
        margin-left: 0;
      }
    }
  }

  section {
    margin-bottom: 25px;
  }

  h4 {
    font-size: 2.4rem;
    color: var(--main-color);
  }

  p {
    font-size: 2rem;
    margin-bottom: 25px;
    max-width: 650px;

    text-indent: 3rem;
  }
`;
