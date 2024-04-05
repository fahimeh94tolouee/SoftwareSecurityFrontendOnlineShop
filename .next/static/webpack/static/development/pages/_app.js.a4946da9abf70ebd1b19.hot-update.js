webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./actions/actionTypes.js":
/*!********************************!*\
  !*** ./actions/actionTypes.js ***!
  \********************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, VERIFY_REQUEST, VERIFY_SUCCESS, VERIFY_FAILURE, SET_USER_DATA, GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILURE, UPDATE_USER_DATA, UPDATE_USER_DATA_SUCCESS, UPDATE_USER_DATA_FAILURE, CHANGE_USER_PASSWORD, CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAILURE, GET_PRODUCT_LIST_REQUEST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAILURE, SHOW_PRODUCT_REQUEST, SHOW_PRODUCT_SUCCESS, SHOW_PRODUCT_FAILURE, QUESTION_LIST_REQUEST, QUESTION_LIST_SUCCESS, QUESTION_LIST_FAILURE, QUESTION_STORE_REQUEST, QUESTION_STORE_SUCCESS, QUESTION_STORE_FAILURE, QUESTION_ON_CHANGE, QUESTION_UPDATE_REQUEST, QUESTION_UPDATE_SUCCESS, QUESTION_UPDATE_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART_REQUEST", function() { return ADD_TO_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART_SUCCESS", function() { return ADD_TO_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART_FAILURE", function() { return ADD_TO_CART_FAILURE; });
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
var ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
var ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
var ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

/***/ }),

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: AuthAction, UserAction, ProductAction, QuestionAction, OrderAction */
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
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order */ "./actions/order.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "OrderAction", function() { return _order__WEBPACK_IMPORTED_MODULE_4__; });







/***/ }),

/***/ "./actions/order.js":
/*!**************************!*\
  !*** ./actions/order.js ***!
  \**************************/
/*! exports provided: setOrder, getOrder, getSingleOrder, addOrder, RejectOrder, addToCart, addToCartSuccess, addToCartFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOrder", function() { return setOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrder", function() { return getOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleOrder", function() { return getSingleOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrder", function() { return addOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectOrder", function() { return RejectOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCartSuccess", function() { return addToCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCartFailure", function() { return addToCartFailure; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");





var setOrder = function setOrder(data) {
  return {
    type: "SET_ORDER",
    payload: data
  };
};
var getOrder = function getOrder() {
  return function (dispatch) {
    Object(_utilities_request__WEBPACK_IMPORTED_MODULE_3__["default"])({
      url: "http://127.0.0.1:8000" + "/profile/orders/",
      method: "get",
      needToken: true
    }).then(function (response) {
      dispatch(setOrder({
        items: response.data.data
      }));
    }).catch(function (error) {});
  };
};
var getSingleOrder = function getSingleOrder(id) {
  return function (dispatch) {
    Object(_utilities_request__WEBPACK_IMPORTED_MODULE_3__["default"])({
      url: "http://127.0.0.1:8000" + "/profile/orders/" + id,
      method: "get",
      needToken: true
    }).then(function (response) {
      dispatch(setOrder({
        order: response.data.data
      }));
    }).catch(function (error) {});
  };
};
var addOrder = function addOrder(data) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var params, cartItems;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {};
                cartItems = [];

                if (localStorage.getItem("cart")) {
                  cartItems = JSON.parse(localStorage.getItem("cart"));
                }

                params.variations = cartItems;
                params = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(params, data);
                _context.next = 7;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_3__["default"])({
                  url: "http://127.0.0.1:8000" + "/orders/",
                  method: "post",
                  data: params,
                  needToken: true
                }).then(function (response) {
                  window.location.replace(response.data.data.redirect_url);
                }).catch(function (error) {});

              case 7:
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
var RejectOrder = function RejectOrder(id, data) {
  return function (dispatch) {
    Object(_utilities_request__WEBPACK_IMPORTED_MODULE_3__["default"])({
      url: "http://127.0.0.1:8000" + "/profile/orders/" + id + "/return",
      method: "post",
      data: data,
      needToken: true
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {});
  };
};
var addToCart = function addToCart(data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["ADD_TO_CART_REQUEST"],
    data: data
  };
};
var addToCartSuccess = function addToCartSuccess(data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["ADD_TO_CART_SUCCESS"],
    data: data
  };
};
var addToCartFailure = function addToCartFailure() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["ADD_TO_CART_FAILURE"]
  };
};

/***/ }),

