webpackHotUpdate("static/development/pages/cart.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/cart */ "./actions/cart.js");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-bootstrap-grid */ "./node_modules/styled-bootstrap-grid/dist/index.js");
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

/***/ })

})
//# sourceMappingURL=cart.js.bb54799b2159b21b4b02.hot-update.js.map