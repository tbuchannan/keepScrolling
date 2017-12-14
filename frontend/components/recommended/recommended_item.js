import React from 'react';
import { Link } from 'react-router';

class RecommendedItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hideButton: false,
    };
    this.followUser = this.followUser.bind(this);
    this.showButton = this.showButton.bind(this);
  }

  followUser(currentUser, follow){
    this.props.createFollow(currentUser, follow);
    this.showButton();
  }

  showButton() {
    this.setState({ "hideButton": true });
  }
  render(){
    let visibility;
    if(this.props.followees[this.props.potential.id] || (this.state.hideButton && this.props.radar)) {
      visibility = "hidden";
    } else {
      visibility = "follow-button";
    }
    return (
      <li>
        <div className="radar-item">
          <div className= "radar-img-container">
            <div className="image-container">
              <img className="radar-img" src={this.props.potential.avatar} />
            </div>
            <span className="radar-username">{this.props.potential.username}</span>
          </div>
          <div className= "radar-button-container">
            <label
              onClick={() => this.followUser(
                this.props.currentUser.id, {follow:{follower_id: this.props.currentUser.id,
                  followee_id: this.props.potential.id }})} className={visibility}>
              <span className="radar-plus">+</span>
            </label>
          </div>
        </div>
      </li>
    );
  }
}


export default RecommendedItem;
