webpackHotUpdate("static/development/pages/product.js",{

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

/***/ "./components/product/topSection.js":
/*!******************************************!*\
  !*** ./components/product/topSection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_components_product_topSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styled_components/product/topSection */ "./styled_components/product/topSection.js");
/* harmony import */ var react_image_magnify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-magnify */ "./node_modules/react-image-magnify/dist/es/ReactImageMagnify.js");
/* harmony import */ var _topSection_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topSection/rating */ "./components/product/topSection/rating.js");
/* harmony import */ var _topSection_offerRibbon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topSection/offerRibbon */ "./components/product/topSection/offerRibbon.js");
/* harmony import */ var _topSection_features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topSection/features */ "./components/product/topSection/features.js");
/* harmony import */ var _topSection_variationDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topSection/variationDetail */ "./components/product/topSection/variationDetail.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carousel */ "./components/product/carousel.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);












var TopSection = function TopSection(props) {
  // const product = props.product.data;
  var product = props.product; // const variations = props.product.variations;
  // const variation = props.product.variations[0];

  var variation = null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      carouselStatus = _useState2[0],
      setCarouselStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      initialState = _useState4[0],
      setInitialState = _useState4[1];

  var cartButs = function cartButs() {
    if (variation === undefined) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "notice"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "\u0645\u0648\u062C\u0648\u062F \u0634\u062F \u0628\u0647 \u0645\u0646 \u0627\u0637\u0644\u0627\u0639 \u0628\u062F\u0647"));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "wish"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "icon-good"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "add-to-cart",
        onClick: function onClick() {
          props.addToCart(product);
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Add to Cart")));
    }
  };

  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_product_topSection__WEBPACK_IMPORTED_MODULE_3__["Images"], {
    containerWidth: props.containerWidth
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_image_magnify__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "zoom",
    enlargedImageContainerClassName: "enlarged"
  }, {
    smallImage: {
      alt: product.title,
      isFluidWidth: true,
      src: "".concat("http://127.0.0.1:8000", "/").concat(product.image_path)
    },
    largeImage: {
      src: "".concat("http://127.0.0.1:8000", "/").concat(product.image_path),
      width: 1200,
      height: 1200
    }
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_product_topSection__WEBPACK_IMPORTED_MODULE_3__["Details"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "right"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, product.title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "left"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "ribbon"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, product.category)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "rate"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "right"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_topSection_rating__WEBPACK_IMPORTED_MODULE_5__["default"], {
    rate: 4,
    amount: 40
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "left"
  }, " Style: ", product.type)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "variations"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "right"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "left"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "slogans"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "right"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "baseicon-shield"
  }), "Special Service: Product Exchange Guarantee for Refunds"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "left"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    target: "_blank"
  }, "Sell your product in Maleno")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_product_topSection__WEBPACK_IMPORTED_MODULE_3__["Actions"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "images-but"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "box"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "".concat("http://127.0.0.1:8000", "/").concat(product.image_path),
    alt: product.title,
    onClick: function onClick() {
      setCarouselStatus(true);
    }
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "buts"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "right"
  }, cartButs()), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "left"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "compare"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "icon-law"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "notice"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "icon-bell"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "share"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "icon-social-media"
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TopSection);

/***/ }),

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions/product */ "./actions/product.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _actions_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions/breadcrumb */ "./actions/breadcrumb.js");
/* harmony import */ var _components_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/lib/breadcrumb */ "./components/lib/breadcrumb.js");
/* harmony import */ var _styled_components_product__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styled_components/product */ "./styled_components/product/index.js");
/* harmony import */ var _components_product_topSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/product/topSection */ "./components/product/topSection.js");
/* harmony import */ var _components_product_slogans__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/product/slogans */ "./components/product/slogans.js");
/* harmony import */ var _components_product_variations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/product/variations */ "./components/product/variations.js");
/* harmony import */ var _containers_productData__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../containers/productData */ "./containers/productData.js");
/* harmony import */ var _components_homeScreen_productCarousel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/homeScreen/productCarousel */ "./components/homeScreen/productCarousel.js");
/* harmony import */ var _constants_storageKey__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../constants/storageKey */ "./constants/storageKey.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../constants/urls */ "./constants/urls.js");

























var Product =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Product, _Component);

  function Product() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Product);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Product).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      id: _this.props && _this.props.id
    });

    _this.TopBoxRef = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Product, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setLoading({
        loading: false
      });
      this.props.show(this.state.id);
    }
  }, {
    key: "variationChange",
    value: function variationChange(value) {// this.props.getProductVariations(this.props.id, value);
    }
  }, {
    key: "addToCart",
    value: function addToCart(data) {
      this.props.addToCart(data);
    }
  }, {
    key: "render",
    value: function render() {
      var product = this.props.product;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_styled_components_product__WEBPACK_IMPORTED_MODULE_16__["TopBox"], {
        ref: this.TopBoxRef
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_product_topSection__WEBPACK_IMPORTED_MODULE_17__["default"], {
        addToCart: this.addToCart.bind(this),
        product: product,
        variationChange: this.variationChange.bind(this),
        containerWidth: this.TopBoxRef && this.TopBoxRef.current && this.TopBoxRef.current.getBoundingClientRect().width
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_product_slogans__WEBPACK_IMPORTED_MODULE_18__["default"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_containers_productData__WEBPACK_IMPORTED_MODULE_20__["default"], {
        name: product.title // enName={product.en_name}
        // productData={product.product_data}
        // advantages={product.advantages}
        // disadvantages={product.disadvantages}
        // rating={this.props.product.meta.ratings}
        ,
        desc: product.description // meta_description={product.meta_description}
        ,
        id: this.state.id
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var store, query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, query = _ref.query;
                _context.next = 3;
                return store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_13__["ProductAction"].show(query.id));

              case 3:
                return _context.abrupt("return", {
                  id: query.id
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var result = {};

      if (nextProps.id !== prevState.id) {
        result.id = nextProps.id;
        nextProps.setLoading({
          loading: false
        });
      }

      return result;
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var mapStateToProps = function mapStateToProps(store) {
  return {
    product: store.Product.product,
    breadcrumb: store.Breadcrumb
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProduct: function getProduct(id) {
      dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_12__["getProduct"])(id));
    },
    getProductVariations: function getProductVariations(product, variation) {
      dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_12__["getProductVariations"])(product, variation));
    },
    setLoading: function setLoading(data) {
      dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_12__["setLoading"])(data));
    },
    show: function show(id) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_13__["ProductAction"].show(id));
    },
    addToCart: function addToCart(data) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_13__["OrderAction"].addToCart(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Product)));

/***/ })

})
//# sourceMappingURL=product.js.a4946da9abf70ebd1b19.hot-update.js.map