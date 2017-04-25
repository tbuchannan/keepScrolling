import React from 'react';
import { Link } from 'react-router';

const PostItem = ({ post, router }) => {
  // /debugger;
  return(
    <li className="li-post">
    <div className="user-avatar"></div>
    <div className="post">
      <div className="post-header">
        <span>{post.author}</span>
      </div>
      <div className="indiv-post-title">
        <span>{post.title}</span>
      </div>
      <div className="indiv-post-body">
        <span>{post.body}</span>
      </div>
         <h2>{post.content}</h2>
      </div>
    </li>

  );
};
export default PostItem;
