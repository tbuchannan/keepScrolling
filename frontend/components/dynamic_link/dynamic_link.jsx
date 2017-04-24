import React from 'react';
import { Link } from 'react-router';


class DynamicLink extends React.Component {
  constructor(props){
    super(props);
    this.state = props.state;
    this.handleChange = this.handleChange.bind(this);
    this.validLink = this.validLink.bind(this);
  }



handleChange(e){
  e.preventDefault();
  // debugger
  this.setState({"link_url": e.target.value});

}

validLink(link){
  if (link.match(/\.\w{2}/) === null) {
    return false;
  }
  else {
    return true;
  }
}

render(){
  if (this.validLink(this.state.link_url)){
    return (
      <div>
        <a href={this.state.link_url} className="dynamic-link-title">{this.state.link_url}</a>
        <input type="text" className="dynamic-title-user-entry" placeholder="Enter a title" />
        <input type="text" placeholder="Enter a summary" className="dynamic-summary-user-entry"  />
        <textarea placeholder="Add a description, if you like" />
      </div>
    );
  } else {
      return (
        <div>
          <input type="textarea" placeholder="Type or paste a URL" onChange={this.handleChange} />
        </div>
      );
    }
  }
}

export default DynamicLink;
