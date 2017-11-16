import * as RandomUtil from '../util/random_post_api_util';
import { hashHistory } from 'react-router';


export const RECEIVE_RANDOM_POST = 'RECEIVE_RANDOM_POST';

export const receiveRandomPost = post => ({
  type: RECEIVE_RANDOM_POST,
  post
});

export const requestRandomPost = (id) => dispatch => (
  RandomUtil.getRandomPost(id).then(
    post => dispatch(receiveRandomPost(post)))
);
