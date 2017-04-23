import React from 'react';
import { Link } from 'react-router';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

  }

  handleSubmit(e){

  }

render() {
  return (
      <div>
        <input
          type="text" className="search-bar"></input>
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
