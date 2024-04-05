webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./actions/actionTypes.js":
/*!********************************!*\
  !*** ./actions/actionTypes.js ***!
  \********************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, VERIFY_REQUEST, VERIFY_SUCCESS, VERIFY_FAILURE, SET_USER_DATA, GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILURE, UPDATE_USER_DATA, UPDATE_USER_DATA_SUCCESS, UPDATE_USER_DATA_FAILURE, CHANGE_USER_PASSWORD, CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAILURE, GET_PRODUCT_LIST_REQUEST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAILURE, SHOW_PRODUCT_REQUEST, SHOW_PRODUCT_SUCCESS, SHOW_PRODUCT_FAILURE, QUESTION_LIST_REQUEST, QUESTION_LIST_SUCCESS, QUESTION_LIST_FAILURE, QUESTION_STORE_REQUEST, QUESTION_STORE_SUCCESS, QUESTION_STORE_FAILURE, QUESTION_ON_CHANGE, QUESTION_UPDATE_REQUEST, QUESTION_UPDATE_SUCCESS, QUESTION_UPDATE_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILURE", function() { return LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_REQUEST", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAILURE", function() { return REGISTER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_REQUEST", function() { return VERIFY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_SUCCESS", function() { return VERIFY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_FAILURE", function() { return VERIFY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_DATA", function() { return SET_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_DATA", function() { return GET_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_DATA_SUCCESS", function() { return GET_USER_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_DATA_FAILURE", function() { return GET_USER_DATA_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_DATA", function() { return UPDATE_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_DATA_SUCCESS", function() { return UPDATE_USER_DATA_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_DATA_FAILURE", function() { return UPDATE_USER_DATA_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_USER_PASSWORD", function() { return CHANGE_USER_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_USER_PASSWORD_SUCCESS", function() { return CHANGE_USER_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_USER_PASSWORD_FAILURE", function() { return CHANGE_USER_PASSWORD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_LIST_REQUEST", function() { return GET_PRODUCT_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_LIST_SUCCESS", function() { return GET_PRODUCT_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_LIST_FAILURE", function() { return GET_PRODUCT_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_PRODUCT_REQUEST", function() { return SHOW_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_PRODUCT_SUCCESS", function() { return SHOW_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_PRODUCT_FAILURE", function() { return SHOW_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_LIST_REQUEST", function() { return QUESTION_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_LIST_SUCCESS", function() { return QUESTION_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_LIST_FAILURE", function() { return QUESTION_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_STORE_REQUEST", function() { return QUESTION_STORE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_STORE_SUCCESS", function() { return QUESTION_STORE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_STORE_FAILURE", function() { return QUESTION_STORE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_ON_CHANGE", function() { return QUESTION_ON_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_UPDATE_REQUEST", function() { return QUESTION_UPDATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_UPDATE_SUCCESS", function() { return QUESTION_UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_UPDATE_FAILURE", function() { return QUESTION_UPDATE_FAILURE; });
var LOGIN_REQUEST = "LOGIN_REQUEST";
var LOGIN_SUCCESS = "LOGIN_SUCCESS";
var LOGIN_FAILURE = "LOGIN_FAILURE";
var REGISTER_REQUEST = "REGISTER_REQUEST";
var REGISTER_SUCCESS = "REGISTER_SUCCESS";
var REGISTER_FAILURE = "REGISTER_FAILURE";
var VERIFY_REQUEST = "VERIFY_REQUEST";
var VERIFY_SUCCESS = "VERIFY_SUCCESS";
var VERIFY_FAILURE = "VERIFY_FAILURE";
var SET_USER_DATA = "SET_USER_DATA";
var GET_USER_DATA = "GET_USER_DATA";
var GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
var GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";
var UPDATE_USER_DATA = "UPDATE_USER_DATA";
var UPDATE_USER_DATA_SUCCESS = "UPDATE_USER_DATA_SUCCESS";
var UPDATE_USER_DATA_FAILURE = "UPDATE_USER_DATA_FAILURE";
var CHANGE_USER_PASSWORD = "CHANGE_USER_PASSWORD";
var CHANGE_USER_PASSWORD_SUCCESS = "CHANGE_USER_PASSWORD_SUCCESS";
var CHANGE_USER_PASSWORD_FAILURE = "CHANGE_USER_PASSWORD_FAILURE";
var GET_PRODUCT_LIST_REQUEST = "GET_PRODUCT_LIST_REQUEST";
var GET_PRODUCT_LIST_SUCCESS = "GET_PRODUCT_LIST_SUCCESS";
var GET_PRODUCT_LIST_FAILURE = "GET_PRODUCT_LIST_FAILURE";
var SHOW_PRODUCT_REQUEST = "SHOW_PRODUCT_REQUEST";
var SHOW_PRODUCT_SUCCESS = "SHOW_PRODUCT_SUCCESS";
var SHOW_PRODUCT_FAILURE = "SHOW_PRODUCT_FAILURE";
var QUESTION_LIST_REQUEST = "QUESTION_LIST_REQUEST";
var QUESTION_LIST_SUCCESS = "QUESTION_LIST_SUCCESS";
var QUESTION_LIST_FAILURE = "QUESTION_LIST_FAILURE";
var QUESTION_STORE_REQUEST = "QUESTION_STORE_REQUEST";
var QUESTION_STORE_SUCCESS = "QUESTION_STORE_SUCCESS";
var QUESTION_STORE_FAILURE = "QUESTION_STORE_FAILURE";
var QUESTION_ON_CHANGE = "QUESTION_ON_CHANGE";
var QUESTION_UPDATE_REQUEST = "QUESTION_UPDATE_REQUEST";
var QUESTION_UPDATE_SUCCESS = "QUESTION_UPDATE_SUCCESS";
var QUESTION_UPDATE_FAILURE = "QUESTION_UPDATE_FAILURE";

/***/ }),

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: AuthAction, UserAction, ProductAction, QuestionAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "AuthAction", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./actions/user.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "UserAction", function() { return _user__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "./actions/product.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ProductAction", function() { return _product__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question */ "./actions/question.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "QuestionAction", function() { return _question__WEBPACK_IMPORTED_MODULE_3__; });






/***/ }),

