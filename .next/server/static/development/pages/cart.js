module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/cart.js":
/*!*************************!*\
  !*** ./actions/cart.js ***!
  \*************************/
/*! exports provided: setCart, getCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCart", function() { return setCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");




var setCart = function setCart(data) {
  return {
    type: "SET_CART",
    payload: data
  };
};
var getCart = function getCart(moreData) {
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
                params = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()(params, moreData);
                _context.next = 7;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_3__["default"])({
                  url: "http://127.0.0.1:8000" + "/cart/variations/",
                  method: "post",
                  data: params
                }).then(function (response) {
                  dispatch(setCart({
                    items: response.data.data,
                    meta: response.data.meta
                  }));
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

/***/ }),

/***/ "./components/cart/basket.js":
/*!***********************************!*\
  !*** ./components/cart/basket.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_numberSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/numberSelect */ "./components/lib/numberSelect.js");
/* harmony import */ var _styled_components_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styled_components/cart */ "./styled_components/cart.js");




var Basket = function Basket(props) {
  var offer = function offer(old_price) {
    if (typeof old_price !== "undefined" && old_price > 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "offer"
      }, "\u0641\u0640\u0631\u0648\u0634 \u0648\u06CC\u0640\u0698\u0647");
    }
  };

  var price = function price(_price, old_price, discount_amount) {
    if (typeof old_price !== "undefined" && old_price > 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "old-price"
      }, old_price.toLocaleString("en"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "currency"
      }, "CAD")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "discount"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "(", discount_amount.toLocaleString("en"), ")"), "\u062A\u062E\u0641\u06CC\u0641 \u0641\u0631\u0648\u0634 \u0648\u06CC\u0698\u0647"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "price"
      }, _price.toLocaleString("en"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "currency"
      }, "CAD")));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "price"
      }, _price.toLocaleString("en"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "currency"
      }, "CAD"));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_cart__WEBPACK_IMPORTED_MODULE_2__["BasketBox"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title"
  }, "Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: item.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, offer(item.old_price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-close close",
      onClick: function onClick() {
        props.removeItem(item.id);
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/product/".concat(item.product_id),
      target: "_blank"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.main_image.path,
      alt: item.name
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "details"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/product/".concat(item.product_id),
      target: "_blank"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "seller"
    }, "\u0641\u0631\u0648\u0634\u0646\u062F\u0647 :", item.seller.shop_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "guarantee"
    }, item.guarantee.short_desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "color"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        backgroundColor: item.color.hex_color_code
      }
    }), "\u0631\u0646\u06AF :", item.color.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "number"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_numberSelect__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: item.quantity,
      max: item.max_per_order,
      title: "\u062A\u0639\u062F\u0627\u062F",
      onChange: function onChange(value) {
        props.changeAmount(item.id, value);
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "value"
    }, price(item.price, item.old_price, item.discount_amount)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Basket);

/***/ }),

/***/ "./components/cart/invoice.js":
/*!************************************!*\
  !*** ./components/cart/invoice.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled_components/cart */ "./styled_components/cart.js");



var Invoice = function Invoice(props) {
  var convertNumber = function convertNumber(value) {
    if (typeof value !== "undefined") {
      return value.toLocaleString("en");
    }
  };

  var shippingCostView = function shippingCostView(cost) {
    if (typeof cost !== "undefined") {
      if (cost < 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dependent on Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon-round-help-button"
        }));
      } else if (cost === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Free");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, cost.toLocaleString("en")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CAD"));
      }
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_cart__WEBPACK_IMPORTED_MODULE_1__["InvoiceBox"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Total Amount (", props.data.product_count, " items)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, convertNumber(props.data.sum_of_old_prices)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CAD"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "blue"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Your Profit from this Purchase"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "(", props.data.discount_percent, "\u066A)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, convertNumber(props.data.total_discount_amount)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CAD"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Shipping Cost"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, shippingCostView(props.data.shipping_cost))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "action"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "price-notice"
  }, "Payment Amount"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price"
  }, convertNumber(props.data.sum_of_prices), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CAD")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "but ".concat(props.stepStatus ? "" : "disable"),
    onClick: function onClick() {
      if (props.stepStatus) {
        props.nextStep();
      }
    }
  }, "Continue to Checkout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comment"
  }, "The items in your cart are not registered yet. Complete the next steps to place your order.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-round-help-button"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Invoice);

