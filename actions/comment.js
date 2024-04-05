import Request from "../utilities/request";
export const setComment = data => ({
  type: "SET_COMMENT",
  payload: data
});

export const getComments = (id, params = {}) => {
  return async dispatch => {
    dispatch(
      setComment({
        loading: true
      })
    );
    await Request({
      url: process.env.apiUrl + "/products/" + id + "/comments",
      method: "get",
      params: params
    })
      .then(response => {
        dispatch(
          setComment({
            loading: false,
            data: response.data.data,
            meta: response.data.meta,
            cache: true
          })
        );
      })
      .catch(error => {});
  };
};
export const getUserComments = () => {
  return async dispatch => {
    await Request({
      url: process.env.apiUrl + "/profile/comments",
      method: "get",
      needToken: true
    })
      .then(response => {
        dispatch(
          setComment({
            userComments: response.data.data
          })
        );
      })
      .catch(error => {});
  };
};
export const deleteComment = id => {
  return async dispatch => {
    await Request({
      url: process.env.apiUrl + "/comments/" + id,
      method: "delete",
      needToken: true
    })
      .then(response => {
        return true;
      })
      .catch(error => {});
  };
};
