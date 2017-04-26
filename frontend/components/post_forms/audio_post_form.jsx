import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import PostBar from '../post_bar/post_bar';
import { createPost } from '../../actions/post_actions';
import { hashHistory } from 'react-router';

class AudioPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.currentUser.username, photo_url: "",
      author_id: props.currentUser.id, hidden: props.hidden
    };
    this.makePost = this.makePost.bind(this);
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
              <div className="audio-icon icon-hover picture-icons">
              </div>
              <span className="mini-button-title">Audio</span>
            </label>
          </div>
      );
    // }else {
    //   return (
    //       <div className="text-post-form-container">
    //         <div className="translucent-background"></div>
    //         <form className="text-post-form"
    //           onSubmit={this.makePost}>
    //           <span className="current-user-post-bar">{this.props.currentUser.username}</span>
    //           <div className="title">
    //             <input type="text" placeholder="Title" onChange={this.handleChange('title')} />
    //           </div>
    //           <div className="body">
    //             <textarea placeholder="Your text here" onChange={this.handleChange('body')} />
    //           </div>
    //           <div className="tags">
    //           </div>
    //           <br />
    //           <div className="modal-buttons">
    //             <button className="form-close-button"
    //               onClick={this.closeForm}>
    //               <span className="unselected">Close</span>
    //             </button>
    //             <button className="form-post-button"
    //               type="submit"
    //               disabled={!this.state.body && !this.state.title}>
    //               <span className="unselected">Post</span>
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //   );
    // }
  }
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


export default connect(mapStateToProps, mapDispatchToProps)(AudioPostForm);
