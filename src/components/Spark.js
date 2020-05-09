/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { db } from '../firebase';
import SparkItems from './SparkItems';

import BookReview from './BookReview';
import Protogonist from './Protogonist';
import StoryBoard from './StoryBoard';
import BeTheMaker from './BeTheMaker';
import PicEvents from './PicEvents';


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
        
        switch(collection) {
          case 'spark':
            page=<SparkItems posts={posts} eventName={collection}/>
            break;
          case 'bethemaker':
            page=<BeTheMaker posts={posts} eventName={collection} />
            break;
          case 'bookreview':
            console.log("BooKKKKK")
            page=<BookReview posts={posts} eventName={collection} />
            break;
         case 'protogonist':
            console.log("protogonist")
            page=<Protogonist posts={posts} eventName={collection} />
            break;
          case 'storyboard':
              console.log("storyboard")
              page=<StoryBoard posts={posts} eventName={collection} />
              break;
          case 'calligraphy'  :
              console.log('collection')
              page=<PicEvents posts={posts} eventName={collection} />
              break;
          case 'cartoon'  :
                console.log('collection')
                page=<PicEvents posts={posts} eventName={collection} />
                break;
          case 'pencildrawing'  :
                console.log('collection')
                page=<PicEvents posts={posts} eventName={collection} />
                break;
          case 'digitalart'  :
                  console.log('collection')
                  page=<PicEvents posts={posts} eventName={collection} />
                  break;
          case 'watercolour'  :
                    console.log('collection')
                    page=<PicEvents posts={posts} eventName={collection} />
                    break;
          default:
            console.log(collection)
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

