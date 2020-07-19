import React, { Component } from 'react';
import styles from '../GalleryList/GalleryList.module.css';

export class GalleryList extends Component {
  render() {
    const itemsArray = this.props.galleryList.map((item, index) => {
      return (
        <div key={index} className={styles.box}>
          <li key={index}>
            <img key={index} src={item.path} alt="pic from array"></img>
          </li>
        </div>
      );
    });
    return <div>{itemsArray}</div>;
  }
}

export default GalleryList;
