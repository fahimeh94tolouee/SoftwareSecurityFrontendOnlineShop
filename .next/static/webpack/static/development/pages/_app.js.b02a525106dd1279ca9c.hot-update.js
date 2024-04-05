webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./api/question.js":
/*!*************************!*\
  !*** ./api/question.js ***!
  \*************************/
/*! exports provided: getList, store, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/api */ "./constants/api.js");


var baseUrl = "http://127.0.0.1:8000";
var getList = function getList(productId) {
  return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "get",
    url: "".concat(baseUrl).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_API"]).concat(productId).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["QUESTION_LIST_API"])
  });
};
var store = function store(productId, data) {
  return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "post",
    url: "".concat(baseUrl).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_API"]).concat(productId).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["QUESTION_API"]),
    needToken: true,
    data: data
  });
};
var update = function update(productId, id, data) {
  return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "put",
    url: "".concat(baseUrl).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_API"]).concat(productId).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["QUESTION_API"]).concat(id, "/"),
    needToken: true,
    data: data
  });
};

/***/ })

})
//# sourceMappingURL=_app.js.b02a525106dd1279ca9c.hot-update.js.map