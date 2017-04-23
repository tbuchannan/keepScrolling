import React from 'react';
import { Link } from 'react-router';
import TextPostForm from '../posts/text_post_form';
import PhotoPostForm from '../posts/photo_post_form';
import QuotePostForm from '../posts/quote_post_form';
import LinkPostForm from '../posts/link_post_form';
import ChatPostForm from '../posts/chat_post_form';
import AudioPostForm from '../posts/audio_post_form';
import VideoPostForm from '../posts/video_post_form';

class PostBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formVisible: false, form: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ formVisible: true, form: e.target});
  }

render() {
  if (this.state.formVisible){
    return this.state.form;
  } else {
      return (
        <div className="bar">
          <TextPostForm onClick={this.handleSubmit} hidden={true}/>
          <PhotoPostForm onClick={this.handleSubmit} hidden={true}/>
          <QuotePostForm onClick={this.handleSubmit} hidden={true}/>
          <LinkPostForm onClick={this.handleSubmit} hidden={true}/>
          <ChatPostForm onClick={this.handleSubmit} hidden={true}/>
          <AudioPostForm onClick={this.handleSubmit} hidden={true}/>
          <VideoPostForm onClick={this.handleSubmit} hidden={true}/>
        </div>
      );
    }
  }
}
export default PostBar;

// <PhotoPostForm onClick={this.handleSubmit} hidden={true}/>
// <QuotePostForm onClick={this.handleSubmit} hidden={true}/>
// <LinkPostForm onClick={this.handleSubmit} hidden={true}/>
// <ChatPostForm onClick={this.handleSubmit} hidden={true}/>
// <AudioPostForm onClick={this.handleSubmit} hidden={true}/>
// <VideoPostForm onClick={this.handleSubmit} hidden={true}/>
