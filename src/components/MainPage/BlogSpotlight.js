import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <BlogSpotlight>
      <h2>Recent Posts</h2>
    </BlogSpotlight>
  );
}

const BlogSpotlight = styled.div`
  width: 100%;
  height: 100%;
`;
