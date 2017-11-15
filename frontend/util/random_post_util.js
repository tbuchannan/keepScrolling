export const getRandomPost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/random_post`,
    error: (err) => console.log(err)
  });
};