/***/ "./api/order.js":
/*!**********************!*\
  !*** ./api/order.js ***!
  \**********************/
/*! exports provided: addToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/api */ "./constants/api.js");


var baseUrl = "http://127.0.0.1:8000";
var addToCart = function addToCart(data) {
  return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "post",
    url: "".concat(baseUrl).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["ORDER_API"]).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART_API"]),
    needToken: true,
    data: data
  });
};

/***/ }),

/***/ "./reducers/order.js":
/*!***************************!*\
  !*** ./reducers/order.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");


var initialState = {
  items: [],
  order: {},
  processing: false,
  cartItems: []
};

var Order = function Order() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_ORDER':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, action.payload);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART_REQUEST"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART_SUCCESS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: false,
        cartItems: action.data
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART_FAILURE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./sagas/auth.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product */ "./sagas/product.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question */ "./sagas/question.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order */ "./sagas/order.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);







function rootSaga() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_auth__WEBPACK_IMPORTED_MODULE_2__["watcherAuth"])(), Object(_user__WEBPACK_IMPORTED_MODULE_3__["watcherUser"])(), Object(_product__WEBPACK_IMPORTED_MODULE_4__["watcherProduct"])(), Object(_question__WEBPACK_IMPORTED_MODULE_5__["watcherQuestion"])(), Object(_order__WEBPACK_IMPORTED_MODULE_6__["watcherOrder"])()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./sagas/order.js":
/*!************************!*\
  !*** ./sagas/order.js ***!
  \************************/
/*! exports provided: watcherOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watcherOrder", function() { return watcherOrder; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _api_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/order */ "./api/order.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux-toastr */ "./node_modules/react-redux-toastr/lib/index.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities_specifics_errorMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/specifics/errorMessages */ "./utilities/specifics/errorMessages.js");
/* harmony import */ var _utilities_specifics_addToCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/specifics/addToCart */ "./utilities/specifics/addToCart.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/urls */ "./constants/urls.js");


var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watcherOrder),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addToCart);










function watcherOrder() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watcherOrder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["ADD_TO_CART_REQUEST"], addToCart);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function addToCartRequest(data) {
  return _api_order__WEBPACK_IMPORTED_MODULE_4__["addToCart"](data);
}

function addToCart(action) {
  var response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addToCart$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addToCartRequest, action.data);

        case 3:
          response = _context2.sent;
          response.data.message.forEach(function (message) {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__["toastr"].success(" ", message.toString());
          });
          Object(_utilities_specifics_addToCart__WEBPACK_IMPORTED_MODULE_7__["addToCart"])(action.data.product_id, 1);
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push, _constants_urls__WEBPACK_IMPORTED_MODULE_9__["CART"]);

        case 8:
          _context2.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["OrderAction"].addToCartSuccess(response.data.data));

        case 10:
          _context2.next = 17;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          Object(_utilities_specifics_errorMessages__WEBPACK_IMPORTED_MODULE_6__["SetMessage"])(_context2.t0, true);
          _context2.next = 17;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_3__["OrderAction"].addToCartFailure());

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 12]]);
}

/***/ }),

/***/ "./utilities/specifics/addToCart.js":
/*!******************************************!*\
  !*** ./utilities/specifics/addToCart.js ***!
  \******************************************/
/*! exports provided: addToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_storageKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/storageKey */ "./constants/storageKey.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/urls */ "./constants/urls.js");



var addToCart = function addToCart(id, qty) {
  var cart = [];
  var pushStatus = true;

  if (localStorage.getItem(_constants_storageKey__WEBPACK_IMPORTED_MODULE_1__["CART"])) {
    cart = JSON.parse(localStorage.getItem(_constants_storageKey__WEBPACK_IMPORTED_MODULE_1__["CART"]));
  }

  cart.filter(function (item) {
    if (item.id === id) {
      pushStatus = false;
    }
  });

  if (pushStatus) {
    cart.push({
      id: id,
      quantity: qty
    });
  }

  localStorage.setItem(_constants_storageKey__WEBPACK_IMPORTED_MODULE_1__["CART"], _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(cart));
};

/***/ })

})
//# sourceMappingURL=_app.js.a4946da9abf70ebd1b19.hot-update.js.map