import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import { OrderAction } from "../actions";
import * as orderApi from "../api/order";
import { toastr } from "react-redux-toastr";
import { SetMessage } from "../utilities/specifics/errorMessages";
import {addToCart as addToCartUtils} from "../utilities/specifics/addToCart"
import Router from "next/router";
import {CART} from "../constants/urls";
export function* watcherOrder() {
  yield takeLatest(types.ADD_TO_CART_REQUEST, addToCart);
}

function addToCartRequest(data) {
  return orderApi.addToCart(data);
}

function* addToCart(action) {
  try {
    const response = yield call(addToCartRequest, action.data);
    response.data.message.forEach(message => {
      toastr.success(" ", message.toString());
    });
    addToCartUtils(action.data.product_id, 1)
    yield call(Router.push, CART);
    yield put(OrderAction.addToCartSuccess(response.data.data));
  } catch (error) {
    SetMessage(error, true);
    yield put(OrderAction.addToCartFailure());
  }
}

