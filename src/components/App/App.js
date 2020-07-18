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
      return (
        <div key={item.id}>
          {item.title} {item.description} {item.path} {item.likes}
        </div>
      );
    });
    //
    console.log(this.state.galleryItems);
    //
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList galleryList={this.state.galleryItems} />
        {/* <img src="images/goat_small.jpg" alt="this is an" /> */}

        <li>{displayGallery}</li>
      </div>
    );
  }
}

export default App;
