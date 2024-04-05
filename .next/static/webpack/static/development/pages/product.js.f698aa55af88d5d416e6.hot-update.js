webpackHotUpdate("static/development/pages/product.js",{

/***/ "./components/product/topSection/rating.js":
/*!*************************************************!*\
  !*** ./components/product/topSection/rating.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Rating = function Rating(props) {
  var stars = [];

  for (var index = 1; index < 6; index++) {
    if (index <= props.rate) {
      stars.push('active');
    } else {
      stars.push('');
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, stars.map(function (star, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      className: "star ".concat(star)
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "text"
  }, props.amount, " rating"));
};

/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ })

})
//# sourceMappingURL=product.js.f698aa55af88d5d416e6.hot-update.js.map