/***/ }),

/***/ "./components/lib/numberSelect.js":
/*!****************************************!*\
  !*** ./components/lib/numberSelect.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_components_lib_numberSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styled_components/lib/numberSelect */ "./styled_components/lib/numberSelect.js");
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-event-listener */ "react-event-listener");
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_event_listener__WEBPACK_IMPORTED_MODULE_3__);





var NumberSelect = function NumberSelect(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var items = function items() {
    var result = [];

    for (var index = 1; index <= props.max; index++) {
      result.push(index);
    }

    return result;
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_components_lib_numberSelect__WEBPACK_IMPORTED_MODULE_2__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_event_listener__WEBPACK_IMPORTED_MODULE_3___default.a, {
    target: "window",
    onClick: function onClick() {
      setStatus(false);
    }
  }), props.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_components_lib_numberSelect__WEBPACK_IMPORTED_MODULE_2__["Area"], {
    status: status,
    onClick: function onClick(e) {
      e.stopPropagation();
      setStatus(!status);
    }
  }, props.value, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "tool"
  }, items().map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: item,
      onClick: function onClick() {
        if (item !== props.value) {
          props.onChange(item);
        }
      }
    }, item);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_components_lib_numberSelect__WEBPACK_IMPORTED_MODULE_2__["Arrows"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    onClick: function onClick() {
      if (props.value < props.max) {
        props.onChange(props.value + 1);
      }
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    onClick: function onClick() {
      if (props.value > 1) {
        props.onChange(props.value - 1);
      }
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NumberSelect);

/***/ }),

/***/ "./constants/storageKey.js":
/*!*********************************!*\
  !*** ./constants/storageKey.js ***!
  \*********************************/
/*! exports provided: ACCESS_TOKEN, EMAIL, RESET_PASS_TOKEN, FORGET_VERIFY, USER_VERIFY_STATE, CART */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN", function() { return ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL", function() { return EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASS_TOKEN", function() { return RESET_PASS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGET_VERIFY", function() { return FORGET_VERIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_VERIFY_STATE", function() { return USER_VERIFY_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
var ACCESS_TOKEN = "accessToken";
var EMAIL = "email";
var RESET_PASS_TOKEN = "reset-pass-token";
var FORGET_VERIFY = "forget-verify";
var USER_VERIFY_STATE = "user_verify_state";
var CART = "cart";

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/cart */ "./actions/cart.js");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-bootstrap-grid */ "styled-bootstrap-grid");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styled_components_cart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styled_components/cart */ "./styled_components/cart.js");
/* harmony import */ var _components_cart_basket__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/cart/basket */ "./components/cart/basket.js");
/* harmony import */ var _components_cart_invoice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/cart/invoice */ "./components/cart/invoice.js");

















