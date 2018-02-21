import React from 'react';

const LinkPost = props => {
  const { post } = props;
  let externalLink = post.source.includes("://") ? post.source : 'https://' + post.source;
  return (
    <div>
      <div className="link-container">
        <a className= "link-post-link" target="_blank" href={ externalLink } >{post.source}
          <div>
            <div className="link-title">
              <span>{ post.title }
                <span className='huge-pointer'>  ></span>
              </span>
            </div>
            <div className="link-summary">
              <span>{ post.summary }</span>
            </div>
          </div>
        </a>
      </div>
      <div className = "indiv-post-description">
        {post.body}
      </div>
    </div>
  );

};

export default LinkPost;