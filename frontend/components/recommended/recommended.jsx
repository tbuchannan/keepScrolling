import React from 'react';
import { Link, withRouter } from 'react-router';
import RecommendedItem from './recommended_item';

class Recommended extends React.Component {
  componentDidMount(){
    // this.props.requestAllFollowees(this.props.current_user.id);
    this.props.requestPotentialFollowees(this.props.current_user.id);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.followees.length < 4 && this.props.followees.length >= 4){
      this.props.requestPotentialFollowees(this.props.current_user.id);
    }
  }

  render() {
    let potentialList = this.props.followees.slice(0,4);
      return (
      <div className = "follow-feed">
        <span className="radar-title">RECOMMENDED USERS</span>
        <ul>
          {potentialList.map((potential, idx) => <RecommendedItem key={idx} potential={potential} current_user={this.props.current_user} followUser={this.props.createFollow}/>) }
        </ul>
      </div>
    );
  }
}
export default Recommended;
