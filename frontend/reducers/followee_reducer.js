import { RECEIVE_ALL_FOLLOWEES } from '../actions/followee_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({

});

const FolloweeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FOLLOWEES:
      const followees = action.followees;
      return merge({}, followees);
    default:
      return state;
  }
};
export default FolloweeReducer;
