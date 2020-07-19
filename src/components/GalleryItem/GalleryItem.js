import React, { Component } from 'react';
import styles from '../GalleryItem/GalleryItem.module.css';

export class GalleryItem extends Component {
  render() {
    console.log(this.props.galleryItem);
    return (
      <div className={styles.children}>
        <h1>Test</h1>
        <img src={this.props.galleryItem.path} alt="arrayImage" />
        <div>
          <button>I Like It!</button>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
