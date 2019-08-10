import React /* , { useState } */ from "react";
import styled from "styled-components";
// import Post from "./PostPreview";

export default function(props) {
  return (
    <BlogSpotlight>
      <h2>Recent Posts</h2>
      <section className="post-container">
        {/* Saving this for reference later */}
        <article className="post-preview">
          <div className="post-banner">
            <h3>Blog Coming Soon!</h3>
            <span>2019-09-01</span>
          </div>
          <p>
            I'm currently working on some blog posts to add to this website.
            There will be a new item in the Nav to look through recent posts.
            You'll also see a few recent posts displayed here! Join me as I
            learn new tech and navigate my way through the ecosystem as a guy
            with an untraditional background and passion for solving problems.
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
