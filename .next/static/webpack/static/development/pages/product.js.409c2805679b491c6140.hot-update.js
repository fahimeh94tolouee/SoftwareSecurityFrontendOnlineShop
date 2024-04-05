webpackHotUpdate("static/development/pages/product.js",{

/***/ "./actions/actionTypes.js":
/*!********************************!*\
  !*** ./actions/actionTypes.js ***!
  \********************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, VERIFY_REQUEST, VERIFY_SUCCESS, VERIFY_FAILURE, SET_USER_DATA, GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILURE, UPDATE_USER_DATA, UPDATE_USER_DATA_SUCCESS, UPDATE_USER_DATA_FAILURE, CHANGE_USER_PASSWORD, CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAILURE, GET_PRODUCT_LIST_REQUEST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAILURE, SHOW_PRODUCT_REQUEST, SHOW_PRODUCT_SUCCESS, SHOW_PRODUCT_FAILURE, QUESTION_LIST_REQUEST, QUESTION_LIST_SUCCESS, QUESTION_LIST_FAILURE, QUESTION_STORE_REQUEST, QUESTION_STORE_SUCCESS, QUESTION_STORE_FAILURE, QUESTION_UPDATE_REQUEST, QUESTION_UPDATE_SUCCESS, QUESTION_UPDATE_FAILURE */
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
var getListRequest = function getListRequest() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_LIST_REQUEST"]
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
var storeRequest = function storeRequest(data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_STORE_REQUEST"],
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
var updateRequest = function updateRequest(id, data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_UPDATE_REQUEST"],
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

/***/ })

})
//# sourceMappingURL=product.js.409c2805679b491c6140.hot-update.js.map