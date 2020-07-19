import React, { Component } from 'react';

class GalleryImage extends Component {
  state = {
    clicked: false,
  };

  toggleImageDescription = () => {
    if (!this.state.clicked) {
      this.setState(
        {
          clicked: true,
        },
        () => {
          console.log(this.state.clicked);
        }
      );
    } else {
      this.setState(
        {
          clicked: false,
        },
        () => {
          console.log(this.state.clicked);
        }
      );
    }
  };

  render() {
    let el = <img src={this.props.img} alt={this.props.description} />;
    if (this.state.clicked === true) {
      el = <p>{this.props.description}</p>;
    }
    return (
      <div>
        <div onClick={this.toggleImageDescription}></div>
        {el}
      </div>
    );
  }
}

export default GalleryImage;
