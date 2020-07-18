import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    galleryItems: [
      {
        id: 0,
        title: '',
        description: '',
        path: '',
        likes: 0,
      },
    ],
  };

  componentDidMount() {
    console.log('We did da Mount!');
    //   this.getData();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList />
        {/* <img src="images/goat_small.jpg" alt="this is an" /> */}
      </div>
    );
  }
}

export default App;
