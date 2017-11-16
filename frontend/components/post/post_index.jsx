import React from 'react';
import { Link, withRouter } from 'react-router';
import PostItem from './post_item';

class PostIndex extends React.Component {
  componentDidMount(){
    this.props.requestAllPosts(this.props.currentUser.id);
  }
  componentWillReceiveProps(nextProps){
    if (this.props.posts.length !== nextProps.posts.length){
      this.props.requestAllPosts(this.props.currentUser.id);
    }
  }


  render() {
      return (
      <div className = "feed">
        <ul>
          {this.props.posts.reverse().map((post, idx) => <PostItem key={idx} removeOnePost={this.props.removeOnePost} post={post} currentUser={this.props.currentUser}/>) }
        </ul>
      </div>
    );
  }
}
export default PostIndex;
