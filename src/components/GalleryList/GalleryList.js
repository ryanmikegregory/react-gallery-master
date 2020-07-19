import React, { Component } from 'react';

export class GalleryList extends Component {
  render() {
    const itemsArray = this.props.galleryList.map((item, index) => {
      return (
          <div key={index}>
          <li key={index}>
          <img key={index} src={item.path} alt="pic from array"></img>
          </li>
          </div>
        
      );
    });
    return (
      <div>
        {itemsArray}
      </div>
    );
  }
}

export default GalleryList;

