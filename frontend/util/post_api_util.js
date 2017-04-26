export const createPost = (post) => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post
  });
};

export const getAllPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts',
    error: (err) => console.log(err)
  });
};

export const getOnePost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`
  });
};
