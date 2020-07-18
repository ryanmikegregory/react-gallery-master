import React, { Component } from 'react';
import styles from './GalleryList.module.css';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    console.log(this.props.galleryList);
    const displayImages = this.props.galleryList.map((item, index) => {
      return (
        <div key={item.id}>
          <img src={item.path} alt="imageDiv" className="img" />
          <GalleryItem />
        </div>
      );
    });

    return <div className={styles.box}>{displayImages}</div>;
  }
}

export default GalleryList;
