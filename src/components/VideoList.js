import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Video from './Video';

const styles = {
  root: {
    flexGrow: 1,
    padding: '50px',
  }
};

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
        <Grid key={video._id} item xs={3}>
          <Video video={video} />
        </Grid>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return(
      <div>
        <Grid container className={classes.root} direction="row" justify="flex-start" spacing={40}>
          {this.renderList(this.state.videos)}
        </Grid>
      </div>
    );
  }
};

VideoList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoList);