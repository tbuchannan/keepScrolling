import * as PostUtil from '../util/post_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_POST = 'RECEIVE_POST';

export const createPost = powst => dispatch => (
  PostUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
);

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});
