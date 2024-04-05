import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import { UserAction } from "../actions";
import * as userApi from "../api/user";
import { toastr } from "react-redux-toastr";
import { SetMessage } from "../utilities/specifics/errorMessages";
import logout from "../utilities/logout";
import Router from "next/router";
import {LOGIN} from "../constants/urls";

export function* watcherUser() {
  yield takeLatest(types.GET_USER_DATA, workerGetInfo);
  yield takeLatest(types.UPDATE_USER_DATA, workerUpdateInfo);
  yield takeLatest(types.CHANGE_USER_PASSWORD, workerChangePassword);
}

function getInfo() {
  return userApi.getInfo();
}
function* workerGetInfo() {
  try {
    const response = yield call(getInfo);
    yield put(UserAction.getInfoSuccess(response.data.data));
  } catch (error) {
    const message = SetMessage(error);
    yield put(UserAction.getInfoFailure(message));
  }
}

function updateInfo(data) {
  return userApi.updateInfo(data);
}
function* workerUpdateInfo(action) {
  try {
    const response = yield call(updateInfo, action.data);
    yield put(UserAction.updateInfoSuccess(response.data.data));
    response.data.message.forEach(message => {
      toastr.success(" ", message.toString());
    });
  } catch (error) {
    SetMessage(error, true);
    yield put(UserAction.updateInfoFailure());
  }
}

function fetchChangePassword(data) {
  return userApi.changePassword(data);
}
function* workerChangePassword(action) {
  try {
    const response = yield call(fetchChangePassword, action.data);
    yield put(UserAction.changePasswordSuccess());
    response.data.message.forEach(message => {
      toastr.success(" ", message.toString());
    });
    logout();
    //TODO FIX
    // yield call(Router.replace, LOGIN);
  } catch (error) {
    SetMessage(error, true);
    yield put(UserAction.changePasswordFailure());
  }
}
