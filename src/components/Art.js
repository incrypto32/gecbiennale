import React from 'react'
import { useHistory } from 'react-router-dom';

function Art() {
    const history = useHistory()
    return (
        <div className="catpage artpage">
      <h1>Art</h1>
      <div
        className="event"
        onClick={function() {
          history.push("/home/art/spark");
        }}
      >
        <h2>Origami</h2>
      </div>
      <div
        className="event"
        onClick={function() {
          history.push("/home/art/storyboard");
        }}
      >
        <h2>storyboard</h2>
      </div>
      <div
        className="event"
        onClick={function() {
          history.push("/home/art/bookreview");
        }}
      >
        <h2>Cartoon</h2>
      </div>
      <div
        className="event"
        onClick={function() {
          history.push("/home/art/protogonist");
        }}
      >
        <h2>Craftwork</h2>
      </div>
      <div
        className="event"
        onClick={function() {
          history.push("/home/art/storyboard");
        }}
      >
        <h2>calligraphy</h2>
      </div>
    </div>
    )
}

export default Art
