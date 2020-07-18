import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    // console.log(this.props.galleryList);
    const displayImage = this.props.galleryList.map((item, index) => {
      return <div key={item.id}> {item.path}</div>;
    });

    return (
      <div>
        <h1>Test</h1>
        {displayImage}
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
