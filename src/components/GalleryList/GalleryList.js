import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    // console.log('props in GalleryList:', this.props.galleryItemsArray);
    const individualLoop = this.props.galleryList.map((item, index) => {
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
        <div>{individualLoop}</div>
        <button>Love it!</button>
      </div>
    );
  }
}

export default GalleryList;
