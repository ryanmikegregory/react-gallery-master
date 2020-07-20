import 'bootstrap/dist/css/bootstrap.min.css';
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
        console.log('GET Response:', response.data);
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
        alert('Error in GET', error);
      });
  }

  updateLikes = (id) => (event) => {
    event.preventDefault();
    console.log('Btn id:', id);
    axios({
      method: 'PUT',
      url: `gallery/like/${id}`,
    })
      .then((response) => {
        console.log('PUT Response;', response.statusText);
        this.getGalleryData();
      })
      .catch((error) => {
        alert('Error in PUT', error);
      });
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
