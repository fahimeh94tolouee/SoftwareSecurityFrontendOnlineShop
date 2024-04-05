webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./actions/question.js":
/*!*****************************!*\
  !*** ./actions/question.js ***!
  \*****************************/
/*! exports provided: setQuestion, getListRequest, getListSuccess, getListFailure, storeRequest, storeSuccess, storeFailure, updateRequest, updateSuccess, updateFailure, getQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQuestion", function() { return setQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListRequest", function() { return getListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListSuccess", function() { return getListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListFailure", function() { return getListFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRequest", function() { return storeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeSuccess", function() { return storeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeFailure", function() { return storeFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRequest", function() { return updateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSuccess", function() { return updateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFailure", function() { return updateFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestion", function() { return getQuestion; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");




var setQuestion = function setQuestion(data) {
  return {
    type: "SET_QUESTION",
    payload: data
  };
};
var getListRequest = function getListRequest(productId) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_LIST_REQUEST"],
    productId: productId
  };
};
var getListSuccess = function getListSuccess(data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_LIST_SUCCESS"],
    payLoad: data
  };
};
var getListFailure = function getListFailure(error) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_LIST_FAILURE"],
    error: error
  };
};
var storeRequest = function storeRequest(productId, data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_STORE_REQUEST"],
    productId: productId,
    data: data
  };
};
var storeSuccess = function storeSuccess() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_STORE_SUCCESS"]
  };
};
var storeFailure = function storeFailure() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_STORE_FAILURE"]
  };
};
var updateRequest = function updateRequest(productId, id, data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_UPDATE_REQUEST"],
    productId: productId,
    id: id,
    data: data
  };
};
var updateSuccess = function updateSuccess() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_UPDATE_SUCCESS"]
  };
};
var updateFailure = function updateFailure() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_UPDATE_FAILURE"]
  };
};
var getQuestion = function getQuestion(id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(setQuestion({
                  loading: true
                }));
                _context.next = 3;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + "/products/" + id + "/questions",
                  method: "get",
                  params: params
                }).then(function (response) {
                  dispatch(setQuestion({
                    loading: false,
                    data: response.data.data,
                    meta: response.data.meta,
                    cache: true
                  }));
                }).catch(function (error) {});

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./api/question.js":
/*!*************************!*\
  !*** ./api/question.js ***!
  \*************************/
/*! exports provided: getList, store, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/api */ "./constants/api.js");


var baseUrl = "http://127.0.0.1:8000";
var getList = function getList(productId) {
  return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "get",
    url: "".concat(baseUrl).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_API"]).concat(productId).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["QUESTION_LIST_API"]),
    needToken: true
  });
};
var store = function store(productId, data) {
  return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "post",
    url: "".concat(baseUrl).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_API"]).concat(productId).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["QUESTION_API"]),
    needToken: true,
    data: data
  });
};
var update = function update(productId, id, data) {
  return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "put",
    url: "".concat(baseUrl).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_API"]).concat(productId).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["QUESTION_API"]).concat(id, "/"),
    needToken: true,
    data: data
  });
};

/***/ }),

/***/ "./constants/api.js":
/*!**************************!*\
  !*** ./constants/api.js ***!
  \**************************/
