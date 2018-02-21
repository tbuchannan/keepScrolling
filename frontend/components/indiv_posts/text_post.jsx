import React from 'react';

const TextPost = props => {
  const { post } = props;
  return (
    <div>
      <div className="indiv-post-title">
        <span>{ post.title }</span>
      </div>
      <div className="indiv-post-body">
        <div className = "body-caption">
          <span>{ post.body }</span>
        </div>
      </div>

    </div>
  );
};

export default TextPost;