var Cart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Cart, _Component);

  function Cart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Cart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Cart).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Cart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getCart();
    }
  }, {
    key: "changeAmount",
    value: function changeAmount(id, quantity) {
      var cart = [];

      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.filter(function (item, key) {
        if (item.id === id) {
          cart[key]["quantity"] = quantity;
        }
      });
      localStorage.setItem("cart", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(cart));
      this.props.getCart();
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      var cart = [];

      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.filter(function (item, key) {
        if (item.id === id) {
          cart.splice(key, 1);
        }
      });
      localStorage.setItem("cart", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(cart));
      this.props.getCart();
    }
  }, {
    key: "goToShipping",
    value: function goToShipping() {
      this.props.router.push("/shipping");
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        col: 9
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_cart_basket__WEBPACK_IMPORTED_MODULE_14__["default"], {
        items: this.props.cart.items,
        changeAmount: this.changeAmount.bind(this),
        removeItem: this.removeItem.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled_components_cart__WEBPACK_IMPORTED_MODULE_13__["SmallBut"], {
        onClick: this.goToShipping.bind(this)
      }, "Continue to Checkout")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        col: 3
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_cart_invoice__WEBPACK_IMPORTED_MODULE_15__["default"], {
        data: this.props.cart.meta,
        nextStep: this.goToShipping.bind(this),
        stepStatus: true
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled_components_cart__WEBPACK_IMPORTED_MODULE_13__["Slogans"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icon-track"
      }), "Express Delivery"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icon-pay-7"
      }), "Exchange Guarantee for Refunds"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "icon-pay-8"
      }), "Cash on Delivery"))))));
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

              case 1:
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
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(store) {
  return {
    cart: store.Cart
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getCart: function getCart() {
      dispatch(Object(_actions_cart__WEBPACK_IMPORTED_MODULE_11__["getCart"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Cart)));

/***/ }),

/***/ "./styled_components/cart.js":
/*!***********************************!*\
  !*** ./styled_components/cart.js ***!
  \***********************************/
/*! exports provided: BasketBox, InvoiceBox, SmallBut, Slogans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketBox", function() { return BasketBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceBox", function() { return InvoiceBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallBut", function() { return SmallBut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slogans", function() { return Slogans; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./styled_components/variables.js");


var BasketBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cart__BasketBox",
  componentId: "sc-12vrgyx-0"
})(["background-color:", ";border:solid 1px ", ";border-radius:4px;box-shadow:0 0 32px 0 rgba(0,0,0,0.05);margin:70px 0;.title{font-size:16px;margin-top:-30px;position:absolute;}table{width:100%;border-collapse:collapse;.offer{position:absolute;width:92px;height:22px;background-color:", ";color:", ";font-size:10px;font-weight:500;z-index:1;top:8px;right:-16px;border-top-right-radius:10px;border-bottom-right-radius:10px;line-height:24px;text-align:center;padding-right:10px;&:before{position:absolute;right:5px;content:\"\\44\";font-family:maleno;font-size:14px;top:-1px;}}tr{border-bottom:solid 1px ", ";td{padding:22px;position:relative;.close{background-color:", ";color:", ";border-radius:10px;width:20px;height:20px;display:inline-block;position:relative;cursor:pointer;&::before{position:absolute;top:5px;right:5px;font-size:10px;}}&:first-child{width:20px;}}.image{border-left:dashed 1px ", ";width:200px;img{width:100%;}}.details{vertical-align:top;a{color:", ";}ul{list-style:none;margin:0;padding:0;li{padding-right:30px;font-size:13px;line-height:40px;position:relative;&:first-child{font-size:14px;padding-right:0;i{display:inline-block;margin:0 8px;font-size:20px;}}&::before{font-family:maleno;position:absolute;color:", ";top:0px;font-size:20px;right:0;}}.seller{&:before{content:\"\\e019\";}}.guarantee{&:before{content:\"\\e016\";}}.color{span{width:20px;height:20px;content:\"\";position:absolute;border-radius:5px;right:1px;top:7px;border:solid 1px rgba(0,0,0,0.05);}}}}.number{width:20px;}.value{text-align:center;.currency{margin-right:12px;}.old-price{color:", ";display:block;font-size:12px;margin-bottom:16px;text-decoration:line-through;}.discount{color:", ";display:block;font-size:12px;margin-bottom:16px;span{margin-left:12px;}}.price{display:block;font-size:18px;margin-bottom:16px;span{font-size:14px;}}}&:last-child{border-bottom:none;}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lipstick, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.font, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey);
var InvoiceBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cart__InvoiceBox",
  componentId: "sc-12vrgyx-1"
})(["background-color:", ";border:solid 1px ", ";border-radius:4px;box-shadow:0 0 32px 0 rgba(0,0,0,0.05);margin-top:70px;margin-bottom:32px;padding:8px;font-family:Number;table{width:100%;font-size:13px;tr{td{padding:8px 0;span{margin:0 4px;}&:last-child{text-align:left;}}}.blue{color:", ";}}.action{background-color:", ";border:solid 1px ", ";border-radius:8px;margin-top:24px;margin-bottom:-16px;padding:16px;font-family:Number;text-align:center;.price-notice{font-size:16px;width:100%;display:block;}.price{border:solid 1px ", ";color:", ";width:165px;border-radius:12px;font-size:20px;font-weight:500;line-height:48px;margin:auto;margin-top:16px;margin-bottom:16px;position:relative;padding-right:20px;span{font-size:14px;margin:0 8px;}&:before{content:\"\\79\";font-family:maleno;color:", ";position:absolute;left:8px;}}.but{background-color:", ";line-height:56px;border-radius:12px;color:", ";font-size:18px;font-weight:500;position:relative;overflow:hidden;cursor:pointer;margin-bottom:16px;&:before{opacity:0.1;content:\"\";width:63px;height:130%;border-radius:100%;position:absolute;top:-15%;right:-10px;background-color:", ";}&:after{font-family:maleno;color:", ";content:\"\\2a\";position:absolute;right:16px;font-size:22px;}}.disable{opacity:0.5;cursor:default;}.comment{color:", ";text-align:right;margin-bottom:16px;}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lipstick, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey);
var SmallBut = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cart__SmallBut",
  componentId: "sc-12vrgyx-2"
})(["position:absolute;bottom:34px;left:8px;background-color:", ";border-radius:12px;padding:6px 12px 6px 42px;cursor:pointer;&:before{font-family:maleno;position:absolute;left:12px;content:\"\\64\";font-size:20px;top:4px;}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey);
var Slogans = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cart__Slogans",
  componentId: "sc-12vrgyx-3"
})(["background-color:", ";border:solid 1px ", ";border-radius:4px;box-shadow:0 0 32px 0 rgba(0,0,0,0.05);font-size:12px;padding:16px 24px;ul{list-style:none;padding:0;margin:0;li{padding:12px 0;padding-left:32px;position:relative;i{position:absolute;left:0;font-size:18px;top:10px;}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey);

/***/ }),

