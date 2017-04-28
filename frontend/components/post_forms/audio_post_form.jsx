import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import PostBar from '../post_bar/post_bar';
import { createPost, createAudioPost } from '../../actions/post_actions';
import { hashHistory } from 'react-router';

class AudioPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.currentUser, content: "audio", source: "",
      audioFile: null, author_id: props.currentUser.id, hidden: props.hidden,
      body: ""
    };
    this.makePost = this.makePost.bind(this);
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
  }

  showForm(){
    this.setState({"hidden": false});
  }

  closeForm(e) {
    e.preventDefault();
    this.setState({"hidden": true, source: "", imageFile: null});
  }

  handleChange(field){
    return (e)=>{
      this.setState({[field]: e.target.value});
    };
  }

  handleAudio(e) {
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ source: reader.result, audioFile: file});
    }.bind(this);
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ source: "", audioFile: null });
    }
  }

  makePost(e) {
    e.preventDefault();
    let file = this.state.audioFile;
    var formData = new FormData();
    formData.append('post[author_id]', this.state.author_id);
    formData.append('post[image]', file);
    formData.append('post[body]', this.state.body);
    formData.append('post[content]', this.state.content);

    this.props.createAudioPost(formData);
    this.closeForm(e);
  }
  render (){
    if (this.state.hidden){
      return(
          <div className="mini-block" onClick={this.showForm}>
            <label className="mini-button">
              <div className="audio-icon icon-hover picture-icons">
              </div>
              <span className="mini-button-title">Audio</span>
            </label>
          </div>
      );
    }else {
      return (
          <div className="text-post-form-container">
            <div className="translucent-background"></div>
            <form className="text-post-form audio-post-form"
              onSubmit={this.makePost}>
              <span className="current-user-post-bar">{this.props.currentUser.username}</span>

              <div className="audio-form">
                <input type="file" className="audio-input" accept="audio/*" onChange={this.handleAudio} />
              </div>
              <div className="preview-image-form">

              </div>

              <div className="body">
                <textarea placeholder="Add a caption, if you like" />
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
    createAudioPost: post => dispatch(createAudioPost(post))

  });


export default connect(mapStateToProps, mapDispatchToProps)(AudioPostForm);
