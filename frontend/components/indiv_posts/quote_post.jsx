import React from 'react';

const QuotePost = props => {
  const { post } = props;
  return (
    <div>
      <div className="indiv-post-title">
        <span>{ post.body }</span>
      </div>
      <div className="indiv-post-body">
        <div className = "body-caption">
          <span>{ post.title }</span>
        </div>
      </div>
    </div>
  );
};

export default QuotePost;
