import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    galleryItems: [
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
          galleryItems: response.data,
        });
      })
      .catch((error) => {
        alert('Error in GET-Client', error);
      });
  }
  render() {
    const displayGallery = this.state.galleryItems.map((item, index) => {
      return <div key={index}>Thingys</div>;
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList />
        {/* <img src="images/goat_small.jpg" alt="this is an" /> */}
        <ul>{displayGallery}</ul>
      </div>
    );
  }
}

export default App;
