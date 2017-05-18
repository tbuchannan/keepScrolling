import React from 'react';
import { Link, withRouter } from 'react-router';
import RecommendedItem from './recommended_item';

class Recommended extends React.Component {
  componentDidMount(){
    // debugger
    // this.props.requestAllFollowees(this.props.current_user.id);
    this.props.requestPotentialFollowees(this.props.current_user.id);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.followees.length !== nextProps.followees.length){
      this.props.requestPotentialFollowees(nextProps.current_user.id);
    }
  }


  render() {
      return (
      <div className = "follow-feed">
        <ul>
          {this.props.followees.map((potential, idx) => <RecommendedItem key={idx} potential={potential}/>) }
        </ul>
      </div>
    );
  }
}
export default Recommended;
