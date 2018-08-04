import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import VideoList from './VideoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div className="container">
            <Route exact path="/" component={VideoList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
