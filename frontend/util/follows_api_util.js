export const createFollow = (id, follow) => {
  return $.ajax({
      method: 'POST',
      url: `/api/users/${id}/follows`,
      data: follow
  });
};
export const removeFollow = (user_id, id) => {
  return $.ajax({
      method: 'DELETE',
      url: `/api/users/${user_id}/follows/${id}`
  });
};

export const getAllFollowees = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/follows`
  });
};
