webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _utilities_specifics_getUserIdentification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/specifics/getUserIdentification */ "./utilities/specifics/getUserIdentification.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");



var initialState = {
  token: false,
  data: null,
  loading: false,
  changePasswordProcessing: false,
  error: ""
};

var User = function User() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var previousData = {},
      fullName = "";

  switch (action.type) {
    case 'SET_USER_DATA':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, action.payload);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_USER_DATA"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true,
        data: null,
        error: ""
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_USER_DATA_SUCCESS"]:
      previousData = state.data ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.data) : {};
      fullName = Object(_utilities_specifics_getUserIdentification__WEBPACK_IMPORTED_MODULE_1__["default"])(action.data);
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        data: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previousData, action.data, {
          fullName: fullName
        })
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_USER_DATA_FAILURE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: action.error
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_USER_PASSWORD"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        changePasswordProcessing: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_USER_PASSWORD_SUCCESS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        changePasswordProcessing: false
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_USER_PASSWORD_FAILURE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        changePasswordProcessing: false
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_DATA"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_DATA_SUCCESS"]:
      previousData = state.data ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.data) : {};
      fullName = Object(_utilities_specifics_getUserIdentification__WEBPACK_IMPORTED_MODULE_1__["default"])(action.data);
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: false,
        data: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previousData, action.data, {
          fullName: fullName
        })
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_DATA_FAILURE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: watcherUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watcherUser", function() { return watcherUser; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/user */ "./api/user.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux-toastr */ "./node_modules/react-redux-toastr/lib/index.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities_specifics_errorMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/specifics/errorMessages */ "./utilities/specifics/errorMessages.js");
/* harmony import */ var _utilities_logout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/logout */ "./utilities/logout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/urls */ "./constants/urls.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watcherUser),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(workerGetInfo),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(workerUpdateInfo),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(workerChangePassword);










function watcherUser() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watcherUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_USER_DATA"], workerGetInfo);

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_DATA"], workerUpdateInfo);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_USER_PASSWORD"], workerChangePassword);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function getInfo() {
  return _api_user__WEBPACK_IMPORTED_MODULE_4__["getInfo"]();
}

function workerGetInfo() {
  var response, message;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function workerGetInfo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getInfo);

        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UserAction"].getInfoSuccess(response.data.data));

        case 6:
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          message = Object(_utilities_specifics_errorMessages__WEBPACK_IMPORTED_MODULE_6__["SetMessage"])(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UserAction"].getInfoFailure(message));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function updateInfo(data) {
  return _api_user__WEBPACK_IMPORTED_MODULE_4__["updateInfo"](data);
}

function workerUpdateInfo(action) {
  var response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function workerUpdateInfo$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(updateInfo, action.data);

        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UserAction"].updateInfoSuccess(response.data.data));

        case 6:
          // yield put(InitAction.getSuccess({ userData: response.data.data }));
          response.data.message.forEach(function (message) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__["toastr"].success(" ", message.toString());
          });
          _context3.next = 15;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          Object(_utilities_specifics_errorMessages__WEBPACK_IMPORTED_MODULE_6__["SetMessage"])(_context3.t0, true);
          _context3.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UserAction"].updateInfoFailure());

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function fetchChangePassword(data) {
  return _api_user__WEBPACK_IMPORTED_MODULE_4__["changePassword"](data);
}

function workerChangePassword(action) {
  var response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function workerChangePassword$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(fetchChangePassword, action.data);

        case 3:
          response = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UserAction"].changePasswordSuccess());

        case 6:
          response.data.message.forEach(function (message) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__["toastr"].success(" ", message.toString());
          });
          Object(_utilities_logout__WEBPACK_IMPORTED_MODULE_7__["default"])(); //TODO FIX
          // yield call(Router.replace, LOGIN);

          _context4.next = 15;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          Object(_utilities_specifics_errorMessages__WEBPACK_IMPORTED_MODULE_6__["SetMessage"])(_context4.t0, true);
          _context4.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UserAction"].changePasswordFailure());

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 10]]);
}

/***/ })

})
//# sourceMappingURL=_app.js.eb5df947aa87fb65f685.hot-update.js.map