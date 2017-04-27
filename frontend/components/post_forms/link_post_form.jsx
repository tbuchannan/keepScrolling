import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import PostBar from '../post_bar/post_bar';
import { createPost } from '../../actions/post_actions';
import { hashHistory } from 'react-router';
import DynamicLink from '../dynamic_link/dynamic_link';

class LinkPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.currentUser, source: "", title: "", summary: "", content: "link",
      author_id: props.currentUser.id, hidden: props.hidden, body: ""
    };
    this.makePost = this.makePost.bind(this);
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validLink = this.validLink.bind(this);
  }

  showForm(){
    this.setState({"hidden": false});
  }

  closeForm(e) {
    e.preventDefault();
    this.setState({"hidden": true, source: "", title: "", summary: "", body: ""});
  }

  handleChange(field){
    return (e)=>{
      this.setState({[field]: e.target.value});
    };
  }

  validLink(link){

    if (link.match(/\.\w{2}/) === null || link.includes(' ')) {
      return false;
    }
    else {
      return true;
    }
  }

  makePost(e) {
    e.preventDefault();
    const post = this.state;
    this.props.createPost({post});
    this.closeForm(e);
    }

  render (){
    if (this.state.hidden){
      return(
          <div className="mini-block" onClick={this.showForm}>
            <label className="mini-button">
              <div className="link-icon icon-hover picture-icons">
              </div>
              <span className="mini-button-title">Link</span>
            </label>
          </div>
        );
    } else if (this.validLink(this.state.source)){
        return (
        <div className="text-post-form-container">
          <div className="translucent-background"></div>
          <form className="text-post-form link" onSubmit={this.makePost}>
            <span className="current-user-post-bar">{this.props.currentUser.username}</span>
            <div className = "dynamic-form-container">
              <a href={this.state.source} className="dynamic-link-title">{this.state.source}</a>
              <input type="text" className="dynamic-title-user-entry" placeholder="Enter a title" onChange={this.handleChange("title")} />
              <input type="text" placeholder="Enter a summary" className="dynamic-summary-user-entry"  onChange={this.handleChange("summary")}/>
              <textarea className="dynamic-description-entry" placeholder="Add a description, if you like" onChange={this.handleChange("body")}/>
            </div>
            <div className="modal-buttons">

              <button className="form-close-button" onClick={this.closeForm}>
                <span className="unselected">Close</span>
              </button>

              <button className="form-post-button" type="submit" disabled={!this.state.source}>
                <span className="unselected">Post</span>
              </button>
            </div>
          </form>
        </div>
        );} else {
            return (
            <div className="text-post-form-container">
              <div className="translucent-background"></div>
              <div className="text-post-form link">
                <span className="current-user-post-bar">{this.props.currentUser.username}</span>
                <input type="textarea" className= "dynamic-link-textarea" placeholder="Type or paste a URL" onChange={this.handleChange("source")} />
              </div>
            </div>
            );
          }

        // <div className="text-post-form-container">
        //   <div className="translucent-background"></div>
        //   <div className="text-post-form link" onSubmit={this.makePost}>
        //     <span className="current-user-post-bar">{this.props.currentUser.username}</span>
        //
        //
        //     <div className="dynamic-link-style">
        //     </div>
        //
        //
        //
        //   </div>
        // </div>
    }
  }

const mapStateToProps= (state, props) => {
  return {
    currentUser: state.session.currentUser
  };
};
  const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post))
  });


export default connect(mapStateToProps, mapDispatchToProps)(LinkPostForm);


//
//
// <input type="text" placeholder="Title" onChange={this.handleChange('title')} />
// </div>
// <div className="body">
//   <textarea placeholder="Your text here" onChange={this.handleChange('body')} />
// </div>
// <div className="tags">
// </div>
// <br />


// <div className="modal-buttons">
//
//   <button className="form-close-button" onClick={this.closeForm}>
//     <span className="unselected">Close</span>
//   </button>
//
//   <button className="form-post-button" type="submit" disabled={!this.state.link_url}>
//     <span className="unselected">Post</span>
//   </button>
