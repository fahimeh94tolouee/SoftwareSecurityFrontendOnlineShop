webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./api/user.js":
/*!*********************!*\
  !*** ./api/user.js ***!
  \*********************/
/*! exports provided: getInfo, updateInfo, changePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInfo", function() { return updateInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/api */ "./constants/api.js");


var baseUrl = "http://127.0.0.1:8000";
var getInfo = function getInfo() {
  return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "get",
    url: "".concat(baseUrl).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["USER_API"]),
    needToken: true
  });
};
var updateInfo = function updateInfo(data) {
  return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "put",
    url: "".concat(baseUrl).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["USER_API"]).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["UPDATE_INFO_API"]),
    needToken: true,
    data: data
  });
};
var changePassword = function changePassword(data) {
  return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "post",
    url: "".concat(baseUrl).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["USER_API"]).concat(_constants_api__WEBPACK_IMPORTED_MODULE_1__["CHANGE_PASSWORD_API"]),
    needToken: true,
    data: data
  });
};

/***/ })

})
//# sourceMappingURL=_app.js.0ffe463d631da20bc1b8.hot-update.js.map