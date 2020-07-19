import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    console.log(this.props.galleryItem);
    const individualLoop = this.props.galleryItem.map((item, index) => {
      return (
        <div key={item.id}>
          {/* {item.title} 
          {item.description}  */}
          {/* {item.path}  */}
          <img src={item.path} alt="imageDiv" className="img" />
          {/* {item.likes} */}
        </div>
      );
    });

    return (
      <div>
        <h1>TestTEster</h1>
        {individualLoop}
      </div>
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
