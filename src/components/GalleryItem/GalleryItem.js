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
      displayedState = <p>{this.props.item.description}TESTitemDesc</p>;
    } else {
      displayedState = (
        <img src={this.props.item.path} alt={this.props.item.description} />
      );
    }

    return (
      <div className="box">
        <h6>{this.props.item.title}</h6>
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
