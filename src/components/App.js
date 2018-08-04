import React, { Component } from 'react';
import Header from './Header';
import VideoList from './VideoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
