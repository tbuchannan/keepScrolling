import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import PostBar from '../post_bar/post_bar';
import { createPost, createPhotoPost } from '../../actions/post_actions';
import { hashHistory } from 'react-router';

class PhotoPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.currentUser, content: "photo",
      author_id: props.currentUser.id, hidden: props.hidden, source: "",
      imageFile: null, body: ""
    };
    this.makePost = this.makePost.bind(this);
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePicture = this.handlePicture.bind(this);
  }

  showForm(){
    this.setState({"hidden": false});
  }

  closeForm(e) {
    e.preventDefault();
    this.setState({"hidden": true, 'source': "", imageFile: null});
  }

  handlePicture(e) {
    let reader = new FileReader();
    let file = e.currentTarget.files[0];
    reader.onloadend = function() {
      this.setState({ source: reader.result, imageFile: file});
    }.bind(this);
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ source: "", imageFile: null });
    }
  }

  handleChange(field){
    return (e)=>{
        this.setState({[field]: e.target.value});
      };
    }

  makePost(e) {
    e.preventDefault();
    let file = this.state.imageFile;
    var formData = new FormData();
    formData.append('post[author_id]', this.state.author_id);
    formData.append('post[image]', file);
    formData.append('post[body]', this.state.body);
    formData.append('post[content]', this.state.content);

    this.props.createPhotoPost(formData);
    this.closeForm(e);
  }
  render (){
    if (this.state.hidden){
      return(
          <div className="mini-block" onClick={this.showForm}>
            <label className="mini-button">
              <div className="photo-icon icon-hover picture-icons">
              </div>
              <span className="mini-button-title">Photo</span>
            </label>
          </div>
      );
    }else {
      return (
          <div className="text-post-form-container">
            <div className="translucent-background"></div>
            <form className="text-post-form photo-post-form"
              onSubmit={this.makePost}>
              <span className="current-user-post-bar">{this.props.currentUser.username}</span>

              <div className="photo-form">
                <input type="file" className="photo-input" accept="image/*" onChange={this.handlePicture} />
              </div>
              <div className="preview-image-form">
                <img src={this.state.source} />
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
    createPhotoPost: post => dispatch(createPhotoPost(post))
  });


export default connect(mapStateToProps, mapDispatchToProps)(PhotoPostForm);
