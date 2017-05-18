import {RECEIVE_POTENTIAL_FOLLOWEES, RECEIVE_ALL_FOLLOWEES, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({

});

const FollowReducer = (state = {}, action) => {
  Object.freeze(state);
  // console.log("This is the Follow REDUCER")
  switch (action.type) {
    case RECEIVE_FOLLOW:
      const followee = action.followee;
      return merge({}, state, { followees });
    case REMOVE_FOLLOW:
      const nextState = merge({}, state);
      delete nextState[action.followees.id];
      return nextState;
    case RECEIVE_ALL_FOLLOWEES:
    const followees = action.followees;
      return merge({}, followees);
    case RECEIVE_POTENTIAL_FOLLOWEES:
      const potentials = action.followees;
      return merge({}, potentials);
    default:
      return state;
  }
};
export default FollowReducer;
