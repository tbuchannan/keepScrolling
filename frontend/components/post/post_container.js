import { connect } from 'react-redux';
import {requestAllPosts, requestOnePost, removeOnePost } from '../../actions/post_actions';
import {selectAllPosts } from '../../reducers/selector';
import PostIndex from './post_index';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: selectAllPosts(state),
    currentUser: state.session.currentUser
  };
};
const mapDispatchToProps = (dispatch) => {
  return{
    requestOnePost: (id) => dispatch(requestOnePost(id)),
    requestAllPosts: () => dispatch(requestAllPosts()),
    removeOnePost: (post) => dispatch(removeOnePost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
