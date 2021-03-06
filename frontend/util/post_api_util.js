export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post
  });
};
export const removePost = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${id}`
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
export const createAudioPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post,
    processData: false,
    contentType: false
  });
};
export const createVideoPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post,
    processData: false,
    contentType: false
  });
};

export const getAllPosts = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/followed_posts`,
    error: (err) => console.log(err)
  });
};

export const getOnePost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`
  });
};
