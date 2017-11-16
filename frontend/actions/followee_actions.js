import * as FolloweeUtil from '../util/followee_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_ALL_FOLLOWEES = 'RECEIVE_ALL_FOLLOWEES';

export const receiveAllFollowees = followees => ({
  type: RECEIVE_ALL_FOLLOWEES,
  followees
});

export const requestAllFollowees = (id) => dispatch => (
  FolloweeUtil.getAllFollowees(id).then(
    followees => dispatch(receiveAllFollowees(followees)))
);
