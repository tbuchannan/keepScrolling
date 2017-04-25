import { connect } from 'react-redux';
import {requestAllPosts, requestOnePost } from '../../actions/post_actions';
import {selectAllPosts } from '../../reducers/selector';
import PostIndex from './post_index';

const mapStateToProps = (state, ownProps) => {
  return { posts: selectAllPosts(state)};
};
const mapDispatchToProps = (dispatch) => {
  return{
    requestOnePost: (id) => dispatch(requestOnePost(id)),
    requestAllPosts: () => dispatch(requestAllPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
