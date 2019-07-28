import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function(props) {
  const { project } = props;

  const [notVisible, setVisible] = useState(true);
  const [doHover, setDoHover] = useState(true);
  const [detailCoords, setDetailCoords] = useState({
    top: "0",
    left: "0",
    height: "0",
    width: "0"
  });

  const handleHoverIn = event => {
    if (!doHover) {
      return;
    }
    let element = event.currentTarget;
    let { top, left, height, width } = element.getBoundingClientRect();

    setDetailCoords({ top, left, height, width });
    setVisible(false);
    setDoHover(false);
  };

  const handleHoverOut = event => {
    setVisible(true);
    setDoHover(true);
  };

  return (
    <ImageGroup
      className="image-group"
      onMouseOver={handleHoverIn}
      onMouseLeave={handleHoverOut}
      style={{ display: `${props.isActive ? "inherit" : "none"}` }}
    >
      <img
        className="carousel-image"
        src={project.imageUrl}
        alt="project preview"
      />
      <div
        className={`image-info${notVisible ? "" : " visible"}`}
        style={{
          top: `${detailCoords.top}px`,
          left: `${detailCoords.left}px`,
          width: `${detailCoords.width}px`,
          height: `${detailCoords.height}px`
        }}
      >
        <h3>{project.name}</h3>
        <p>{project.short}</p>
        <div className="show-more">
          <button>See More</button>
        </div>
      </div>
    </ImageGroup>
  );
}

const ImageGroup = styled.div`
  max-width: 500px;
  overflow: none;
  border-radius: 2px;

  .carousel-image {
    border-radius: 2px;
    max-width: 500px;
    max-height: 350px;
    object-fit: cover;
  }

  .image-info {
    display: flex;
    position: fixed;
    border-radius: 2px;

    padding: 15px;

    flex-direction: column;
    align-items: left;
    justify-content: space-between;

    opacity: 0;
    background: rgba(0, 0, 0, 0);
    color: rgba(255, 255, 255, 0);

    transition: background 0.35s ease-in;
    transition: color 0.35s ease-in;
    transition: opacity 0.35s ease-in;

    &.visible {
      opacity: 1;
      background: rgba(0, 0, 0, 0.8);
      color: rgba(255, 255, 255, 1);
    }

    h3 {
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 25px;
      line-height: 1.35;
      font-size: 2rem;
    }

    .show-more {
      text-align: right;
    }

    button {
      background: none;
      border: 1px solid white;
      color: white;

      width: 250px;

      transition: background 0.35s ease-in;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;
