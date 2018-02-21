import React from 'react';
import { Link, withRouter } from 'react-router';
import PostBarContainer from '../post_bar/post_bar_container';
import PostContainer from '../post/post_container';
import RecommendedContainer from '../recommended/recommended_container';
import RadarContainer from '../radar/radar_container';

class Dashboard extends React.Component {
  componentDidMount(){
    document.body.style.background = "#36465D";
    let header = document.getElementsByClassName('parent-div-unmount');
    if (header.length >= 1) {
      document.getElementsByClassName('parent-div-unmount')[0].className=('parent-div');
    }
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="left-col">
            <PostBarContainer />
            <PostContainer />
        </div>
        <div className="right-col">
          <div className="recommendations">
            <RecommendedContainer />
          </div>
          <div className="radar">
            <RadarContainer />
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(Dashboard);
