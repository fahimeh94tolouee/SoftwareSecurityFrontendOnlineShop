webpackHotUpdate("static/development/pages/product.js",{

/***/ "./components/product/productData/tabs.js":
/*!************************************************!*\
  !*** ./components/product/productData/tabs.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Tabs = function Tabs(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: props.status === "features" ? "active" : "",
    onClick: function onClick() {
      props.onChange("features");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "features"
  }, "Product Information")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: props.status === "comments" ? "active" : "",
    onClick: function onClick() {
      props.onChange("comments");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "comments"
  }, "Customer Reviews")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: props.status === "question" ? "active" : "",
    onClick: function onClick() {
      props.onChange("question");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "faq"
  }, "Question and Answers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: props.status === "review" ? "active" : "",
    onClick: function onClick() {
      props.onChange("review");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "review"
  }, "\u0646\u0642\u062F \u0648 \u0628\u0631\u0631\u0633\u06CC")));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ })

})
//# sourceMappingURL=product.js.ada8e1a5216045151153.hot-update.js.map