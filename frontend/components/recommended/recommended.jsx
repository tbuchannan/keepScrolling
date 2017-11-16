import React from 'react';
import { Link, withRouter } from 'react-router';
import RecommendedItem from './recommended_item';

class Recommended extends React.Component {
  componentDidMount(){
    // this.props.requestAllFollowees(this.props.current_user.id);
    this.props.requestPotentialFollowees(this.props.current_user.id);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.potentials.length < 4 && this.props.potentials.length >= 4){
      this.props.requestPotentialFollowees(this.props.current_user.id);
    }
  }

  render() {
    let potentialList = this.props.potentials.slice(0,4);
      return (
      <div className = "follow-feed">
        <span className="radar-title">RECOMMENDED USERS</span>
        <ul>
          {potentialList.map((potential, idx) => <li><RecommendedItem key={idx} potential={potential} current_user={this.props.current_user} followUser={this.props.createFollow}/></li>) }
        </ul>
      </div>
    );
  }
}
export default Recommended;
