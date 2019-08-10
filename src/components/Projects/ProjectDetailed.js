import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getProject } from "../../actions";

function Project(props) {
  let proj_id = props.match.params.key;
  let { project, getProject } = props;

  useEffect(() => {
    getProject(proj_id);
  }, [proj_id, getProject]);

  if (!project) {
    return (
      <Main>
        <h3>Loading...</h3>
      </Main>
    );
  }

  return (
    <Main>
      <article className="main-details">
        <h3>{project.name}</h3>
        <section className="data-tags">
          {project.tech &&
            project.tech.map(tag => {
              return (
                <span key={tag} className="tag">
                  {tag.toUpperCase()}
                </span>
              );
            })}
        </section>
        <img
          className="project-img"
          src={project.imgUrl.slice(1, project.imgUrl.length)}
          alt="Screen shot of project"
        />
        <div className="links">
          <a href={project.live_link}>Live Site</a>
          <a href={project.repo_link}>Github Repo</a>
        </div>
      </article>
      <section className="about">
        <h4>About</h4>
        <p>{project.about ? project.about : project.short}</p>
      </section>
      <section className="stack">
        {project.stack && <h4>Stack</h4>}
        <p>{project.stack && project.stack}</p>
      </section>
      <section className="challenge">
        {project.challenge && <h4>Challenge</h4>}
        {project.challenge &&
          project.challenge
            .split("{new_para}")
            .map((para, i) => <p key={i}>{para}</p>)}
      </section>
      <section className="next_steps">
        {project.next_steps && <h4>Next Steps</h4>}
        <p>{project.next_steps && project.next_steps}</p>
      </section>
    </Main>
  );
}

export default connect(
  state => ({
    project: state.projects.current
  }),
  { getProject }
)(Project);

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

  .data-tags {
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
      background: orange;
      margin-left: 15px;

      &:hover {
        text-decoration: none;
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
    color: orange;
  }

  p {
    font-size: 2rem;
    margin-bottom: 25px;
    max-width: 650px;

    text-indent: 3rem;
  }
`;
