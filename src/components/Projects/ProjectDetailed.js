import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getProject } from "../../actions";

function Project(props) {
  let proj_id = props.match.params.key;
  let { project } = props;

  useEffect(() => {
    props.getProject(proj_id);
  }, [proj_id]);

  if (!project) {
    return (
      <Main>
        <h3>Loading...</h3>
      </Main>
    );
  }

  return (
    <Main>
      <h3>{project.name}</h3>
      <section className="data-tags">
        {project.tech &&
          project.tech.map(tag => {
            return <span className="tag">{tag}</span>;
          })}
      </section>
      <section className="about">
        <h4>About</h4>
        <p>{project.about}</p>
      </section>
      <section className="stack">
        <h4>Stack</h4>
        <p>{project.stack}</p>
      </section>
      <section className="challenge">
        <h4>Challenge</h4>
        {project.challenge.split("{new_para}").map(para => (
          <p>{para}</p>
        ))}
      </section>
      <section className="next_steps">
        <h4>Next Steps</h4>
        <p>{project.next_steps}</p>
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
  .tag {
    background: rgb(230, 230, 230);
    padding: 0 7px;
    margin: 0 5px;
    border-radius: 3px;
    border-bottom: 2px solid gray;
    border-right: 2px solid gray;
  }
`;
