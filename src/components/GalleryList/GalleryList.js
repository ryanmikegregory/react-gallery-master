import React, { Component } from 'react';
import styles from './GalleryList.module.css';

class GalleryList extends Component {
  render() {
    // console.log(this.props.galleryList);
    const displayImages = this.props.galleryList.map((item, index) => {
      return (
        <div key={item.id}>
          <img src={item.path} alt="imageDiv" className="img" />
        </div>
      );
    });

    return (
      <div className={styles.box}>
        {displayImages}
      </div>
    );
  }
}

export default GalleryList;

// const displayGallery = this.state.galleryItems.map((item, index) => {
//   return (
//     <div key={item.id}>
//       {item.title} {item.description} {item.path} {item.likes}
//     </div>

// <GalleryList galleryList={this.state.galleryItems} />

// <li>{displayGallery}</li>

// const displayImage = this.props.galleryList.map((item, index) => {
//   return <div key={item.id}> {item.path}</div>;
// });
