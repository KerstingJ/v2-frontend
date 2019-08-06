import React /* , { useState } */ from "react";
import styled from "styled-components";
import Post from "./PostPreview";

export default function(props) {
  return (
    <BlogSpotlight>
      <h2>Recent Posts</h2>
      <section className="post-container">
        {props.posts ? (
          props.posts.map(post => <Post post={post} />)
        ) : (
          <h4>Sorry No Posts Yet</h4>
        )}

        {/* Saving this for reference later */}
        <article className="post-preview">
          <div className="post-banner">
            <h3>If I had some posts this is what they'd look like.</h3>
            <span>2019-7-28</span>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae...
          </p>
        </article>
        {/*
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
        </article> */}
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

  h4 {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 4rem;

    color: orange;
  }

  h3 {
    color: orange;
  }

  p {
    text-indent: 5rem;
    font-size: 2rem;
    text-overflow: ellipsis;
  }
`;
