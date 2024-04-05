import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import { QuestionAction } from "../actions";
import * as questionApi from "../api/question";
import { toastr } from "react-redux-toastr";
import { SetMessage } from "../utilities/specifics/errorMessages";

export function* watcherQuestion() {
  yield takeLatest(types.QUESTION_LIST_REQUEST, list);
  yield takeLatest(types.QUESTION_STORE_REQUEST, store);
  yield takeLatest(types.QUESTION_UPDATE_REQUEST, update);
}

function getList(productId) {
  return questionApi.getList(productId);
}

function* list(action) {
  try {
    const response = yield call(getList, action.productId);
    yield put(QuestionAction.getListSuccess(response.data.data));
  } catch (error) {
    const message = SetMessage(error);
    yield put(QuestionAction.getListFailure(message));
  }
}

function storeReq(productId, data) {
  return questionApi.store(productId, data);
}

function* store(action) {
  try {
    const response = yield call(storeReq, action.productId, action.data);
    const data = response.data;
    data.message.forEach(message => {
      toastr.success(" ", message.toString());
    });
    const listResponse = yield call(getList, action.productId);
    yield put(QuestionAction.storeSuccess());
    yield put(QuestionAction.getListSuccess(listResponse.data.data));
  } catch (error) {
    SetMessage(error, true);
    yield put(QuestionAction.storeFailure());
  }
}

function updateReq(productId, id, data) {
  return questionApi.update(productId, id, data);
}

function* update(action) {
  try {
    const response = yield call(updateReq, action.productId, action.id, action.data);
    const data = response.data;
    data.message.forEach(message => {
      toastr.success(" ", message.toString());
    });
    const listResponse = yield call(getList, action.productId);
    yield put(QuestionAction.updateSuccess());
    yield put(QuestionAction.getListSuccess(listResponse.data.data));
  } catch (error) {
    SetMessage(error, true);
    yield put(QuestionAction.updateFailure());
  }
}