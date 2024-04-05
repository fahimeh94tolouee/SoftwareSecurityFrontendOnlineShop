import Request from '../utilities/request';
import * as types from "../actions/actionTypes";
export const setQuestion = data => ({
  type: "SET_QUESTION",
  payload: data
});

export const getListRequest = (productId) => {
  return {
    type: types.QUESTION_LIST_REQUEST,
    productId: productId
  };
};
export const getListSuccess = data => {
  return {
    type: types.QUESTION_LIST_SUCCESS,
    payLoad: data
  };
};
export const getListFailure = (error) => {
  return {
    type: types.QUESTION_LIST_FAILURE,
    error: error
  };
};

export const storeRequest = (productId, data) => {
  return {
    type: types.QUESTION_STORE_REQUEST,
    productId: productId,
    data: data
  };
};
export const storeSuccess = () => {
  return {
    type: types.QUESTION_STORE_SUCCESS,
  };
};
export const storeFailure = () => {
  return {
    type: types.QUESTION_STORE_FAILURE
  };
};

export const ChangeNewQuestionText = (data) =>{
  return{
    type: types.QUESTION_ON_CHANGE,
    data:data
  }
}
export const updateRequest = (productId, id, data) => {
  return {
    type: types.QUESTION_UPDATE_REQUEST,
    productId: productId,
    id: id,
    data: data
  };
};
export const updateSuccess = () => {
  return {
    type: types.QUESTION_UPDATE_SUCCESS,
  };
};
export const updateFailure = () => {
  return {
    type: types.QUESTION_UPDATE_FAILURE
  };
};

export const getQuestion = (id, params = {}) => {
  return async dispatch => {
    dispatch(
      setQuestion({
        loading: true
      })
    );
    await Request({
      url: process.env.apiUrl + "/products/" + id + "/questions",
      method: "get",
      params: params
    })
      .then(response => {
        dispatch(
          setQuestion({
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
