import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  render() {
    return (
      <div className="box">
        <img src={this.props.item.path} alt="alternate"></img>
        <div>
          <button>LIKE</button>
        </div>
        <p>Likes: 0</p>
      </div>
    );
  }
}

export default GalleryItem;
