import { values } from 'lodash';

export const selectAllPosts = ({ posts }) => {
  return values(posts);
};
export const selectAllFollowees = ({ followees }) => {
  return values(followees);
};

export const selectRandomPost = ({ randomPost }) => {
  return randomPost;
};
