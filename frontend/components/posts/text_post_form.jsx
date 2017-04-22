import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import PostBar from '../post_bar/post_bar';

class TextPostForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render (){

    return (
        <div className="text-post-form-container">
          <div className="translucent-background"></div>
          <form className="text-post-form">
            <div className="title">
              <input type="text" placeholder="Title" />
            </div>
            <div className="body">
              <textarea placeholder="Your text here"/>
            </div>
            <br />
            <div className="modal-buttons">
              <label className="form-close-button"><span className="unselected">Close</span></label>
              <label className="form-post-button"><span className="unselected">Post</span></label>
            </div>

          </form>
        </div>
    );
  }

}

const mapStateToProps= (state, props) => {
  return {
    hidden: props.hidden
  };
};

export default connect(mapStateToProps, {})(TextPostForm);
