import React from 'react';
import { Link } from 'react-router';

const PostItem = ({ post, router }) => (
        <li>
          <h2>{post.body}</h2>
          <h2>{post.content}</h2>
          <h2>{post.title}</h2>
          <h2>{post.author}</h2>
          <hr></hr>
        </li>
  );
export default PostItem;
