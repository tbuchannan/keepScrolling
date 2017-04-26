import React from 'react';
import { Link } from 'react-router';

const PostItem = ({ post, router }) => {
  let picture = post.image_url.includes("/assets/default-avatar") ? null :
  post.image_url;

  return(
    <li className="li-post">
    <div className="user-avatar">
      <img src={post.avatar_url} />
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
};
export default PostItem;
