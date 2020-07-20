import React, { Component } from 'react';
import './GalleryItem.css';
// import Button from 'react-bootstrap/Button';

class GalleryItem extends Component {
  render() {
    return (
      <div className="box">
        <h4>{this.props.item.title}</h4>

        <img src={this.props.item.path} alt={this.props.item.description}></img>

        <p>{this.props.item.description}</p>
        <div>
          <button
            className="likeBtn btn"
            onClick={this.props.updateLikes(this.props.item.id)}
          >
            LIKE
          </button>
        </div>
        <p className="likeP">{this.props.item.likes}</p>
      </div>
    );
  }
}

export default GalleryItem;
