webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.343b1f6dedaeabb66145.hot-update.js.map