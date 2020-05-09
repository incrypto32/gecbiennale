/* eslint-disable react/prop-types */
import React from 'react'

function PicEvents(props) {
    let posts = props.posts;
    let i = 0;
  
    function processStory(postItem) {
      return (
        <a
          href={postItem["image"]}
          key={i++}
          style={{ textDecoration: "none" }}
        >
          <div className="lititem  picevent" style={{ textAlign: "center" }}>
            <img src={postItem["image"]} alt="its" className="img-event-img" />
            <h3>{postItem["name"]}</h3>
        
            {postItem["sd"]}
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

export default PicEvents
