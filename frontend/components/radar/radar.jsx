import React from 'react';
import { Link, withRouter } from 'react-router';
import RecommendedItem from '../recommended/recommended_item';

class Radar extends React.Component {

  componentDidMount(){
    this.props.requestRandomPost(this.props.current_user.id);
    this.props.requestAllFollowees(this.props.current_user.id);
  }

  render(){
      return (
      <div>
        <span className="radar-title">RADAR</span>
        <RecommendedItem
          key={this.props.randomPost.author}
          potential={this.props.randomPost}
          current_user={this.props.current_user}
          followUser={this.props.createFollow}/>
          <div className="radar-post">
            <div className="radar-photo">
              <img src={this.props.randomPost.image_url} />
            </div>
          </div>
          <div className="post-footer">

          </div>
      </div>
    );
  }


}



export default Radar;