/***/ "./styled_components/lib/numberSelect.js":
/*!***********************************************!*\
  !*** ./styled_components/lib/numberSelect.js ***!
  \***********************************************/
/*! exports provided: Box, Area, Arrows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrows", function() { return Arrows; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "numberSelect__Box",
  componentId: "ebffc4-0"
})(["position:relative;display:flex;justify-content:right;align-items:center;"]);
var Area = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "numberSelect__Area",
  componentId: "ebffc4-1"
})(["background-color:", ";border:solid 1px ", ";border-radius:8px;box-shadow:0 0 6px 0 rgba(0,0,0,0.05);width:60px;font-family:Number;margin:0 8px;position:relative;font-size:18px;font-weight:500;padding:12px;cursor:pointer;", " &::after{content:\"\\76\";font-family:maleno;display:inline-block;font-size:12px;position:absolute;left:10px;top:15px;", " ", "}.tool{", " height:", ";background-color:", ";border:solid 1px ", ";border-top:navajowhite;border-bottom-left-radius:8px;border-bottom-right-radius:8px;position:absolute;top:38px;right:-1px;list-style:none;margin:0;width:60px;padding:0;font-size:14px;overflow:hidden;z-index:1;li{padding:8px 12px 8px 0px;&:hover{background-color:", ";}&:first-child{border-top:solid 1px ", ";}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, function (props) {
  if (props.status) {
    return _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue;
  } else {
    return _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey;
  }
}, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), function (props) {
  return props.status ? Object(_variables__WEBPACK_IMPORTED_MODULE_1__["rotate"])(0) : Object(_variables__WEBPACK_IMPORTED_MODULE_1__["rotate"])(180);
}, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), function (props) {
  return props.status ? "auto" : "0";
}, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, function (props) {
  return props.status ? _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue : "none";
}, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey);
var Arrows = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "numberSelect__Arrows",
  componentId: "ebffc4-2"
})(["list-style:none;margin:0;padding:0;li{height:20px;width:20px;border:solid 1px;position:relative;cursor:pointer;&:before{position:absolute;font-family:maleno;font-size:10px;top:4px;right:4px;}&:first-child{background-color:", ";border-top-left-radius:16px;border-top-right-radius:16px;border-color:", ";&:before{content:\"\\28\";color:", ";}}&:last-child{border-color:", ";border-bottom-left-radius:16px;border-bottom-right-radius:16px;&:before{content:\"\\27\";}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey);

/***/ }),

