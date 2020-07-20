import React, { Component } from 'react';
import './GalleryItem.css';
// import Button from 'react-bootstrap/Button';

class GalleryItem extends Component {
  state = {
    isCLicked: false,
  };

  toggleImageDesc (event) {

    console.log("CLICKITY");
  }
  render() {
    let displayedState = this.state;
    console.log(displayedState);

    if (this.state.isCLicked === !false) {
      displayedState = <p>{this.props.item.description}TESTitemDesc</p>;
    } else {
      displayedState = (
        <img src={this.props.item.path} alt={this.props.item.description} />
      );
    }

    console.log(this.props);
    return (
      <div className="box">
        <h6>{this.props.item.title}</h6>
        <div>
          <button onClick={this.toggleImageDesc}>{displayedState}</button>
        </div>
        <div>
          <button
            className="likeBtn btn"
            onClick={this.props.updateLikes(this.props.item.id)}
          >
            LIKE
          </button>
        </div>
        <p className="likeP">{this.props.item.likes}</p>
      </div>
    );
  }
}

export default GalleryItem;
