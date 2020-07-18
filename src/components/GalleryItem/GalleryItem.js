import React, { Component } from 'react';

export class GalleryItem extends Component {
  render() {
    console.log(this.props.galleryList);
    return (
      <div>
        <h1>TestTEster</h1>
      </div>
    );
  }
}

export default GalleryItem;

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
