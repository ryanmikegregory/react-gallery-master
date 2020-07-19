import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  render() {
    return (
      <div className="box">
        <img src={this.props.item.path} alt="alternate"></img>
        <div>
          <button className="likeBtn" onClick={this.props.updateLikes(this.props.item.id)}>
            LIKE
          </button>
        </div>
        <p>Likes: {this.props.item.likes}</p>
      </div>
    );
  }
}

export default GalleryItem;
