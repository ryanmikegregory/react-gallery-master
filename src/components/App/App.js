import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList />
        <img src="images/goat_small.jpg" alt="this is an" />
      </div>
    );
  }
}

export default App;
