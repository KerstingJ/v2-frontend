import React, { useState /* useEffect */ } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function _ImageGroup(props) {
  const { project } = props;

  const [visible, setVisible] = useState(false);

  return (
    <ImageGroup
      className="image-group"
      style={{
        display: `${props.isActive ? "inherit" : "none"}`,
        background: `url(${project.imgUrl})`,
        backgroundPosition: `top left`,
        backgroundSize: `cover`
      }}
    >
      <div
        className={`image-info${visible ? " visible" : ""}`}
        onClick={() => setVisible(!visible)}
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
  touch-action: auto;

  .carousel-image {
    height: 100%;
  }

  .image-info {
    display: flex;
    /* position: fixed; */
    border-radius: 2px;
    height: 100%;
    width: 100%;

    padding: 15px;

    flex-direction: column;
    align-items: left;
    justify-content: space-between;

    opacity: 0;
    background: rgba(0, 0, 0, 0);
    color: rgba(255, 255, 255, 0);

    /* z-index: -2; */

    transition: background 0.35s ease-in;
    transition: color 0.35s ease-in;
    transition: opacity 0.35s ease-in;

    touch-action: auto;

    &:hover,
    &:active,
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
