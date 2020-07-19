import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    return this.props.galleryList.map((galleryItem) => (
      <div>
        <GalleryItem galleryItem={galleryItem} />
      </div>
    ));
  }
}

export default GalleryList;
