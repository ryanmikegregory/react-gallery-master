import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import styles from '../GalleryList/GalleryList.module.css';

class GalleryList extends Component {
  render() {
    return this.props.galleryList.map((galleryItem) => (
      <div className={styles.box}>
        <GalleryItem galleryItem={galleryItem} />
      </div>
    ));
  }
}

export default GalleryList;
