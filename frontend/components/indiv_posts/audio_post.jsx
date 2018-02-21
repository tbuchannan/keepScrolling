import React from 'react';

const AudioPost = props => {
  const { audio, post } = props;
  return (
    <div>
      <div className="indiv-post-title">
        <span>{ post.title }</span>
      </div>
      <div className="indiv-post-body">

        <div className="audio-post-audio">
          <audio controls>
            <source src={ audio } type="audio/mp3"></source>
            <source src={ audio } type="audio/ogg"></source>
            <source src={ audio } type="audio/wav"></source>
          </audio>
        </div>
        <div className = "body-caption">
          <span>{ post.body }</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPost;