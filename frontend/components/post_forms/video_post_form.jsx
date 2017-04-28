import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import PostBar from '../post_bar/post_bar';
import { createPost, createVideoPost } from '../../actions/post_actions';
import { hashHistory } from 'react-router';

class VideoPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.currentUser, content: "video", source: "",
      videoFile: null, author_id: props.currentUser.id, hidden: props.hidden,
      body: ""
    };
    this.makePost = this.makePost.bind(this);
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleVideo = this.handleVideo.bind(this);
  }

  showForm(){
    this.setState({"hidden": false});
  }

  closeForm(e) {
    e.preventDefault();
    this.setState({"hidden": true});
  }

  handleChange(field){
    return (e)=>{
      this.setState({[field]: e.target.value});
    };
  }

  handleVideo(e){
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ source: reader.result, videoFile: file});
    }.bind(this);
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ source: "", videoFile: null });
    }
  }

  makePost(e) {
    e.preventDefault();
    let file = this.state.videoFile;
    var formData = new FormData();
    formData.append('post[author_id]', this.state.author_id);
    formData.append('post[image]', file);
    formData.append('post[body]', this.state.body);
    formData.append('post[content]', this.state.content);
    this.props.createVideoPost(formData);
    this.closeForm(e);
  }
  render (){
    if (this.state.hidden){
      return(
          <div className="mini-block" onClick={this.showForm}>
            <label className="mini-button">
              <div className="video-icon icon-hover picture-icons">
              </div>
              <span className="mini-button-title">Video</span>
            </label>
          </div>
      );
    }else {
      return (
          <div className="text-post-form-container">
            <div className="translucent-background"></div>
            <form className="text-post-form video-post-form video"
              onSubmit={this.makePost}>
              <span className="current-user-post-bar">{this.props.currentUser.username}</span>
              <div className="video-form">
                <input type="file" className="video-input" accept="video/*" onChange={this.handleVideo} />
              </div>

              <div className="body">
                <textarea placeholder="Add a caption, if you like" onChange={this.handleChange('body')} />
              </div>
              <div className="tags">
              </div>
              <br />
              <div className="modal-buttons">
                <button className="form-close-button"
                  onClick={this.closeForm}>
                  <span className="unselected">Close</span>
                </button>
                <button className="form-post-button"
                  type="submit"
                  disabled={!this.state.source}>
                  <span className="unselected">Post</span>
                </button>
              </div>
            </form>
          </div>
      );
    }
  }
}

const mapStateToProps= (state, props) => {
  return {
    currentUser: state.session.currentUser
  };
};
  const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    createVideoPost: post => dispatch(createVideoPost(post))
  });


export default connect(mapStateToProps, mapDispatchToProps)(VideoPostForm);
