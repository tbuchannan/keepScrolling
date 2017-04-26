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
        <div className="left-col">
            <PostBarContainer />
            <PostContainer />
        </div>
        <div className="right-col">
          <div className="recommendations">
            <span>Recommended Blogs</span>
          </div>
          <div className="radar">
            <span>Radar</span>
          </div>
        </div>

      </div>
    );
  }

}

export default withRouter(Dashboard);
