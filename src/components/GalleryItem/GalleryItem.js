import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    console.log(this.props.galleryItem);
    // const individualLoop = this.props.galleryItem.map((item) => {
    // return <div key={item.id}></div>;
    return (
      <li>
        {this.props.galleryItem.map((item) => (
          // <li key={item.id}>
          <img key={item.id} src={item.path} alt="imageDiv" className="img" />
        ))}
      </li>
    );
  }
}

export default GalleryItem;

// const individual = this.state.galleryItems.map((item, index) => {
//   return (
//     <div key={item.id}>
//       {item.title} {item.description} {item.path} {item.likes}
//     </div>

// <GalleryList galleryList={this.state.galleryItems} />

// <li>{displayGallery}</li>

// const displayImage = this.props.galleryList.map((item, index) => {
//   return <div key={item.id}> {item.path}</div>;
// });
