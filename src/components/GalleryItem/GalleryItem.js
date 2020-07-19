import React, { Component } from 'react';
import './GalleryItem.css';
import GalleryImage from '../GalleryImage/GalleryImage';

class GalleryItem extends Component {
  render() {
    return (
      <div className="box">
        <h4>{this.props.item.title}</h4>
        <GalleryImage
          img={this.props.item.path}
          // description={this.props.description}
        />

        <p>{this.props.item.description}</p>
        <div>
          <button
            className="likeBtn"
            onClick={this.props.updateLikes(this.props.item.id)}
          >
            LIKE
          </button>
          <p>Likes: {this.props.item.likes}</p>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
