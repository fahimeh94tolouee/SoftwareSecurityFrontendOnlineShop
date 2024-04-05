import Request from "../utilities/request";
export const setCompare = data => ({
  type: "SET_COMPARE",
  payload: data
});
export const setLoading = data => ({
  type: "SET_INITIAL",
  payload: data
});

export const getCompare = data => {
  return async dispatch => {
    dispatch(
      setLoading({
        loading: true
      })
    );
    await Request({
      url: process.env.apiUrl + "/products/compare",
      method: "get",
      params: data
    })
      .then(response => {
        dispatch(
          setCompare({
            products: response.data.data.products,
            features: response.data.data.features,
            meta: response.data.meta
          })
        );
      })
      .catch(error => {});
  };
};
