import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from './post_item';

class PostIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPosts();
  }

  render() {
    const { posts, children } = this.props;
      return (
      <div className = "feed">
        <ul>
          {posts.reverse().map(post => <PostItem key={post.id} post={post}/>) }
        </ul>
      </div>
    );
  }
}
export default PostIndex;
