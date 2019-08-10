import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function(props) {
  const { project } = props;

  const [visible, setVisible] = useState(false);
  const [doHover, setDoHover] = useState(true);
  const [detailCoords, setDetailCoords] = useState({
    top: "0",
    left: "0",
    height: "0",
    width: "0"
  });

  useEffect(() => {
    if (visible) {
      const makeInvisible = () => {
        setVisible(false);
      };

      window.addEventListener("scroll", makeInvisible);

      return () => {
        window.removeEventListener("scroll", makeInvisible);
      };
    }
  }, [visible]);

  const handleHoverIn = event => {
    if (!doHover) {
      return;
    }
    let element = event.currentTarget;
    let { top, left, height, width } = element.getBoundingClientRect();

    setDetailCoords({ top, left, height, width });
    setVisible(true);
    setDoHover(false);
  };

  const handleHoverOut = event => {
    setVisible(false);
    setDoHover(true);
  };

  const handleScroll = event => {
    // TODO: this name really needs to be refactored
  };

  return (
    <ImageGroup
      className="image-group"
      onMouseOver={handleHoverIn}
      onMouseLeave={handleHoverOut}
      onScroll={handleScroll}
      style={{ display: `${props.isActive ? "inherit" : "none"}` }}
    >
      <img
        className="carousel-image"
        src={project.imgUrl}
        alt="project preview"
      />
      <div
        className={`image-info${visible ? " visible" : ""}`}
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
          <Link to={`/projects/${project.id}`}>See More</Link>
        </div>
      </div>
    </ImageGroup>
  );
}

const ImageGroup = styled.div`
  height: 400px;
  max-width: 600px;
  overflow: none;
  border-radius: 2px;

  .carousel-image {
    object-fit: cover;
    object-position: top left;
    height: 100%;
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

    z-index: -1;

    transition: background 0.35s ease-in;
    transition: color 0.35s ease-in;
    transition: opacity 0.35s ease-in;

    &.visible {
      opacity: 1;
      background: rgba(50, 20, 0, 0.8);
      color: rgba(255, 255, 255, 1);

      z-index: unset;
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

    a {
      background: none;
      border: 1px solid white;
      border-radius: 4px;

      color: white;
      font-size: 2rem;

      padding: 6px 12px;
      width: 250px;

      transition: background 0.35s ease-in;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
`;
