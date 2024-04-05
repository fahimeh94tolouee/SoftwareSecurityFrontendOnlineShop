webpackHotUpdate("static/development/pages/_app.js",{

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
//# sourceMappingURL=_app.js.d2a38734fb7cc432f82f.hot-update.js.map