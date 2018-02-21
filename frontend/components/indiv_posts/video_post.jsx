import React from 'react';

const VideoPost = props => {
  const { post, video } = props;
  return (
    <div>
      <div className="indiv-post-title">
        <span>{ post.title }</span>
      </div>
      <div className="indiv-video-body">
        <div className="video-post-video">
          <video width="540" height="360" controls>
            <source src={ video } type="video/mp4" />
            <source src={ video } type="video/ogg" />
          </video>
        </div>

        <div className = "body-caption">
          <span>{ post.body }</span>
        </div>
      </div>
    </div>
  );
};

export default VideoPost;