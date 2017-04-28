export const createFollow = (id) => {
  return $.ajax({
      method: 'POST',
      url: `/api/users/${id}/follows`,
  });
};
export const removeFollow = (id) => {
  return $.ajax({
      method: 'DELETE',
      url: `/api/users/${id}/follows`,
  });
};

export const getAllFollowees = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/follows`
  });
};
