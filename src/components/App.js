import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import VideoCardList from './VideoCardList';
import Video from './Video';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={VideoCardList} />
              <Route path="/video" component={Video} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
