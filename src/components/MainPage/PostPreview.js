import React from "react";
import styled from "styled-components";

export default function(props) {
  const { post } = props;
  return (
    <Post>
      <div className="post-banner">
        <h3>{post.name}</h3>
        <span>{post.date}</span>
      </div>
      <p>{post.text.substring(0, 123) + "..."}</p>
    </Post>
  );
}

const Post = styled.section`
  margin-bottom: 25px;

  .post-banner {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    color: var(--main-color);
  }

  p {
    max-height: 8rem;
    text-indent: 5rem;
    font-size: 2rem;
  }
`;
