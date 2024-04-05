import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import { ProductAction } from "../actions";
import * as productApi from "../api/product";
import { SetMessage } from "../utilities/specifics/errorMessages";
// import {
//   defaultNormalizerWithSeparateMetaObj,
//   fetchAllPages
// } from "../assets/fetchAllPageTogether";

export function* watcherProduct() {
  yield takeLatest(types.GET_PRODUCT_LIST_REQUEST, getList);
  yield takeLatest(types.SHOW_PRODUCT_REQUEST, show);
}

function* getList(action) {
  try {
    // const response = yield fetchAllPages(
    //   getRequest,
    //   null,
    //   defaultNormalizerWithSeparateMetaObj,
    //   null,
    //   true
    // );
    const response = yield call(getRequest, action.pageNumber);
    yield put(ProductAction.getListSuccess(response.data.data));
  } catch (error) {
    const message = SetMessage(error);
    yield put(ProductAction.getListFailure(message));
  }
}
function getRequest(pageNumber = null) {
  return productApi.getList(pageNumber);
}

function* show(action) {
  try {
    const response = yield call(showRequest, action.id);
    yield put(ProductAction.showSuccess(response.data.data));
  } catch (error) {
    const message = SetMessage(error);
    yield put(ProductAction.showFailure(message));
  }
}
function showRequest(id) {
  return productApi.show(id);
}