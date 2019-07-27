import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function(props) {
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
    let element = event.target;
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
    <ProjectCarousel>
      <div className="image-Container">
        {/* This is where the magic happens */}
        <div
          className="image-group"
          onMouseOver={handleHoverIn}
          onMouseLeave={handleHoverOut}
        >
          <img
            className="carousel-image"
            src="./images/lvl.jpg"
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
            <h3>Level Up</h3>
            <p>
              A Multi-page marketing website for an app based on Stanfords
              design your life. Built with HTML, CSS, LESS, Javascript.
              Featuring custom made reusable components and an amazing visual
              Aesthetic.
            </p>
            <div className="show-more">
              <button>See More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        {/* This will hold the buttons and current slide ico */}
        <button className="carousel-btn">L</button>
        <div className="dot active" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <button className="carousel-btn">R</button>
      </div>
    </ProjectCarousel>
  );
}

const ProjectCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-group {
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
      display: none;
      position: fixed;
      border-radius: 2px;

      background: rgba(255, 255, 255, 0);
      color: rgba(0, 0, 0, 0);

      transition: opacity 0.5s ease;

      padding: 15px;

      flex-direction: column;
      align-items: left;
      justify-content: space-between;

      &.visible {
        display: flex;
        background: rgba(0, 0, 0, 0.8);
        color: rgba(255, 255, 255, 0.9);
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

        transition: all 0.35s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }

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
