export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: post
  });
};
