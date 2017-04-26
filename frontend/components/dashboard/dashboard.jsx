import React from 'react';
import { Link, withRouter } from 'react-router';
import PostBarContainer from '../post_bar/post_bar_container';
import PostContainer from '../post/post_container';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    document.body.style.background = "#36465D";
    document.getElementsByClassName('header-signup-unmounted')[0].className=('header-signup-mounted');
  }

  render() {
    // <FeedContainer />

    return (
      <div className="Dashboard">
          <center>
            <PostBarContainer />
            <PostContainer />
            <h1>|___bar___  | recommendations|</h1>
            <h1>|___feed___ | radar          | </h1>
            <h1>|           |                |</h1>

          </center>
      </div>
    );
  }

}

export default withRouter(Dashboard);
