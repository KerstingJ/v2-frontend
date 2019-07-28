import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ImageGroup from "./ImageGroup";

import { getPreviewProjects } from "../../actions";

function ProjectsPreview(props) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    props.getPreviewProjects();
  }, []);

  return (
    <ProjectCarousel>
      <div className="image-Container">
        {/* 
            do a map on a list received from props
            when index of map === currentImage, 
            then set that ImageGroup to `isActive`
        */}
        {props.projects &&
          props.projects.map((project, index) => {
            if (index == currentImage) {
              return <ImageGroup isActive project={project} />;
            }
            return <ImageGroup project={project} />;
          })}
      </div>
      <div className="button-container">
        {/* This will hold the buttons and current slide ico */}
        <button className="carousel-btn">L</button>
        {/*
            Will make a `dot` for each image in carousel,
            if index === currentImage,
            set that dot to `active`
        */}
        {props.projects &&
          props.projects.map((project, index) => {
            return (
              <div className={`dot${index == currentImage ? " active" : ""}`} />
            );
          })}
        <button className="carousel-btn">R</button>
      </div>
    </ProjectCarousel>
  );
}

export default connect(
  state => ({
    projects: state.projects.data
  }),
  { getPreviewProjects }
)(ProjectsPreview);

const ProjectCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .button-container {
    margin-top: 15px;

    display: flex;
    align-items: center;

    .carousel-btn {
      border: none;
      padding: 2px 5px;
      border-radius: 3px;
      transition: all 0.35s ease;

      &:first-of-type {
        margin-right: 10px;
      }

      &:last-of-type {
        margin-left: 10px;
      }

      &:hover {
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
      }
    }

    .dot {
      display: inline-block;
      background: white;
      border: 1px solid lightgray;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 10px;

      &.active {
        background: lightgrey;
      }
    }
  }
`;
