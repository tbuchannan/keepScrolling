import * as PostUtil from '../util/post_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const removePost = post =>({
  type: REMOVE_POST,
  post
  });

export const requestAllPosts = (id) => dispatch => (
  PostUtil.getAllPosts(id).then(
    posts => dispatch(receiveAllPosts(posts)))
);

export const requestOnePost = (id) => dispatch => (
  PostUtil.getOnePost(id).then(
    post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => (
  PostUtil.createPost(post)
  .then(post => dispatch(receivePost(post)))
);

export const removeOnePost = id => dispatch => (
  PostUtil.removePost(id).then(post => dispatch(removePost(post)))
);

export const createPhotoPost = post => dispatch => (
  PostUtil.createPhotoPost(post)
  .then(post => dispatch(receivePost(post)))
);

export const createAudioPost = post => dispatch => (
  PostUtil.createAudioPost(post)
  .then(post => dispatch(receivePost(post)))
);

export const createVideoPost = post => dispatch => (
  PostUtil.createVideoPost(post)
  .then(post => dispatch(receivePost(post)))
);
