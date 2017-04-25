import { values } from 'lodash';

export const selectAllPosts = ({ posts }) => {
  return values(posts);
};
