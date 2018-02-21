import React from 'react';
import { Link, withRouter } from 'react-router';
import RecommendedItem from '../recommended/recommended_item';

class Radar extends React.Component {

  componentDidMount(){
    this.props.requestRandomPost(this.props.currentUser.id);
  }


  render(){
    let buttonHide = null;
    if (this.props.followees[this.props.randomPost.id]){
      buttonHide = 'hidden';
    }
      return (
      <div className="follow-feed">
        <span className="radar-title">RADAR</span>
        <ul>
          <RecommendedItem
            key={this.props.randomPost.post_id}
            potential={this.props.randomPost}
            currentUser={this.props.currentUser}
            createFollow={this.props.createFollow}
            followable={true}
            hidden={buttonHide}
            followees={this.props.followees}
            radar={true}
          />
          <div className={"radar-post"}>
            <div className="radar-photo">
              <img src={this.props.randomPost.image_url} />
            </div>
          </div>
          <div className="post-footer"></div>
        </ul>
      </div>
    );
  }
}



export default Radar;