/***/ "./styled_components/variables.js":
/*!****************************************!*\
  !*** ./styled_components/variables.js ***!
  \****************************************/
/*! exports provided: transition, rotate, desktopWidthLimits, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopWidthLimits", function() { return desktopWidthLimits; });
var Variables = {
  colors: {
    background: "#fafafa",
    white: "#fff",
    dark_white: "#f6f6f6",
    light_white: "#fafafa",
    black: "#000",
    font: "#666865",
    light_font: "#9c9e9f",
    dark_font: "#303030",
    footer_background: "#333",
    warm_grey: "#7d7d7d",
    warm_gery_2: "#9c9c9c",
    medium_grey: "#666865",
    light_grey: "#e2e2e2",
    thin_grey: "#f0f0f0",
    pinkish_grey: "#cfcfcf",
    nice_blue: "#0f4da8",
    windows_blue: "#3364ad",
    cool_blue: "#547fbe",
    smooth_blue: "#f0f5fd",
    menu_link: "#666865",
    lipstick: "#cb1e4a",
    dusty_teal: "#4c8e8c",
    orang: "#fb930d",
    dark_red: "#a10e33",
    gold: "#efcf4a",
    dark_green_blue: "#174f49",
    light_green_blue: "#7fafaa",
    light_salmon: "#ffa57a",
    goldenrod: "#ffc600",
    dark_olive: "#a87f3c",
    amaranth: "#ea3462",
    red_violet: "#b81096",
    marine: "#072d66",
    grey_smooth: "#616568",
    grey_light: "#8c8c8c",
    menu_border: "#bdc3c7",
    placeholder: "#c6cbcf"
  },
  dimensions: {
    desktop_max_width: "1640px",
    desktop_min_width: "1040px"
  }
};
var transition = function transition(time) {
  return "-webkit-transition: all " + time + "s;transition: all " + time + "s;";
};
var rotate = function rotate(value) {
  return "-ms-transform: rotate(" + value + "deg);-webkit-transform: rotate(" + value + "deg);transform: rotate(" + value + "deg);";
};
var desktopWidthLimits = function desktopWidthLimits() {
  var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    min: true,
    max: true
  };

  if (arg.max && arg.min) {
    return "max-width:" + Variables.dimensions.desktop_max_width + ";min-width:" + Variables.dimensions.desktop_min_width + ";";
  } else if (arg.min) {
    return "min-width:" + Variables.dimensions.desktop_min_width + ";";
  } else if (arg.max) {
    return "max-width:" + Variables.dimensions.desktop_max_width + ";";
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Variables);

/***/ }),

/***/ "./utilities/logout.js":
/*!*****************************!*\
  !*** ./utilities/logout.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tokenManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenManager */ "./utilities/tokenManager.js");
/* harmony import */ var _constants_storageKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/storageKey */ "./constants/storageKey.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  localStorage.clear();
  sessionStorage.clear();
  Object(_tokenManager__WEBPACK_IMPORTED_MODULE_0__["deleteCookie"])(_constants_storageKey__WEBPACK_IMPORTED_MODULE_1__["ACCESS_TOKEN"]); // window.location.replace('/');

  window.location.href = "/";
});

