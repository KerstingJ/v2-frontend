import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ImageGroup from "./ImageGroup";

export default function(props) {
  return (
    <ProjectCarousel>
      <div className="image-Container">
        {/* This is where the magic happens */}
        <ImageGroup />
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
