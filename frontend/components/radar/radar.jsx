import React from 'react';
import { Link, withRouter } from 'react-router';

class Radar extends React.Component {

  componentDidMount(){
    this.props.requestRandomPost(this.props.current_user.id);
  }

  render(){
    return (
      <div>{this.props.randomPost.image_url}</div>
    );
  }


}



export default Radar;
