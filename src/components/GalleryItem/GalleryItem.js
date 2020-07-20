import React, { Component } from 'react';
import './GalleryItem.css';
// import Button from 'react-bootstrap/Button';

class GalleryItem extends Component {
  state = {
    isCLicked: false,
  };

  toggleImageDesc = () => {
    this.setState({
      isCLicked: !this.state.isCLicked,
    });
    console.log('CLICKITY');
  };
  render() {
    let displayedState = this.state;
    if (this.state.isCLicked === !false) {
      displayedState = (
        <div>
          <h5>{this.props.item.title}</h5>
          <p>{this.props.item.description}</p>
        </div>
      );
    } else {
      displayedState = (
        <img src={this.props.item.path} alt={this.props.item.description} />
      );
    }
    //TODO style description div/ image divpg-
    return (
      <div className="box">
        <div onClick={this.toggleImageDesc}>{displayedState}</div>
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
