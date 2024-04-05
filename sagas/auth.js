import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import {AuthAction, UserAction} from "../actions";
import { setToken } from "../utilities/tokenManager";
import * as authApi from "../api/auth";
import { toastr } from "react-redux-toastr";
import Router from "next/router";

// import { push } from "connected-react-router";
// import checkErrorMessagesExist from "../utilities/checkErrorMessagesExist";
import {
  HOME,
  LOGIN,
  RESET_PASSWORD,
  VERIFY
} from "../constants/urls";
import { SetMessage } from "../utilities/specifics/errorMessages";
import {
  EMAIL,
  FORGET_VERIFY,
  PHONE,
  RESET_PASS_TOKEN,
  USER_VERIFY_STATE,
} from "../constants/storageKey";
// import { selectProjectUser } from "../assets/selectProjectUserOrPanel";

export function* watcherAuth() {
  yield takeLatest(types.LOGIN_REQUEST, workerLogin);
  yield takeLatest(types.REGISTER_REQUEST, workerRegister);
  // yield takeLatest(types.REFERENCE_CODE_REQUEST, workerReferenceCode);
  yield takeLatest(types.VERIFY_REQUEST, workerVerify);
  // yield takeLatest(types.FORGET_REQUEST, workerForget);
  // yield takeLatest(types.FORGET_VERIFY_REQUEST, workerForgetVerify);
  // yield takeLatest(types.RESET_PASSWORD_REQUEST, workerReset);
}

function fetchLogin(data) {
  return authApi.login(data);
}

// function getQueryStringValue(key) {
//   return decodeURIComponent(
//     window.location.search.replace(
//       new RegExp(
//         "^(?:.*[&\\?]" +
//           encodeURIComponent(key).replace(/[]/g, "\\$&") +
//           "(?:\\=([^&]*))?)?.*$",
//         "i"
//       ),
//       "$1"
//     )
//   );
// }
//
function* workerLogin(action) {
  try {
    const response = yield call(fetchLogin, action.data);
    const data = response.data;
    setToken(data.token);
    data.message.forEach(message => {
      toastr.success(" ", message.toString());
    });
    yield put(AuthAction.loginSuccess());
    yield put(UserAction.getInfoSuccess(data.data));
    localStorage.setItem(USER_VERIFY_STATE, 1);
    yield call(Router.replace, HOME);
    // let redirect = getQueryStringValue("redirect");
    // if (redirect === "") {
    //   window.location.replace(COMPANIES_LIST);
    // } else {
    //   window.location.replace(redirect);
    // }
  } catch (error) {
    SetMessage(error, true);
    yield put(AuthAction.loginFailure());
  }
}

function fetchRegister(data) {
  return authApi.register(data);
}

function* workerRegister(action) {
  try {
    const response = yield call(fetchRegister, action.data);
    const data = response.data;
    data.message.forEach(message => {
      toastr.success(" ", message.toString());
    });
    sessionStorage.setItem(EMAIL, action.data.email);
    localStorage.setItem(USER_VERIFY_STATE, 0);
    setToken(data.token);
    yield put(AuthAction.setUserData({
      token: data.token,
      data: data.data
    }))
    yield put(AuthAction.registerSuccess());
    yield call(Router.replace, VERIFY);
  } catch (error) {
    SetMessage(error, true);
    yield put(AuthAction.registerFailure());
  }
}

// function fetchReferenceCode(data) {
//   return authApi.checkReferenceCode(data);
// }
//
// function* workerReferenceCode(action) {
//   try {
//     const response = yield call(fetchReferenceCode, action.data);
//     yield put(AuthAction.referenceCodeSuccess(response.data.message[0]));
//   } catch (error) {
//     let messages = "";
//     if (
//       checkErrorMessagesExist(error) &&
//       error.response.data.message.length >= 1
//     ) {
//       messages = error.response.data.message[0];
//     }
//     yield put(AuthAction.referenceCodeFailure(messages));
//   }
// }
//
function fetchVerify(data) {
  return authApi.verify(data);
}

function* workerVerify(action) {
  try {
    const response = yield call(fetchVerify, action.data);
    const data = response.data;
    localStorage.setItem(USER_VERIFY_STATE, 1);
    data.message.forEach(message => {
      toastr.success(" ", message.toString());
    });

    yield put(AuthAction.verifySuccess());
    yield put(UserAction.getInfoSuccess(data.data));
    yield call(Router.replace, HOME);
  } catch (error) {
    SetMessage(error, true);
    yield put(AuthAction.verifyFailure());
  }
}
//
// function fetchForget(data) {
//   return authApi.forget(data);
// }
//
// function* workerForget(action) {
//   try {
//     const response = yield call(fetchForget, action.data);
//     sessionStorage.setItem(PHONE, action.data.phone_number);
//     sessionStorage.setItem(FORGET_VERIFY, "true");
//     response.data.message.forEach(message => {
//       toastr.success(" ", message.toString());
//     });
//     yield put(AuthAction.forgetSuccess());
//     yield put(push(VERIFY));
//   } catch (error) {
//     SetMessage(error, true);
//     yield put(AuthAction.forgetFailure());
//   }
// }
//
// function fetchForgetVerify(data) {
//   return authApi.forgetVerify(data);
// }
//
// function* workerForgetVerify(action) {
//   try {
//     const response = yield call(fetchForgetVerify, action.data);
//     sessionStorage.setItem(RESET_PASS_TOKEN, response.data.data.token);
//     yield put(AuthAction.forgetVerifySuccess());
//     window.location.replace(RESET_PASSWORD);
//   } catch (error) {
//     SetMessage(error, true);
//     yield put(AuthAction.forgetVerifyFailure());
//   }
// }
//
// function fetchReset(data) {
//   return authApi.reset(data);
// }
// function* workerReset(action) {
//   try {
//     const response = yield call(fetchReset, action.data);
//     sessionStorage.removeItem(RESET_PASS_TOKEN);
//     sessionStorage.removeItem(PHONE);
//     sessionStorage.removeItem(FORGET_VERIFY);
//     // yield put(push(LOGIN));
//     const data = response.data;
//     setToken(data.token);
//     data.message.forEach(message => {
//       toastr.success(" ", message.toString());
//     });
//     yield put(AuthAction.resetPasswordSuccess());
//     localStorage.setItem(USER_VERIFY_STATE, 1);
//     let redirect = getQueryStringValue("redirect");
//     if (redirect === "") {
//       window.location.replace(COMPANIES_LIST);
//     } else {
//       window.location.replace(redirect);
//     }
//   } catch (error) {
//     SetMessage(error, true);
//     yield put(AuthAction.resetPasswordFailure());
//   }
// }
