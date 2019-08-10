import React from "react";
import styled from "styled-components";

export default function(props) {
  return (
    <Main>
      <h3>This is a detailed breakdown of a wicked awesome project</h3>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;
