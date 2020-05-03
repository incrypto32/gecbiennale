/* eslint-disable react/prop-types */
import React from "react";

function BeTheMaker(props) {
  let posts = props.posts;
  let i = 0;
  function processStory(postItem) {
    
    return (
      <a
        href={"http://" + postItem["link"]}
        key={i++}
        style={{ textDecoration: "none" }}
      >
        <div className="lititem">
          <h3>{postItem["title"]}</h3>
          {postItem["name"]}
          <br />
          {postItem["movie"]}
          <br />
          S4 cse
        </div>
      </a>
    );
  }
  return (
    <div className="catpage sparkpage eventpage">
      <h2>{props.eventName}</h2>

      {posts.map(processStory)}
    </div>
  );
}

export default BeTheMaker;
