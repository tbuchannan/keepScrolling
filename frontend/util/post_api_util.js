export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post
  });
};
export const createPhotoPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post,
    processData: false,
    contentType: false
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
