import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.item.path} alt="alternate"></img>
        <div>
          <button>LIKE</button>
        </div>
        <p>This Many People Have Liked This: 0</p>
      </div>
    );
  }
}

export default GalleryItem;
