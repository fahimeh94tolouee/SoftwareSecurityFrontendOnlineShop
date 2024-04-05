import Request from "../utilities/request";
import * as types from "./actionTypes";
export const setInformation = data => ({
  type: types.SET_USER_DATA,
  payload: data
});

export const getInfo = () => ({
  type: types.GET_USER_DATA,
});
export const getInfoSuccess = data => ({
  type: types.GET_USER_DATA_SUCCESS,
  data: data
});

export const getInfoFailure = data => ({
  type: types.GET_USER_DATA_FAILURE,
  data: data
});

export const updateInfo = (data) => {
  return {
    type: types.UPDATE_USER_DATA,
    data: data
  }
};
export const updateInfoSuccess = (data) => {
  return{
    type: types.UPDATE_USER_DATA_SUCCESS,
    data: data
  }
};
export const updateInfoFailure = () => {
  return{
    type: types.UPDATE_USER_DATA_FAILURE,
  }
};

export const changePassword = (data) =>{
  return{
    type: types.CHANGE_USER_PASSWORD,
    data: data
  }
};
export const changePasswordSuccess = () =>{
  return{
    type: types.CHANGE_USER_PASSWORD_SUCCESS,
  }
};
export const changePasswordFailure = () =>{
  return{
    type: types.CHANGE_USER_PASSWORD_FAILURE,
  }
};

export const getInformation = (stopRedirect = false) => {
  return async dispatch => {
    await Request({
      url: process.env.apiUrl + "/profile",
      method: "get",
      needToken: true,
      stopRedirect: stopRedirect
    })
      .then(response => {
        dispatch(
          setInformation({
            data: response.data.data
          })
        );
      })
      .catch(() => {
          setInformation({
              data: false
          })
      });
  };
};
export const updateInformation = data => {
  return async dispatch => {
    await Request({
      url: process.env.apiUrl + "/profile",
      method: "post",
      needToken: true,
      data: data
    })
      .then(response => {
        dispatch(
          setInformation({
            data: response.data.data
          })
        );
      })
      .catch(error => {});
  };
};
