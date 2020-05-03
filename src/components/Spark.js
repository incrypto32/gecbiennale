/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { db } from '../firebase';
import SparkItems from './SparkItems';
import BeTheWriter from './BeTheWriter';
import BookReview from './BookReview';
import Protogonist from './Protogonist';
import StoryBoard from './StoryBoard';


export class Spark extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        };
      }
      componentDidMount() {
        db.collection(this.props.collection)
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            this.setState({ posts: data });
          });
      }
    render() {
        const {posts} =this.state
        let page;
        let collection = this.props.collection
        console.log(this.props.collection)
        // if(collection ==='spark'){
        //   page=<SparkItems posts={posts} eventName={this.props.eventName}/>
        // }else if(collection === 'bethewriter'){
         
        // }
        switch(collection) {
          case 'spark':
            page=<SparkItems posts={posts} eventName={this.props.eventName}/>
            break;
          case 'bethewriter':
            page=<BeTheWriter posts={posts} eventName={this.props.eventName} />
            break;
          case 'bookreview':
            console.log("BooKKKKK")
            page=<BookReview posts={posts} eventName={this.props.eventName} />
            break;
         case 'protogonist':
            console.log("protogonist")
            page=<Protogonist posts={posts} eventName={this.props.eventName} />
            break;
          case 'storyboard':
              console.log("storyboard")
              page=<StoryBoard posts={posts} eventName={this.props.eventName} />
              break;
          default:
            page=<div></div>
        } 

        return (
                <>
                {page} 
                </>
        )
    }
}

export default Spark

