/* eslint-disable react/prop-types */
import React from "react";

function Protogonist(props) {
  let posts = props.posts;
  let i = 0;
  return (
    <div className="catpage sparkpage eventpage">
      <h2>{props.eventName}</h2>
    
      {posts.map(postItem => (
        <a
          href={"http://" + postItem["link"]}
          key={i++}
          style={{ textDecoration: "none" }}
        >
          <div className="lititem" style={{textAlign:"center"}}>
            <h2>{postItem["title"]}</h2>
            {postItem["name"]}
            <br /> {postItem["sd"]}
            <br />
            movie : {postItem["movie"]}
            <br />
            character : {postItem["character"]}
            <br />
            <br />
          </div>
        </a>
      ))}
    </div>
  );
}

export default Protogonist;
