import { RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions';
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
    case REMOVE_POST:
      debugger;
      const nextState = merge({}, state);
      delete nextState[action.post.id];
      return nextState;
    default:
      return state;
  }
};
export default PostReducer;
