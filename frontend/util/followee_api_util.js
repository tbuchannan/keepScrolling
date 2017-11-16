export const getAllFollowees = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/follows`
  });
};
