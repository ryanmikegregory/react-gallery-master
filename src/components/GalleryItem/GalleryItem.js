import React, { Component } from 'react';
import styles from '../GalleryItem/GalleryItem.module.css';

export class GalleryItem extends Component {
  render() {
    console.log(this.props.galleryItem);
    return (
      <div>
        <li key={this.props.galleryItem.id} className={styles.list}>
          <img src={this.props.galleryItem.path} alt="arrayImage" />
          <div>
            <button>I Like It!</button>{' '}
          </div>
        </li>
      </div>
    );
  }
}

export default GalleryItem;