/***/ "./actions/question.js":
/*!*****************************!*\
  !*** ./actions/question.js ***!
  \*****************************/
/*! exports provided: setQuestion, getListRequest, getListSuccess, getListFailure, storeRequest, storeSuccess, storeFailure, ChangeNewQuestionText, updateRequest, updateSuccess, updateFailure, getQuestion */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeNewQuestionText", function() { return ChangeNewQuestionText; });
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
var ChangeNewQuestionText = function ChangeNewQuestionText(data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_ON_CHANGE"],
    data: data
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

/***/ "./reducers/question.js":
/*!******************************!*\
  !*** ./reducers/question.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");


var initialState = {
  loading: true,
  data: [],
  isFetched: false,
  error: "",
  processing: false,
  newQuestionText: "",
  cache: false,
  meta: {}
};

var Question = function Question() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_QUESTION':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, action.payload);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["QUESTION_LIST_REQUEST"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true,
        error: ""
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["QUESTION_LIST_SUCCESS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        data: action.payLoad,
        isFetched: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["QUESTION_LIST_FAILURE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: action.error
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["QUESTION_STORE_REQUEST"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["QUESTION_STORE_SUCCESS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: false,
        newQuestionText: ""
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["QUESTION_STORE_FAILURE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: false
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["QUESTION_ON_CHANGE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        newQuestionText: action.data
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["QUESTION_UPDATE_REQUEST"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["QUESTION_UPDATE_SUCCESS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: false
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["QUESTION_UPDATE_FAILURE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getList, action.productId);

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getList, action.productId);

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
//# sourceMappingURL=_app.js.0b981290cc316297a566.hot-update.js.map