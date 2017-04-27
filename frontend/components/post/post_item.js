import React from 'react';
import { Link } from 'react-router';

const PostItem = ({ post, router }) => {
  let picture = post.image_url.includes("/assets/default-avatar") ? null :
  post.image_url;
  debugger;
  if (post.content === 'link'){
    let external_link = "http://" + post.source;
    return (
      <li className="li-post">
      <div className="user-avatar">
        <div className="user-image-stick">
          <img src={post.avatar_url} />
        </div>
      </div>
      <div className={"post"}>
        <div className="post-header">
          <span>{post.username}</span>
        </div>
        <div className="link-container">
          <a href={external_link} >{post.source}</a>
            <div className="link-title">
              <span>{post.title}
                <span className='huge-pointer'>  ></span>
              </span>
            </div>
            <div className="link-summary">
              <span>{post.summary}</span>
            </div>
          </div>
          <div className = "indiv-post-description">
            {post.body}
          </div>
      </div>
      </li>
    );

  }else {
    return(
      <li className="li-post">
      <div className="user-avatar">
        <div className="user-image-stick">
          <img src={post.avatar_url} />
        </div>
      </div>
      <div className={"post"}>
        <div className="post-header">
          <span>{post.username}</span>
        </div>
        <div className="indiv-post-title">
          <span>{post.title}</span>
        </div>
        <div className="indiv-post-body">

          <div className="picture-post-photo">
            <img src={picture} />
          </div>
          <div className = "body-caption">
            <span>{post.body}</span>
          </div>
        </div>
           <h2>{post.content}</h2>
        </div>
      </li>

    );
  }
};
export default PostItem;
