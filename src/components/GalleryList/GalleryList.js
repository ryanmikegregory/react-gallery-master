import React, { Component } from 'react';

export class GalleryList extends Component {
  render() {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
}

export default GalleryList;

// import React, { Component } from 'react';
// import GalleryItem from '../GalleryItem/GalleryItem';
// import styles from '../GalleryList/GalleryList.module.css';

// class GalleryList extends Component {
//   render() {
//     console.log(this.props.galleryList);

//     return this.props.galleryList.map((galleryItem) => (
//       <div className={styles.box}>
//         <GalleryItem key={galleryItem.id} galleryItem={galleryItem} />
//       </div>
//     ));
//   }
// }

// export default GalleryList;
