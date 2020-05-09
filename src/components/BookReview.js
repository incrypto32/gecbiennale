/* eslint-disable react/prop-types */
import React from 'react'

function BookReview(props) {
    let posts=props.posts
    let i=0
    return (
        <div className="catpage sparkpage eventpage">
      <h2>{props.eventName}</h2>
     
      {posts.map(postItem => (
        <a href={"http://"+postItem['link']}key={i++} style={{textDecoration: "none"}}>
        <div className="lititem"  >
          <h3>{postItem['title']}</h3>
          {postItem["name"]}<br /> {postItem['sd']}
          <br />
          book : {postItem['book']}
          <br />
          
          <br />
          
         
        </div>
        </a>
      ))}
    </div>
    )
}

export default BookReview
