import React from 'react';
import { Link } from 'react-router';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.activateText = this.activateText.bind(this);
  }

  handleSubmit(e){

  }

  activateText(){
    $('#fa').click( function() {
      $('#search-bar-text').focus();
    });
  }

render() {
  return (
      <div className="search-bar">
        <i className="fa fa-search" onClick={this.activateText}aria-hidden="true"></i>
        <input
          type="text" className="search-bar-text" placeholder="Search..."></input>
      </div>
    );
  }
}
export default SearchBar;
