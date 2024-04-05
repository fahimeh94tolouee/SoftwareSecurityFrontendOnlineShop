webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./components/cart/invoice.js":
/*!************************************!*\
  !*** ./components/cart/invoice.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Your Profit from this Purchase"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "222(", props.data.discount_percent, "\u066A)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, convertNumber(props.data.total_discount_amount)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "CAD"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Shipping Cost"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, shippingCostView(props.data.shipping_cost))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/***/ })

})
//# sourceMappingURL=cart.js.9eebdb6f3aedb22c21f5.hot-update.js.map