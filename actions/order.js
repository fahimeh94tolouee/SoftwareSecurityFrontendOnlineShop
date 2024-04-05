import Request from "../utilities/request";
import * as types from "../actions/actionTypes";

export const setOrder = data => ({
  type: "SET_ORDER",
  payload: data
});
export const getOrder = () => {
  return dispatch => {
    Request({
      url: process.env.apiUrl + "/profile/orders/",
      method: "get",
      needToken: true
    })
      .then(response => {
        dispatch(
          setOrder({
            items: response.data.data
          })
        );
      })
      .catch(error => {});
  };
};
export const getSingleOrder = id => {
  return dispatch => {
    Request({
      url: process.env.apiUrl + "/profile/orders/" + id,
      method: "get",
      needToken: true
    })
      .then(response => {
        dispatch(
          setOrder({
            order: response.data.data
          })
        );
      })
      .catch(error => {});
  };
};
export const addOrder = data => {
  return async dispatch => {
    let params = {};
    let cartItems = [];
    if (localStorage.getItem("cart")) {
      cartItems = JSON.parse(localStorage.getItem("cart"));
    }
    params.variations = cartItems;
    params = Object.assign(params, data);
    await Request({
      url: process.env.apiUrl + "/orders/",
      method: "post",
      data: params,
      needToken: true
    })
      .then(response => {
        window.location.replace(response.data.data.redirect_url);
      })
      .catch(error => {});
  };
};
export const RejectOrder = (id, data) => {
  return dispatch => {
    Request({
      url: process.env.apiUrl + "/profile/orders/" + id + "/return",
      method: "post",
      data: data,
      needToken: true
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {});
  };
};

export const addToCart = (data) => {
  return {
    type: types.ADD_TO_CART_REQUEST,
    data,
  };
};

export const addToCartSuccess = (data) => {
  return {
    type: types.ADD_TO_CART_SUCCESS,
    data
  };
};

export const addToCartFailure = () => {
  return {
    type: types.ADD_TO_CART_FAILURE
  };
};
