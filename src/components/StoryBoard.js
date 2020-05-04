/* eslint-disable react/prop-types */
import React from "react";

function StoryBoard(props) {
  let posts = props.posts;
  let i = 0;

  function processStory(postItem)
  {
    if(i==0)
    {
      return(
        <div className="carousel-item active">
        <a href={"http://"+postItem["image"]} key={i++}> 
          <img src={postItem["image"]} className="d-block w-100 img-event-img" alt="its"/>
            <div className="carousel-caption d-none d-md-block">
              <h2>{postItem["title"]}</h2>
              <p>{postItem["name"]}</p>
              {postItem["sd"]}
            </div>
      </a>
        </div>
      );
    }
    else{
      return(
        <div className="carousel-item">
        <a href={"http://"+postItem["image"]} key={i++}> 
          <img src={postItem["image"]} className="d-block w-100 img-event-img" alt="its"/>
          <div className="carousel-caption d-none d-md-block">
            <h2>{postItem["title"]}</h2>
            <p>{postItem["name"]}</p>
            {postItem["sd"]}
          </div>
      </a>
          </div>
      );
    }  
  }
  return (
    <div className="catpage sparkpage eventpage p-6">
      <div id="carouselExampleSlidesOnly" className="carousel slide col-10 container" data-ride="carousel">
        <div className="carousel-inner mt-4 mb-2">
        <h2 className="mt-2">{props.eventName}</h2>
        {posts.map(processStory)}
        </div>
    </div>
    </div>
  );
}

export default StoryBoard;
