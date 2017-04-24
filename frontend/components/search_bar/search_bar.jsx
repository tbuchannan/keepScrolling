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

// <i class="fa fa-search" aria-hidden="true"></i>
// <PhotoPostForm onClick={this.handleSubmit} hidden={true}/>
// <QuotePostForm onClick={this.handleSubmit} hidden={true}/>
// <LinkPostForm onClick={this.handleSubmit} hidden={true}/>
// <ChatPostForm onClick={this.handleSubmit} hidden={true}/>
// <AudioPostForm onClick={this.handleSubmit} hidden={true}/>
// <VideoPostForm onClick={this.handleSubmit} hidden={true}/>
