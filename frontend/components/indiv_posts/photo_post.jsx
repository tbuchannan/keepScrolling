import React from 'react';

const PhotoPost = props => {
  const { image, post } = props;
  return (
    <div>
      <div className="indiv-post-title">
        <span>{ post.title }</span>
      </div>
      <div className="indiv-post-body">

        <div className="picture-post-photo">
          <img src={ image } />
        </div>
        <div className = "body-caption">
          <span>{ post.body }</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoPost;