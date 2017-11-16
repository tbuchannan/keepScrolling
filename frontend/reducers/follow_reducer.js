import {RECEIVE_POTENTIAL_FOLLOWEES, RECEIVE_ALL_FOLLOWEES, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({

});

const FollowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOW:
      const nextState = merge({}, state);
      delete nextState[action.follow.followee_id];
      return nextState;
    case REMOVE_FOLLOW:
      // const nextState = merge({}, state);
      // delete nextState[action.follow.followee_id];
      // return nextState;
      break;
    case RECEIVE_POTENTIAL_FOLLOWEES:
      const potentials = action.followees;
      return merge({}, potentials);
    default:
      return state;
  }
};
export default FollowReducer;
