import { RECEIVE_RANDOM_POST } from '../actions/random_post_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({

});

const PostReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RANDOM_POST:
      const randomPost = action.post;
      return merge({}, randomPost);
    default:
      return state;
  }
};
export default PostReducer;
