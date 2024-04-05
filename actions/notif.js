import Request from "../utilities/request";
import { setFavorites } from "./favorites";
export const setNotif = data => ({
  type: "SET_NOTIF",
  payload: data
});

export const getUserNotif = () => {
  return async dispatch => {
    await Request({
      url: process.env.apiUrl + "/profile/observes/",
      method: "get",
      needToken: true
    })
      .then(response => {
        dispatch(
          setNotif({
            items: response.data.data,
            refresh: false
          })
        );
      })
      .catch(error => {});
  };
};
export const updateUserNotif = (id, data) => {
  return async dispatch => {
    await Request({
      url: process.env.apiUrl + "/products/" + id + "/observe/",
      method: "post",
      data: data,
      needToken: true
    })
      .then(response => {
        dispatch(
          setNotif({
            refresh: true
          })
        );
      })
      .catch(error => {});
  };
};
export const deleteUserNotif = id => {
  return async dispatch => {
    await Request({
      url: process.env.apiUrl + "/profile/observes/" + id,
      method: "delete",
      needToken: true
    })
      .then(response => {
        dispatch(
          setNotif({
            refresh: true
          })
        );
      })
      .catch(error => {});
  };
};
