webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _utilities_specifics_getUserIdentification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/specifics/getUserIdentification */ "./utilities/specifics/getUserIdentification.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");



var initialState = {
  token: false,
  data: null,
  loading: false,
  changePasswordProcessing: false,
  error: "",
  processing: false
};

var User = function User() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var previousData = {},
      fullName = "";

  switch (action.type) {
    case 'SET_USER_DATA':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, action.payload);

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_USER_DATA"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true,
        data: null,
        error: ""
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_USER_DATA_SUCCESS"]:
      previousData = state.data ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.data) : {};
      fullName = Object(_utilities_specifics_getUserIdentification__WEBPACK_IMPORTED_MODULE_1__["default"])(action.data);
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        data: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previousData, action.data, {
          fullName: fullName
        })
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["GET_USER_DATA_FAILURE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        error: action.error
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_USER_PASSWORD"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        changePasswordProcessing: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_USER_PASSWORD_SUCCESS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        changePasswordProcessing: false
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["CHANGE_USER_PASSWORD_FAILURE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        changePasswordProcessing: false
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_DATA"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: true
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_DATA_SUCCESS"]:
      previousData = state.data ? Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.data) : {};
      fullName = Object(_utilities_specifics_getUserIdentification__WEBPACK_IMPORTED_MODULE_1__["default"])(action.data);
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: false,
        data: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previousData, action.data, {
          fullName: fullName
        })
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_2__["UPDATE_USER_DATA_FAILURE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        processing: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

})
//# sourceMappingURL=_app.js.d1ee5aed117fdfe7672b.hot-update.js.map