/*! exports provided: AUTH_LOGIN_API, AUTH_REGISTER_API, AUTH_VERIFY_API, AUTH_RESET_PASSWORD_API, AUTH_CHECK_REFERENCE_CODE_API, AUTH_RESEND_OTP_API, USER_API, UPDATE_INFO_API, CHANGE_PASSWORD_API, PRODUCT_API, LIST_API, QUESTION_API, QUESTION_LIST_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_LOGIN_API", function() { return AUTH_LOGIN_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_REGISTER_API", function() { return AUTH_REGISTER_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_VERIFY_API", function() { return AUTH_VERIFY_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_RESET_PASSWORD_API", function() { return AUTH_RESET_PASSWORD_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CHECK_REFERENCE_CODE_API", function() { return AUTH_CHECK_REFERENCE_CODE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_RESEND_OTP_API", function() { return AUTH_RESEND_OTP_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_API", function() { return USER_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INFO_API", function() { return UPDATE_INFO_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_API", function() { return CHANGE_PASSWORD_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_API", function() { return PRODUCT_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_API", function() { return LIST_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_API", function() { return QUESTION_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_LIST_API", function() { return QUESTION_LIST_API; });
var AUTH_LOGIN_API = "/auth/login/";
var AUTH_REGISTER_API = "/auth/register/";
var AUTH_VERIFY_API = "/auth/verify/";
var AUTH_RESET_PASSWORD_API = "resetPassword";
var AUTH_CHECK_REFERENCE_CODE_API = "checkReferenceCode";
var AUTH_RESEND_OTP_API = "resendOtp";
var USER_API = "/user/";
var UPDATE_INFO_API = "updateInfo/";
var CHANGE_PASSWORD_API = "changePassword/";
var PRODUCT_API = "/product/";
var LIST_API = "list/";
var QUESTION_API = "/question";
var QUESTION_LIST_API = "".concat(QUESTION_API, "-").concat(LIST_API);

/***/ }),

/***/ "./sagas/question.js":
/*!***************************!*\
  !*** ./sagas/question.js ***!
  \***************************/
/*! exports provided: watcherQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watcherQuestion", function() { return watcherQuestion; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _api_question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/question */ "./api/question.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux-toastr */ "./node_modules/react-redux-toastr/lib/index.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities_specifics_errorMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/specifics/errorMessages */ "./utilities/specifics/errorMessages.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watcherQuestion),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(list),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(store),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(update);







function watcherQuestion() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watcherQuestion$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["QUESTION_LIST_REQUEST"], list);

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["QUESTION_STORE_REQUEST"], store);

        case 4:
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["QUESTION_UPDATE_REQUEST"], update);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function getList(productId) {
  return _api_question__WEBPACK_IMPORTED_MODULE_4__["getList"](productId);
}

function list(action) {
  var response, message;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function list$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getList, action.productId);

        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["QuestionAction"].getListSuccess(response.data.data));

        case 6:
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          message = Object(_utilities_specifics_errorMessages__WEBPACK_IMPORTED_MODULE_6__["SetMessage"])(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["QuestionAction"].getListFailure(message));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function storeReq(productId, data) {
  return _api_question__WEBPACK_IMPORTED_MODULE_4__["store"](productId, data);
}

function store(action) {
  var response, data, listResponse;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function store$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(storeReq, action.productId, action.data);

        case 3:
          response = _context3.sent;
          data = response.data;
          data.message.forEach(function (message) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__["toastr"].success(" ", message.toString());
          });
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getList);

        case 8:
          listResponse = _context3.sent;
          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["QuestionAction"].storeSuccess());

        case 11:
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["QuestionAction"].getListSuccess(listResponse.data.data));

        case 13:
          _context3.next = 20;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](0);
          Object(_utilities_specifics_errorMessages__WEBPACK_IMPORTED_MODULE_6__["SetMessage"])(_context3.t0, true);
          _context3.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["QuestionAction"].storeFailure());

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 15]]);
}

function updateReq(productId, id, data) {
  return _api_question__WEBPACK_IMPORTED_MODULE_4__["update"](productId, id, data);
}

function update(action) {
  var response, data, listResponse;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function update$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(updateReq, action.productId, action.id, action.data);

        case 3:
          response = _context4.sent;
          data = response.data;
          data.message.forEach(function (message) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__["toastr"].success(" ", message.toString());
          });
          _context4.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getList);

        case 8:
          listResponse = _context4.sent;
          _context4.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["QuestionAction"].updateSuccess());

        case 11:
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["QuestionAction"].getListSuccess(listResponse.data.data));

        case 13:
          _context4.next = 20;
          break;

        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          Object(_utilities_specifics_errorMessages__WEBPACK_IMPORTED_MODULE_6__["SetMessage"])(_context4.t0, true);
          _context4.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["QuestionAction"].updateFailure());

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 15]]);
}

/***/ })

})
//# sourceMappingURL=_app.js.343b1f6dedaeabb66145.hot-update.js.map