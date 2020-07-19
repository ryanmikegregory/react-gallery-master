import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
// import GalleryItem from '../GalleryItem/GalleryItem';

class App extends Component {
  state = {
    galleryItemsArray: [
      // {
      //   id: 0,
      //   title: '',
      //   description: '',
      //   path: '',
      //   likes: 0,
      // },
    ],
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
        this.setState({
          galleryItemsArray: response.data,
        });
      })
      .catch((error) => {
        alert('Error in GET-Client', error);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList galleryList={this.state.galleryItemsArray} />
        {/* <GalleryItem galleryItem={this.state.galleryItemsArray} /> */}
      </div>
    );
  }
}

export default App;
