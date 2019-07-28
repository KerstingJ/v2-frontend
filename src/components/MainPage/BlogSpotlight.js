import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <BlogSpotlight>
      <h2>Recent Posts</h2>
      <section className="post-container">
        <article className="post-preview">
          <div className="post-banner">
            <h3>This is the Posts Title</h3>
            <span>2019-7-28</span>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae...
          </p>
        </article>
        <article className="post-preview">
          <div className="post-banner">
            <h3>Another Post</h3>
            <span>2019-7-28</span>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae...
          </p>
        </article>
        <article className="post-preview">
          <div className="post-banner">
            <h3>Ba Dah Dah</h3>
            <span>2019-7-28</span>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae...
          </p>
        </article>
      </section>
    </BlogSpotlight>
  );
}

const BlogSpotlight = styled.div`
  width: 100%;
  height: 100%;

  h2 {
    margin-bottom: 15px;
  }

  .post-preview {
    margin-bottom: 25px;
    .post-banner {
      display: flex;
      justify-content: space-between;
    }

    h3 {
      color: orange;
    }

    p {
      max-height: 8rem;
      text-indent: 5rem;
      font-size: 2rem;
    }
  }
`;
