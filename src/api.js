import React, { Component } from 'react';

let imageArr = ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", ];

export default class Api extends Component {
  render() {
    return ( 
      <div className = "hero-container">
           {
             imageArr.map((image) => (
                <img src={image}/>
             ))
           }
      </div>
    );
  }
}