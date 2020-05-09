/* eslint-disable react/prop-types */
import React from "react";

function BeTheMaker(props) {
  let posts = props.posts;
  let i = 0;
  function processStory(postItem) {
    let title=postItem["title"]
    let name= postItem["name"]
    let movie=postItem["movie"]
    let movieItem= movie? <>{movie}<br/></> : <></>
    return (
      <a
        href={"http://" + postItem["link"]}
        key={i++}
        style={{ textDecoration: "none" }}
      >
        <div className="lititem">
          <h3>{title}</h3>
          {name}
          <br />
          {movieItem}
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
