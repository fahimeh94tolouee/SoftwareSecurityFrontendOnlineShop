import Request from "../utilities/request";
export const setCart = data => ({
  type: "SET_CART",
  payload: data
});

export const getCart = moreData => {
  return async dispatch => {
    let params = {};
    let cartItems = [];
    if (localStorage.getItem("cart")) {
      cartItems = JSON.parse(localStorage.getItem("cart"));
    }
    params.variations = cartItems;
    params = Object.assign(params, moreData);
    await Request({
      url: process.env.apiUrl + "/cart/variations/",
      method: "post",
      data: params
    })
      .then(response => {
        dispatch(
          setCart({
            items: response.data.data,
            meta: response.data.meta
          })
        );
      })
      .catch(error => {});
  };
};
