import { values } from 'lodash';

export const selectAllPosts = ({ posts }) => {
  return values(posts);
};
export const selectAllPotentials = ({ potentials }) => {
  return values(potentials);
};

export const selectRandomPost = ({ randomPost }) => {
  return randomPost;
};