/***/ }),

/***/ "./utilities/request.js":
/*!******************************!*\
  !*** ./utilities/request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios/index */ "axios/index");
/* harmony import */ var axios_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tokenManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokenManager */ "./utilities/tokenManager.js");
/* harmony import */ var _utilities_logout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/logout */ "./utilities/logout.js");
/* harmony import */ var _constants_storageKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/storageKey */ "./constants/storageKey.js");




// import React from "react";
// import Axios from "axios/index";
// import { getToken, setToken, deleteCookie } from "./tokenManager";
// import {ACCESS_TOKEN} from "../constants/storageKey";
//
// const Request = config => {
//   const redirectLogin = async () => {
//     if (typeof window !== "undefined") {
//       await window.location.replace(
//         "/login?redirect=" + window.location.pathname
//       );
//     }
//   };
//   const Refresh = async stopRedirect => {
//     if (getToken("refreshToken")) {
//       await Axios({
//         method: "post",
//         url: process.env.apiUrl + "/oauth/token",
//         stopRedirect:stopRedirect,
//         data: {
//           grant_type: "refresh_token",
//           refresh_token: getToken("refreshToken"),
//           client_id: process.env.clientId,
//           client_secret: process.env.clientSecret
//         }
//       })
//         .then(response => {
//           setToken(response.data);
//         })
//         .catch(() => {
//           if (stopRedirect===false) {
//             redirectLogin();
//           }
//         });
//     } else {
//       if (stopRedirect===false) {
//         redirectLogin();
//       }
//     }
//   };
//   const removeTokens = async () => {
//     await deleteCookie(ACCESS_TOKEN);
//     // await deleteCookie("refreshToken");
//     await redirectLogin();
//   };
//
//   Axios.interceptors.request.use(
//     async function(config) {
//       if (config.needToken) {
//         if (!getToken(ACCESS_TOKEN)) {
//           await Refresh(config.stopRedirect || false);
//         }
//         Object.assign(config.headers, {
//           Authorization: "Bearer " + getToken(ACCESS_TOKEN)
//         });
//       }
//       return config;
//     },
//     function(error) {
//       // Do something with request error
//       return Promise.reject(error);
//     }
//   );
//
//   Axios.interceptors.response.use(
//     function(response) {
//       // Do something with response data
//       return response;
//     },
//     async function(error) {
//       if (error.response.status === 401) {
//         if (error.config.url !== process.env.apiUrl + "/oauth/token") {
//           await Refresh();
//           if (getToken(ACCESS_TOKEN)) {
//             Object.assign(error.config.headers, {
//               Authorization: "Bearer " + getToken(ACCESS_TOKEN)
//             });
//             return Axios.request(error.config);
//           }
//         } else {
//           removeTokens();
//         }
//       }
//       // Do something with response error
//       return Promise.reject(error);
//     }
//   );
//   return Axios.request(config);
// };
// export default Request;


 // import { appVersion } from "../constants";




