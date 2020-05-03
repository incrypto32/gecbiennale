/* eslint-disable react/prop-types */
import React from 'react'

function BeTheWriter(props) {
    let posts=props.posts
    let i=0
    return (
        <div className="catpage sparkpage eventpage">
      <h2>{props.eventName}</h2>
     
      {posts.map(postItem => (
        <a href={"http://"+postItem['link']}key={i++} style={{textDecoration: "none"}}>
        <div className="lititem"  >
          <h3>{postItem['title']}</h3>
          {postItem["name"]}
          <br />
          {postItem['movie']}
          <br />
          S4 cse
         
        </div>
        </a>
      ))}
    </div>
    )
}

export default BeTheWriter
