// import React, { Component } from 'react';

// class GalleryList extends Component {
//   render() {
//     console.log('props in GalleryList:', this.props.galleryList);

//     const displayImages = this.props.galleryList.map((item, index) => {
//       return (
//         <div key={item.id}>
//           <img src={item.path} alt="imageDiv" className="img" />
//         </div>
//       );
//     });

//     return (
//       <div>
//         <div>{displayImages}</div>
//       </div>
//     );
//   }
// }

// export default GalleryList;

import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    // console.log('props in GalleryList:', this.props.galleryList);
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
      </div>
    );
  }
}

export default GalleryList;
