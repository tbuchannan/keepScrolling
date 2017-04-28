import React from 'react';
import { Link, withRouter } from 'react-router';
import RecommendedItem from './recommended_item';

class Recommended extends React.Component {
  componentDidMount(){
    this.props.requestAllFollowees(this.props.current_user.id);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.followees.length !== nextProps.followees.length){
      this.props.requestAllFollowees();
    }
  }


  render() {
    // debugger;
      return (
      <div className = "follow-feed">
        <ul>
          {this.props.followees.map(follow => <RecommendedItem key={follow.followee_id} follow={follow}/>) }
        </ul>
      </div>
    );
  }
}
export default Recommended;
