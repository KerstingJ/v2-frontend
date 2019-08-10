import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ProjectCard from "./ProjectCard";

import { getAllProjects } from "../../actions";

function ProjectsList(props) {
  const { projects, getAllProjects } = props;

  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);

  return (
    <Main>
      <h3>Check out one of my recent Projects!</h3>
      <section className="card-container">
        {projects &&
          projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </section>
    </Main>
  );
}

export default connect(
  state => ({
    projects: state.projects.data
  }),
  { getAllProjects }
)(ProjectsList);

const Main = styled.main`
  padding: 10px;

  h3 {
    text-align: center;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
