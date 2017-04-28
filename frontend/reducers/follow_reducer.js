import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({

});

const FollowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOW:
    // debugger;
      const followees = action.followees;
      return merge({}, state, { followees });
    case REMOVE_FOLLOW:
      const nextState = merge({}, state);
      delete nextState[action.followees.id];
      return nextState;
    default:
      return state;
  }
};
export default FollowReducer;
