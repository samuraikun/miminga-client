import React, { Component } from 'react';
import axios from 'axios';
import Video from './Video';

class VideoList extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }
  }

  async componentDidMount() {
    const response = await axios.get('/api/videos');
    const videos = response.data;

    this.setState({ videos: videos });
  }

  renderList(videos) {
    return videos.map(video => {
      return (
        <li key={video._id}>
          <Video video={video} />
        </li>
      );
    });
  }

  render() {
    return(
      <ul>
        {this.renderList(this.state.videos)}
      </ul>
    );
  }
};

export default VideoList;