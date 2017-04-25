import { RECEIVE_POST, RECEIVE_ALL_POSTS } from '../actions/post_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({

});

const PostReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      const posts = action.posts;
      return merge({}, posts);
    case RECEIVE_POST:
      const post = action.post;
      return merge({}, state, { post });
    default:
      return state;
  }
};
export default PostReducer;
