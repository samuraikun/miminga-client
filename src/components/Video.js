import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '../../node_modules/@material-ui/core';

const styles = {
  card: {
    maxWidth: 385,
    maxHeight: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

class Video extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);

    this.state = { }
  }

  handleMouseOver() {
    console.log('mouse over!');
  }

  handleClick() {
    console.log('click!');
  }

  render() {
    const { classes } = this.props; 
    
    return(
      <Card
        className={classes.card}
        onMouseOver={this.handleMouseOver}
        onClick={this.handleClick}
      >
        <CardMedia
          className={classes.media}
          image={this.props.video.snippet.thumbnails.medium_url}
          title={this.props.video.snippet.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.video.snippet.title}
          </Typography>
          <Typography component="p">
            {this.props.video.snippet.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

Video.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Video);