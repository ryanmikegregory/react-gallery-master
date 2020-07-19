import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    galleryItemsArray: [],
  };

  componentDidMount() {
    console.log('We did da Mount!');
    this.getGalleryData();
  }

  getGalleryData() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        console.log('Response:', response.data);
        this.setState(
          {
            galleryItemsArray: response.data,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((error) => {
        alert('Error in GET-Client', error);
      });
  }

  updateLikes = (id) => (event) => {
    console.log(id);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <div className="container">
          <h1>Gallery</h1>
          <GalleryList
            galleryList={this.state.galleryItemsArray}
            updateLikes={this.updateLikes}
          />
        </div>
      </div>
    );
  }
}

export default App;
