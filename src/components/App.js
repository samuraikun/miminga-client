import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import VideoCardList from './VideoCardList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div className="container">
            <Route exact path="/" component={VideoCardList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
