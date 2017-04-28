import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import PostBar from '../post_bar/post_bar';
import { createPost } from '../../actions/post_actions';
import { hashHistory } from 'react-router';

class QuotePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.currentUser, body: "", title: "", content: "quote",
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
    this.setState({"hidden": true, "body": "", "title": ""});
  }

  handleChange(field){
    return (e)=>{
      let currentVal = e.target.value;
      if (currentVal.endsWith('"')) {
        currentVal = currentVal.slice(0, -1);
      } else {
        currentVal = `"${e.target.value}"`;
      }
      let formattedString = `"${currentVal.replace(/\"/g, '')}"`;
      formattedString === '""' ? this.setState({[field]: ""}) :
      this.setState({[field]: formattedString});
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
              <div className="quote-icon icon-hover picture-icons">
              </div>
              <span className="mini-button-title">Quote</span>
            </label>
          </div>
      );
    }else {
      return (
          <div className="text-post-form-container quote">
            <div className="translucent-background"></div>
            <form className="text-post-form "
              onSubmit={this.makePost}>
              <span className="current-user-post-bar">{this.state.author.username}</span>
              <div className="title">
                <textarea placeholder='"Quote"' onChange={this.handleChange('body')} value={this.state.body}/>
              </div>
              <div className="body">
                <textarea placeholder="Your text here" onChange={this.handleChange('title')} />
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
                  disabled={!this.state.body}>
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
    createPost: post => dispatch(createPost(post))
  });


export default connect(mapStateToProps, mapDispatchToProps)(QuotePostForm);
