import * as FollowUtil from '../util/follows_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_ALL_FOLLOWEES = 'RECEIVE_ALL_FOLLOWEES';
export const RECEIVE_POTENTIAL_FOLLOWEES = 'RECEIVE_POTENTIAL_FOLLOWEES';

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow =>({
  type: REMOVE_FOLLOW,
  follow
  });

export const receiveAllFollowees = followees => ({
  type: RECEIVE_ALL_FOLLOWEES,
  followees
});

export const receivePotentialFollowees = followees => ({
  type: RECEIVE_POTENTIAL_FOLLOWEES,
  followees
});


export const createFollow = (id, follow) => dispatch => (
  FollowUtil.createFollow(id, follow)
  .then(follow => dispatch(receiveFollow(follow)))
);
export const removeAFollow = (id, follow) => dispatch => (
  FollowUtil.removeFollow(id, follow)
  .then(follow => dispatch(receiveFollow(follow)))
);

export const requestAllFollowees = (id) => dispatch => (
  FollowUtil.getAllFollowees(id).then(
    followees => dispatch(receiveAllFollowees(followees)))
);

export const requestPotentialFollowees = (id) => dispatch => (
  FollowUtil.getAllPotentialFollowees(id).then(
    potentials => dispatch(receivePotentialFollowees(potentials)))
);