var Request = function Request(config) {
  var needToken = config.needToken;

  var redirectLogin = function redirectLogin() {
    if (typeof window !== "undefined") {
      var href = window.location.href;
      href = href.replace("/login" + window.location.search, "");

      if (window.location.origin !== href) {
        window.location.replace("/?redirect=" + window.location.pathname);
      }
    }
  };

  var removeTokens = function removeTokens() {
    Object(_tokenManager__WEBPACK_IMPORTED_MODULE_5__["deleteCookie"])(_constants_storageKey__WEBPACK_IMPORTED_MODULE_7__["ACCESS_TOKEN"]);
    redirectLogin();
  };

  axios_index__WEBPACK_IMPORTED_MODULE_4___default.a.interceptors.request.use(
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(config) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // if (config.method === "get") {
              //   config.params = config.params
              //     ? { ...config.params, app_version: appVersion }
              //     : { app_version: appVersion };
              // } else {
              //   if (config.headers["Content-Type"] === "multipart/forms-data") {
              //     if (
              //       config.data instanceof FormData &&
              //       (!config.data.get || !config.data.get("app_version"))
              //     ) {
              //       config.data.append("app_version", appVersion);
              //     }
              //   } else {
              //     config.data = config.data
              //       ? { ...config.data, app_version: appVersion }
              //       : { app_version: appVersion };
              //   }
              // }
              if (needToken && Object(_tokenManager__WEBPACK_IMPORTED_MODULE_5__["getToken"])(_constants_storageKey__WEBPACK_IMPORTED_MODULE_7__["ACCESS_TOKEN"])) {
                _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(config.headers, {
                  Authorization: "Bearer " + Object(_tokenManager__WEBPACK_IMPORTED_MODULE_5__["getToken"])(_constants_storageKey__WEBPACK_IMPORTED_MODULE_7__["ACCESS_TOKEN"])
                });
              } else if (needToken && !Object(_tokenManager__WEBPACK_IMPORTED_MODULE_5__["getToken"])(_constants_storageKey__WEBPACK_IMPORTED_MODULE_7__["ACCESS_TOKEN"])) {
                removeTokens();
              }

              return _context.abrupt("return", config);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), function (error) {
    // Do something with request error
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  });
  axios_index__WEBPACK_IMPORTED_MODULE_4___default.a.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response) {
      var errorRes = error.response;

      if (errorRes.status === 401) {
        // token expired
        removeTokens();
      } else if (errorRes.status === 404) {} // not found
      // if (error.response.data.project_not_found) {
      //   // project not found
      //   if (getProjectRelatedLocalStorage()) {
      //     removeProjectRelatedLocalStorage();
      //     window.location.reload();
      //   }
      // }
      // else if (errorRes.status === 403) {
      //   if (errorRes.data.user_not_verified) {
      //     logout();
      //   } else if (
      //     errorRes.data.project_status_expired ||
      //     errorRes.data.user_limit_exceeded
      //   ) {
      //     // removeProjectRelatedLocalStorage();
      //     window.location.reload();
      //   }
      // }

    }

    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  });
  return axios_index__WEBPACK_IMPORTED_MODULE_4___default.a.request(config);
};

/* harmony default export */ __webpack_exports__["default"] = (Request);

/***/ }),

/***/ "./utilities/tokenManager.js":
/*!***********************************!*\
  !*** ./utilities/tokenManager.js ***!
  \***********************************/
/*! exports provided: setToken, getToken, deleteCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return deleteCookie; });
/* harmony import */ var _constants_storageKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/storageKey */ "./constants/storageKey.js");

var setToken = function setToken(token) {
  /***
   * remove old token
   * document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   * document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   * set new token
   ***/
  setCookie(_constants_storageKey__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"], token.access_token, (token.expires_in - 30) * 1000); // setCookie("refreshToken", token.refresh_token, (180*24*60*60*1000));
};
var getToken = function getToken(tokenName) {
  return getCookie(tokenName);
};

var setCookie = function setCookie(cookieName, cookieValue, expireTime) {
  var date = new Date();
  date.setTime(date.getTime() + expireTime);
  var expires = "expires=" + date.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
};

var getCookie = function getCookie(cookieName) {
  var name = cookieName + "=";
  var cookieArray = document.cookie.split(';');

  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];

    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  return false;
};

var deleteCookie = function deleteCookie(cookieName) {
  document.cookie = cookieName + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
};

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/cart.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fahimeh/Shop/malleno_website/pages/cart.js */"./pages/cart.js");


/***/ }),

/***/ "axios/index":
/*!******************************!*\
  !*** external "axios/index" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios/index");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-event-listener":
/*!***************************************!*\
  !*** external "react-event-listener" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-event-listener");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-bootstrap-grid":
/*!****************************************!*\
  !*** external "styled-bootstrap-grid" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-bootstrap-grid");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=cart.js.map