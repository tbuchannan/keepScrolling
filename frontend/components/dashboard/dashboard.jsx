import React from 'react';
import { Link, withRouter } from 'react-router';
import TextPostForm from '../posts/text_post_form';

class Dashboard extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillUpdate(newProps, nextState){

  }



  render() {
    return (
      <div className="Dashboard">
          <TextPostForm />
          <center>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          </center>
      </div>
    );

  }

}

export default withRouter(Dashboard);
