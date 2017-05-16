import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from './post_item';

class PostIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPosts();
  }
  componentWillReceiveProps(nextProps){
    if (this.props.posts.length !== nextProps.posts.length){
      this.props.requestAllPosts();
    }
  }


  render() {
    // debugger
    // const { posts, children, removeOnePost } = this.props;
      return (
      <div className = "feed">
        <ul>
          {this.props.posts.reverse().map(post => <PostItem key={post.post_id} removeOnePost={this.props.removeOnePost} post={post} currentUser={this.props.currentUser}/>) }
        </ul>
      </div>
    );
  }
}
export default PostIndex;
