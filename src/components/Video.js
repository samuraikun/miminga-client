import React from 'react';

const Video = ({video}) => {
  return(
    <p>{video.snippet.title}</p>
  );
}

export default Video;