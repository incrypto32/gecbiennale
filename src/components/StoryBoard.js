/* eslint-disable react/prop-types */
import React from "react";

function StoryBoard(props) {
  let posts = props.posts;
  let i = 0;

  function processStory(postItem) {
    return (
      <a
        href={"http://" + postItem["image"]}
        key={i++}
        style={{ textDecoration: "none" }}
      >
        <div className="lititem imgevent" style={{ textAlign: "center" }}>
          <img src={postItem["image"]} alt="its" className="img-event-img" />
          <h2>{postItem["title"]}</h2>
          {postItem["name"]}
          <br /> {postItem["sd"]}
          <br />
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

export default StoryBoard;
