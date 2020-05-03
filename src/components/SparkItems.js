/* eslint-disable react/prop-types */
import React from "react";
import "react-prop-types";
function SparkItems(props) {
  // eslint-disable-next-line react/prop-types
  let posts = props.posts;
  let i = 0;
  return (
    <div className="catpage sparkpage eventpage">
      <h2>{props.eventName}</h2>
      <div className='topic'>
          <img src="https://christianindex.org/wp-content/uploads/2017/08/man-light-path-ftr.jpg" alt="topic" />
          <br />
          Topic
      </div>
      {posts.map(postItem => (
        <a href={"http://"+postItem['link']}key={i++} style={{textDecoration: "none"}}>
        <div className="lititem"  >
          <h3>{postItem['title']}</h3>
          {postItem["name"]}
          <br />
          S4 cse
         
        </div>
        </a>
      ))}
    </div>
  );
}

export default SparkItems;
