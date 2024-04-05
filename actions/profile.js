import Request from "../utilities/request";

export const setProfile = data => ({
  type: "SET_PROFILE",
  payload: data
});

export const getProfileSummary = () => {
  return dispatch => {
    Request({
      url: process.env.apiUrl + "/profile/home",
      method: "get",
      needToken: true
    })
      .then(response => {
        dispatch(
          setProfile({
            summary: response.data.data
          })
        );
      })
      .catch(error => {});
  };
};

export const getProfileInitial = () => {
  return async dispatch => {
    await Request({
      url: process.env.apiUrl + "/profile/home/items",
      method: "get",
      needToken: true
    })
      .then(response => {
        dispatch(
          setProfile({
            initial: response.data.data
          })
        );
      })
      .catch(error => {});
  };
};
