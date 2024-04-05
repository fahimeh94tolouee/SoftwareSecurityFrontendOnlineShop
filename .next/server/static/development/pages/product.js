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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: setUserData, registerRequest, registerSuccess, registerFailure, verifyRequest, verifySuccess, verifyFailure, loginRequest, loginSuccess, loginFailure, resendCode, doForget, resetToken, resetPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserData", function() { return setUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRequest", function() { return registerRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFailure", function() { return registerFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyRequest", function() { return verifyRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifySuccess", function() { return verifySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyFailure", function() { return verifyFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequest", function() { return loginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailure", function() { return loginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resendCode", function() { return resendCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doForget", function() { return doForget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetToken", function() { return resetToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");
/* harmony import */ var _utilities_tokenManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/tokenManager */ "./utilities/tokenManager.js");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_specifics_errorMessages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/specifics/errorMessages */ "./utilities/specifics/errorMessages.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");
/* harmony import */ var _constants_storageKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/storageKey */ "./constants/storageKey.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/urls */ "./constants/urls.js");









var setUserData = function setUserData(data) {
  return {
    type: "SET_USER_DATA",
    payload: data
  };
};
var registerRequest = function registerRequest(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["REGISTER_REQUEST"],
    data: data
  };
};
var registerSuccess = function registerSuccess() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["REGISTER_SUCCESS"]
  };
};
var registerFailure = function registerFailure() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["REGISTER_FAILURE"]
  };
};
var verifyRequest = function verifyRequest(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["VERIFY_REQUEST"],
    data: data
  };
};
var verifySuccess = function verifySuccess() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["VERIFY_SUCCESS"]
  };
};
var verifyFailure = function verifyFailure() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["VERIFY_FAILURE"]
  };
};
var loginRequest = function loginRequest(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["LOGIN_REQUEST"],
    data: data
  };
};
var loginSuccess = function loginSuccess() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["LOGIN_SUCCESS"]
  };
};
var loginFailure = function loginFailure() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_6__["LOGIN_FAILURE"]
  };
}; // export const doLogin = (username, password, remember) => {
//   return dispatch => {
//     Request({
//       url: process.env.apiUrl + "/oauth/login",
//       method: "post",
//       data: {
//         grant_type: "password",
//         client_id: process.env.clientId,
//         client_secret: process.env.clientSecret,
//         username: username,
//         password: password
//       }
//     })
//       .then(response => {
//         setToken(response.data.token);
//         dispatch(
//           setUserData({
//             token: response.data.token,
//             data: response.data.user
//           })
//         );
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };
// export const register = (username, password) => {
//   return dispatch => {
//     Request({
//       url: process.env.apiUrl + "/auth/register/",
//       method: "post",
//       data: {
//         client_id: process.env.clientId,
//         client_secret: process.env.clientSecret,
//         email: username,
//         password: password,
//         scope: "*"
//       }
//     })
//       .then(response => {
//         setToken(response.data.token);
//         dispatch(
//           setUserData({
//             token: response.data.token,
//             data: response.data.data
//           })
//         );
//         // window.location.replace("/verify");
//       })
//       .catch(error => {
//         SetMessage(error, true)
//       });
//   };
// };

var resendCode = function resendCode(email) {
  return function (dispatch) {
    Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
      method: "post",
      url: "http://127.0.0.1:8000" + "/auth/resend-otp/",
      data: {
        email: email
      },
      needToken: true
    }).then(function () {}).catch(function (error) {
      console.log(error);
    });
  };
}; // export const doVerify = otp => {
//   return async dispatch => {
//     Request({
//       url: process.env.apiUrl + "/sms/verify",
//       method: "post",
//       needToken: true,
//       data: {
//         otp: otp
//       }
//     })
//       .then(response => {
//         window.location.replace("./");
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };

var doForget = function doForget(mobile) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + "/resetPassword/create",
                  method: "post",
                  data: {
                    mobile: mobile
                  }
                }).then(function (response) {
                  sessionStorage.setItem("verify_phone", mobile);
                  window.location.replace("./resetverify");
                }).catch(function (error) {
                  console.log(error);
                });

              case 1:
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
var resetToken = function resetToken(mobile, otp) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + "/resetPassword/find",
                  method: "post",
                  data: {
                    mobile: mobile,
                    otp: otp
                  }
                }).then(function (response) {
                  sessionStorage.setItem("reset_token", response.data.data.token);
                  window.location.replace("./resetpassword");
                }).catch(function (error) {
                  console.log(error);
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var resetPassword = function resetPassword(data) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/auth/reset-password/";
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + url,
                  method: "post",
                  data: data
                }).then(function (response) {
                  sessionStorage.removeItem('reset_token');
                  sessionStorage.removeItem(_constants_storageKey__WEBPACK_IMPORTED_MODULE_7__["EMAIL"]);
                  window.location.replace(_constants_urls__WEBPACK_IMPORTED_MODULE_8__["LOGIN"]);
                }).catch(function (error) {
                  console.log(error);
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./actions/breadcrumb.js":
/*!*******************************!*\
  !*** ./actions/breadcrumb.js ***!
  \*******************************/
/*! exports provided: setBreadcrumb, getBreadcrumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBreadcrumb", function() { return setBreadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreadcrumb", function() { return getBreadcrumb; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");



var setBreadcrumb = function setBreadcrumb(data) {
  return {
    type: 'SET_BREADCRUMB',
    payload: data
  };
};
var getBreadcrumb = function getBreadcrumb(type, id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(setBreadcrumb({
                  loading: true
                }));
                _context.next = 3;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + '/breadcrumbs',
                  method: 'get',
                  params: {
                    type: type,
                    id: id
                  }
                }).then(function (response) {
                  dispatch(setBreadcrumb({
                    loading: false,
                    items: response.data.data
                  }));
                }).catch(function (error) {});

              case 3:
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

/***/ "./actions/comment.js":
/*!****************************!*\
  !*** ./actions/comment.js ***!
  \****************************/
/*! exports provided: setComment, getComments, getUserComments, deleteComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setComment", function() { return setComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserComments", function() { return getUserComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");



var setComment = function setComment(data) {
  return {
    type: "SET_COMMENT",
    payload: data
  };
};
var getComments = function getComments(id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(setComment({
                  loading: true
                }));
                _context.next = 3;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + "/products/" + id + "/comments",
                  method: "get",
                  params: params
                }).then(function (response) {
                  dispatch(setComment({
                    loading: false,
                    data: response.data.data,
                    meta: response.data.meta,
                    cache: true
                  }));
                }).catch(function (error) {});

              case 3:
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
var getUserComments = function getUserComments() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + "/profile/comments",
                  method: "get",
                  needToken: true
                }).then(function (response) {
                  dispatch(setComment({
                    userComments: response.data.data
                  }));
                }).catch(function (error) {});

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var deleteComment = function deleteComment(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + "/comments/" + id,
                  method: "delete",
                  needToken: true
                }).then(function (response) {
                  return true;
                }).catch(function (error) {});

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

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

/***/ "./actions/product.js":
/*!****************************!*\
  !*** ./actions/product.js ***!
  \****************************/
/*! exports provided: setProduct, setLoading, getList, getListSuccess, getListFailure, show, showSuccess, showFailure, getProduct, getProductVariations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProduct", function() { return setProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return setLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListSuccess", function() { return getListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListFailure", function() { return getListFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSuccess", function() { return showSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFailure", function() { return showFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductVariations", function() { return getProductVariations; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");




var setProduct = function setProduct(data) {
  return {
    type: 'SET_PRODUCT',
    payload: data
  };
};
var setLoading = function setLoading(data) {
  return {
    type: 'SET_INITIAL',
    payload: data
  };
};
var getList = function getList(pageNumber) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT_LIST_REQUEST"],
    pageNumber: pageNumber
  };
};
var getListSuccess = function getListSuccess(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT_LIST_SUCCESS"],
    data: data
  };
};
var getListFailure = function getListFailure(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT_LIST_FAILURE"],
    error: error
  };
};
var show = function show(id) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SHOW_PRODUCT_REQUEST"],
    id: id
  };
};
var showSuccess = function showSuccess(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SHOW_PRODUCT_SUCCESS"],
    data: data
  };
};
var showFailure = function showFailure(error) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SHOW_PRODUCT_FAILURE"],
    error: error
  };
};
var getProduct = function getProduct(id) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(setLoading({
                  loading: true
                }));
                _context.next = 3;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + '/products/' + id,
                  method: 'get'
                }).then(function (response) {
                  dispatch(setProduct({
                    data: response.data.data,
                    meta: response.data.meta,
                    variations: response.data.meta.product_variations
                  }));
                }).catch(function (error) {});

              case 3:
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
var getProductVariations = function getProductVariations(product, variation) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch(setProduct({
                  loading: true
                }));
                _context2.next = 3;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + '/products/' + product + '/variations/types/' + variation,
                  method: 'get'
                }).then(function (response) {
                  dispatch(setProduct({
                    loading: false,
                    variations: response.data.data
                  }));
                }).catch(function (error) {});

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./actions/question.js":
/*!*****************************!*\
  !*** ./actions/question.js ***!
  \*****************************/
/*! exports provided: setQuestion, getListRequest, getListSuccess, getListFailure, storeRequest, storeSuccess, storeFailure, ChangeNewQuestionText, updateRequest, updateSuccess, updateFailure, getQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQuestion", function() { return setQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListRequest", function() { return getListRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListSuccess", function() { return getListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListFailure", function() { return getListFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRequest", function() { return storeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeSuccess", function() { return storeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeFailure", function() { return storeFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeNewQuestionText", function() { return ChangeNewQuestionText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRequest", function() { return updateRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSuccess", function() { return updateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFailure", function() { return updateFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuestion", function() { return getQuestion; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/actionTypes */ "./actions/actionTypes.js");




var setQuestion = function setQuestion(data) {
  return {
    type: "SET_QUESTION",
    payload: data
  };
};
var getListRequest = function getListRequest(productId) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_LIST_REQUEST"],
    productId: productId
  };
};
var getListSuccess = function getListSuccess(data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_LIST_SUCCESS"],
    payLoad: data
  };
};
var getListFailure = function getListFailure(error) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_LIST_FAILURE"],
    error: error
  };
};
var storeRequest = function storeRequest(productId, data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_STORE_REQUEST"],
    productId: productId,
    data: data
  };
};
var storeSuccess = function storeSuccess() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_STORE_SUCCESS"]
  };
};
var storeFailure = function storeFailure() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_STORE_FAILURE"]
  };
};
var ChangeNewQuestionText = function ChangeNewQuestionText(data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_ON_CHANGE"],
    data: data
  };
};
var updateRequest = function updateRequest(productId, id, data) {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_UPDATE_REQUEST"],
    productId: productId,
    id: id,
    data: data
  };
};
var updateSuccess = function updateSuccess() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_UPDATE_SUCCESS"]
  };
};
var updateFailure = function updateFailure() {
  return {
    type: _actions_actionTypes__WEBPACK_IMPORTED_MODULE_3__["QUESTION_UPDATE_FAILURE"]
  };
};
var getQuestion = function getQuestion(id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(setQuestion({
                  loading: true
                }));
                _context.next = 3;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + "/products/" + id + "/questions",
                  method: "get",
                  params: params
                }).then(function (response) {
                  dispatch(setQuestion({
                    loading: false,
                    data: response.data.data,
                    meta: response.data.meta,
                    cache: true
                  }));
                }).catch(function (error) {});

              case 3:
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

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/*! exports provided: setInformation, getInfo, getInfoSuccess, getInfoFailure, updateInfo, updateInfoSuccess, updateInfoFailure, changePassword, changePasswordSuccess, changePasswordFailure, getInformation, updateInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInformation", function() { return setInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfoSuccess", function() { return getInfoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfoFailure", function() { return getInfoFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInfo", function() { return updateInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInfoSuccess", function() { return updateInfoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInfoFailure", function() { return updateInfoFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePassword", function() { return changePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePasswordSuccess", function() { return changePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePasswordFailure", function() { return changePasswordFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInformation", function() { return getInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInformation", function() { return updateInformation; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/request */ "./utilities/request.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionTypes */ "./actions/actionTypes.js");




var setInformation = function setInformation(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["SET_USER_DATA"],
    payload: data
  };
};
var getInfo = function getInfo() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_USER_DATA"]
  };
};
var getInfoSuccess = function getInfoSuccess(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_USER_DATA_SUCCESS"],
    data: data
  };
};
var getInfoFailure = function getInfoFailure(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["GET_USER_DATA_FAILURE"],
    data: data
  };
};
var updateInfo = function updateInfo(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER_DATA"],
    data: data
  };
};
var updateInfoSuccess = function updateInfoSuccess(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER_DATA_SUCCESS"],
    data: data
  };
};
var updateInfoFailure = function updateInfoFailure() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER_DATA_FAILURE"]
  };
};
var changePassword = function changePassword(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CHANGE_USER_PASSWORD"],
    data: data
  };
};
var changePasswordSuccess = function changePasswordSuccess() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CHANGE_USER_PASSWORD_SUCCESS"]
  };
};
var changePasswordFailure = function changePasswordFailure() {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_3__["CHANGE_USER_PASSWORD_FAILURE"]
  };
};
var getInformation = function getInformation() {
  var stopRedirect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + "/profile",
                  method: "get",
                  needToken: true,
                  stopRedirect: stopRedirect
                }).then(function (response) {
                  dispatch(setInformation({
                    data: response.data.data
                  }));
                }).catch(function () {
                  setInformation({
                    data: false
                  });
                });

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
    }()
  );
};
var updateInformation = function updateInformation(data) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_utilities_request__WEBPACK_IMPORTED_MODULE_2__["default"])({
                  url: "http://127.0.0.1:8000" + "/profile",
                  method: "post",
                  needToken: true,
                  data: data
                }).then(function (response) {
                  dispatch(setInformation({
                    data: response.data.data
                  }));
                }).catch(function (error) {});

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./components/button/index.js":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styled_components/button */ "./styled_components/button.js");
/* harmony import */ var _loadings_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loadings/spinner */ "./components/loadings/spinner.js");





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var borderless = props.borderless,
      loading = props.loading,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["borderless", "loading"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_button__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    btn: props.btn,
    borderless: borderless,
    active: props.active
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    onClick: !props.onClick ? props.onClick : !loading ? function (e) {
      e.stopPropagation();
      props.onClick(e);
    } : function (e) {
      e.preventDefault();
      return false;
    },
    disabled: props.disabled
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_button__WEBPACK_IMPORTED_MODULE_3__["Loading"], {
    show: loading
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loadings_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_button__WEBPACK_IMPORTED_MODULE_3__["Children"], {
    show: !loading
  }, props.children)));
});

/***/ }),

/***/ "./components/homeScreen/productCarousel.js":
/*!**************************************************!*\
  !*** ./components/homeScreen/productCarousel.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductCarousel; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styled_components_lib_productCarousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styled_components/lib/productCarousel */ "./styled_components/lib/productCarousel.js");
/* harmony import */ var _lib_slideArrow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/slideArrow */ "./components/lib/slideArrow.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);








var _settings;







var settings = (_settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 3200,
  rtl: true
}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_settings, "speed", 500), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_settings, "slidesToShow", 5), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_settings, "slidesToScroll", 1), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_settings, "initialSlide", 0), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_settings, "nextArrow", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_slideArrow__WEBPACK_IMPORTED_MODULE_11__["default"], {
  color: "dark",
  side: "next"
})), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_settings, "prevArrow", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_lib_slideArrow__WEBPACK_IMPORTED_MODULE_11__["default"], {
  color: "dark",
  side: "prev"
})), _settings);

var ProductCarousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProductCarousel, _React$Component);

  function ProductCarousel() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductCarousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductCarousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      loading: true
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductCarousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_12___default()({
        method: "get",
        url: this.props.fetch_url
      }).then(function (response) {
        _this2.setState({
          loading: false,
          items: response.data.data
        });
      }).catch(function (error) {});
    }
  }, {
    key: "makeSlider",
    value: function makeSlider() {
      if (this.state.loading) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "loading"
        }, "loading");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_8___default.a, settings, this.state.items.map(function (item, key) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_components_lib_productCarousel__WEBPACK_IMPORTED_MODULE_10__["Slide"], {
            key: key
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            as: "/product/".concat(item.id),
            href: "/product?id=".concat(item.id)
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "slide-in"
          }, ProductCarousel.Discount(item.discount), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "img-box"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            src: item.main_image.path
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "title"
          }, item.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "detail"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "category"
          }, item.category.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "price"
          }, ProductCarousel.Price({
            old: item.oldPrice,
            new: item.price
          }))))));
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_components_lib_productCarousel__WEBPACK_IMPORTED_MODULE_10__["Box"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_components_lib_productCarousel__WEBPACK_IMPORTED_MODULE_10__["HeaderBox"], null, this.props.title, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        as: this.props.more.url,
        href: this.props.more.url
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "\u0645\u0634\u0627\u0647\u062F\u0647 \u0628\u06CC\u0634\u062A\u0631"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled_components_lib_productCarousel__WEBPACK_IMPORTED_MODULE_10__["FSlider"], null, this.makeSlider())));
    }
  }], [{
    key: "Price",
    value: function Price(price) {
      if (price.old) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "old"
        }, price.old.toLocaleString("fa-IR"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "currency"
        }, "\u062A\u0648\u0645\u0627\u0646")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "new"
        }, price.new.toLocaleString("fa-IR"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "currency"
        }, "\u062A\u0648\u0645\u0627\u0646")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, price.new.toLocaleString("fa-IR"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "currency"
        }, "\u062A\u0648\u0645\u0627\u0646"));
      }
    }
  }, {
    key: "Discount",
    value: function Discount(discount) {
      if (discount) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "discount"
        }, discount, " %");
      }
    }
  }]);

  return ProductCarousel;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./components/lib/breadcrumb.js":
/*!**************************************!*\
  !*** ./components/lib/breadcrumb.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_components_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styled_components/lib/breadcrumb */ "./styled_components/lib/breadcrumb.js");




var Breadcrumb = function Breadcrumb(props) {
  var linkMaker = function linkMaker(item) {
    switch (props.type) {
      case 'product':
        if (item.id) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            as: "/categories/".concat(item.id),
            href: "/categories?slug=".concat(item.id)
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, item.name));
        } else {
          return item.name;
        }

      case 'category':
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          as: "/categories/".concat(item.id),
          href: "/categories?slug=".concat(item.id)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, item.name));

      default:
        return null;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["List"], null, props.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item.id
    }, linkMaker(item));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./components/lib/checkbox.js":
/*!************************************!*\
  !*** ./components/lib/checkbox.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled_components/lib/checkbox */ "./styled_components/lib/checkbox.js");



var Checkbox = function Checkbox(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__["Box"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "checkbox ".concat(props.status ? 'active' : '')
  }), props.title);
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./components/lib/slideArrow.js":
/*!**************************************!*\
  !*** ./components/lib/slideArrow.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Arrow = function Arrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    style: style,
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/" + props.side + "_" + props.color + ".png"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Arrow);

/***/ }),

/***/ "./components/loadings/spinner.js":
/*!****************************************!*\
  !*** ./components/loadings/spinner.js ***!
  \****************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styled_components/loading/spinner */ "./styled_components/loading/spinner.js");


var Spinner = function Spinner(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["SpinnerContainer"], {
    color: props.color,
    borderless: props.borderless,
    btn: props.btn,
    type: props.type,
    size: props.size
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader"
  }));
};

/***/ }),

/***/ "./components/product/carousel.js":
/*!****************************************!*\
  !*** ./components/product/carousel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled_components_product_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styled_components/product/carousel */ "./styled_components/product/carousel.js");
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-event-listener */ "react-event-listener");
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_event_listener__WEBPACK_IMPORTED_MODULE_7__);









var Carousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Carousel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Carousel).call(this, props));
    _this.state = {
      slider_height: 450
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== "undefined") {
        window.document.body.style.overflow = "hidden";
        var slider = window.document.getElementById("slider");
        this.setState({
          slider_height: slider.clientHeight
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window !== "undefined") {
        window.document.body.style.overflow = "auto";
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      if (typeof window !== "undefined") {
        var slider = window.document.getElementById("slider");
        this.setState({
          slider_height: slider.clientHeight
        });
      }
    }
  }, {
    key: "setMargin",
    value: function setMargin() {
      return this.state.slider_height / 2 - this.props.initialState * 120 - 60;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_components_product_carousel__WEBPACK_IMPORTED_MODULE_6__["Box"], {
        margin: this.setMargin()
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_event_listener__WEBPACK_IMPORTED_MODULE_7___default.a, {
        target: "window",
        onResize: this.handleResize.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "overlay",
        onClick: function onClick() {
          _this2.props.close();
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "close",
        onClick: function onClick() {
          _this2.props.close();
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "right"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow next ".concat(this.props.initialState === 0 ? "disable" : ""),
        onClick: function onClick() {
          if (_this2.props.initialState - 1 >= 0) {
            _this2.props.slideChange(_this2.props.initialState - 1);
          }
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow prev ".concat(this.props.initialState === this.props.images.length - 1 ? "disable" : ""),
        onClick: function onClick() {
          if (_this2.props.initialState + 1 < _this2.props.images.length) {
            _this2.props.slideChange(_this2.props.initialState + 1);
          }
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "slider",
        id: "slider"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", null, this.props.images.map(function (img, key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: key,
          className: key === _this2.props.initialState ? "active" : ""
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: img.path,
          onClick: function onClick() {
            _this2.props.slideChange(key);
          }
        }));
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "left"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.images[this.props.initialState]["path"]
      }))));
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./components/product/productData/comments.js":
/*!****************************************************!*\
  !*** ./components/product/productData/comments.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-bootstrap-grid */ "styled-bootstrap-grid");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_components_product_databox_commentsBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styled_components/product/databox/commentsBox */ "./styled_components/product/databox/commentsBox.js");





var Comments = function Comments(props) {
  console.log(props.comments);

  var rating = function rating() {
    if (typeof props.comments.meta.ratings !== "undefined" && props.comments.meta.ratings.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "rate-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, props.comments.meta.ratings.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: item.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "rate-title"
        }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "progress"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            width: item.value + "%"
          }
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "status"
        }, item.string_value));
      })));
    }
  };

  var sellInfo = function sellInfo(seller, color) {
    if (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(seller) === "object") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "buyer-flag"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Purchaser of this Product")), "Color Purchased:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "color"
      }, color.name, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          backgroundColor: color.hex_code
        }
      })), "Purchased from Vendor:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "seller"
      }, seller.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "seller-rate"
      }, "Purchase Satisfaction: ", seller.customer_offer, " % of (", seller.number_of_rating_votes, ") votes"));
    }
  };

  var helpful = function helpful(likes, dislikes) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "helpful"
    }, "Was this review helpful?", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, likes <= 0 ? "" : likes, " Yes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, dislikes <= 0 ? "" : dislikes, " No")));
  };

  var commentsView = function commentsView() {
    if (typeof props.comments.data !== "undefined" && props.comments.data.length > 0) {
      return props.comments.data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "comment",
          key: item.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "right"
        }, sellInfo(item.seller, item.color)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "left"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "post"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "comment-title"
        }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "author"
        }, "By", item.user_full_name, "In the Date", item.created_at)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "text"
        }, item.comment), helpful(item.likes, item.dislikes)));
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_components_product_databox_commentsBox__WEBPACK_IMPORTED_MODULE_3__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "title"
  }, "User Rating for"), props.name, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "6"
  }, rating()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "info"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "You can also give your opinion about this product."), "To leave a review, you need to log in to your account first. If you have already purchased this product from Maleno, your review will be registered as the owner of the product.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "add-comment"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Add a New Review")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sort-title"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Users Reviews"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "sort-list"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Sort based on"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: props.sort === "buyers" ? "active" : "",
    onClick: function onClick() {
      props.changeSort("buyers");
    }
  }, "Customer reviews"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: props.sort === "most_helpful" ? "active" : "",
    onClick: function onClick() {
      props.changeSort("most_helpful");
    }
  }, "Most helpful reviews"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: props.sort === "newest" ? "active" : "",
    onClick: function onClick() {
      props.changeSort("newest");
    }
  }, "Latest Review"))))), commentsView());
};

/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ }),

/***/ "./components/product/productData/features.js":
/*!****************************************************!*\
  !*** ./components/product/productData/features.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components_product_databox_featuresBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styled_components/product/databox/featuresBox */ "./styled_components/product/databox/featuresBox.js");



var Features = function Features(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_product_databox_featuresBox__WEBPACK_IMPORTED_MODULE_1__["Box"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "features-box-title"
  }, "\u0645\u0634\u062E\u0635\u0627\u062A \u0645\u062D\u0635\u0648\u0644"), props.enName, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, props.productData.map(function (features) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: features.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "title"
    }, features.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, features.attributes.map(function (item) {
      if (item.type === "boolean") {
        if (item.value.text == 0) {
          item.value.text = "خیر";
        } else {
          item.value.text = "بله";
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: item.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.value.text)));
    }))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "./components/product/productData/question.js":
/*!****************************************************!*\
  !*** ./components/product/productData/question.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-bootstrap-grid */ "styled-bootstrap-grid");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/checkbox */ "./components/lib/checkbox.js");
/* harmony import */ var _styled_components_product_databox_questionBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styled_components/product/databox/questionBox */ "./styled_components/product/databox/questionBox.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");







var Question = function Question(props) {
  var lengthOfQuestion = function lengthOfQuestion() {
    if (typeof props.questions.data !== "undefined" && props.questions.data.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, "(", props.questions.data.length, " Questions)");
    }
  };

  var helpful = function helpful(likes, dislikes) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "helpful"
    }, "Was this review helpful to you?", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, likes <= 0 ? "" : likes, " Yes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, dislikes <= 0 ? "" : dislikes, " No")));
  };

  var answersView = function answersView(answers) {
    if (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(answers) === "object" && answers.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "answers"
      }, answers.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "answer",
          key: item.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "post"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "comment-title"
        }, "By", " ", item.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "author"
        }, "On", " ", item.created_at)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "text"
        }, item.answer), helpful(item.likes, item.dislikes));
      }));
    }
  };

  var questionsView = function questionsView() {
    if (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(props.questions.data) === "object") {
      return props.questions.data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          key: item.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "question"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "post"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "comment-title"
        }, "By", " ", item.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "author"
        }, "On", " ", item.created_at)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "text"
        }, item.question), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "answer-but"
        }, "Answer to this question")), answersView(item.answers));
      });
    }
  };

  var askQuestion = function askQuestion() {
    props.storeQuestion({
      question: props.questions.newQuestionText
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_components_product_databox_questionBox__WEBPACK_IMPORTED_MODULE_4__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title"
  }, "Questions and Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sub-title"
  }, "Ask your question about this product"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    placeholder: "",
    value: props.questions.newQuestionText,
    onChange: function onChange(e) {
      props.changeNewQuestionText(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "add-faq",
    onClick: function onClick() {
      return askQuestion();
    },
    loading: props.questions.processing
  }, "Ask a question")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "9"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "rule"
  }, "By selecting the 'Ask a question' button, I agree to the content publishing rules on Maleno.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sort-title"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Questions and Answers", lengthOfQuestion()))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "sort-list"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "Sort based on:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: props.sort === "newest" ? "active" : "",
    onClick: function onClick() {
      props.changeSort("newest");
    }
  }, "Latest questions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: props.sort === "most_answered" ? "active" : "",
    onClick: function onClick() {
      props.changeSort("most_answered");
    }
  }, "Most answered questions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: props.sort === "user_question" ? "active" : "",
    onClick: function onClick() {
      props.changeSort("user_question");
    }
  }, "Your questions"))))), questionsView());
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./components/product/productData/review.js":
/*!**************************************************!*\
  !*** ./components/product/productData/review.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-bootstrap-grid */ "styled-bootstrap-grid");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_components_product_databox_reviewBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styled_components/product/databox/reviewBox */ "./styled_components/product/databox/reviewBox.js");





var Review = function Review(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var rating = function rating() {
    if (typeof props.rating !== "undefined" && typeof props.rating !== "boolean" && props.rating !== "null") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "rate-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, props.rating.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: item.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "rate-title"
        }, item.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "progress"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            width: item.value + "%"
          }
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "status"
        }, item.string_value));
      })));
    }
  };

  var disadvantages = function disadvantages() {
    console.log(props.disadvantages);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_components_product_databox_reviewBox__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    status: status
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title"
  }, "\u0646\u0642\u062F \u0648 \u0628\u0631\u0631\u0633\u06CC \u062A\u062E\u0635\u0635\u06CC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sub-title"
  }, props.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "desc"
  }, props.desc, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "more"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "gradient"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "btn"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    onClick: function onClick() {
      setStatus(!status);
    }
  }, status ? "بستن" : "ادامه مطلب")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "6"
  }, rating()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "6"
  }, disadvantages(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "advantages"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "plus"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u0646\u0642\u0627\u0637 \u0642\u0648\u062A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, props.advantages.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key
    }, item);
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mines"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u0646\u0642\u0627\u0637 \u0636\u0639\u0641"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, props.disadvantages.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key
    }, item);
  }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "review"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.meta_description
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Review);

/***/ }),

/***/ "./components/product/productData/tabs.js":
/*!************************************************!*\
  !*** ./components/product/productData/tabs.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
  }, "Questions and Answers")));
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./components/product/slogans.js":
/*!***************************************!*\
  !*** ./components/product/slogans.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-bootstrap-grid */ "styled-bootstrap-grid");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_components_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styled_components/product */ "./styled_components/product/index.js");




var Slogans = function Slogans() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_product__WEBPACK_IMPORTED_MODULE_2__["SlogansBox"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    col: "12",
    sm: "3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slogan-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-truck"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Express Delivery"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    col: "12",
    sm: "3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slogan-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-pay-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Cash on Delivery"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    col: "12",
    sm: "3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slogan-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-pay-7"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Return Guarantee"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    col: "12",
    sm: "3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slogan-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon-sticker"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Authenticity Guarantee"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Slogans);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_components_product_topSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styled_components/product/topSection */ "./styled_components/product/topSection.js");
/* harmony import */ var react_image_magnify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-magnify */ "react-image-magnify");
/* harmony import */ var react_image_magnify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_magnify__WEBPACK_IMPORTED_MODULE_4__);
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
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_image_magnify__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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

/***/ "./components/product/topSection/features.js":
/*!***************************************************!*\
  !*** ./components/product/topSection/features.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_components_product_topSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styled_components/product/topSection */ "./styled_components/product/topSection.js");




var Features = function Features(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      featureBoxStatus = _useState2[0],
      setFeatureBoxStatus = _useState2[1];

  var items = [];
  props.items.forEach(function (item) {
    var attr = item.attributes;
    attr = attr.filter(function (value) {
      if (value.summary_flag) {
        items.push(value);
      }
    });
  });

  var buts = function buts() {
    if (items.length > 3) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "more"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: function onClick() {
          setFeatureBoxStatus(!featureBoxStatus);
        }
      }, "\u0645\u0648\u0627\u0631\u062F \u0628\u06CC\u0634\u062A\u0631")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "less"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: function onClick() {
          setFeatureBoxStatus(!featureBoxStatus);
        }
      }, "\u0628\u0633\u062A\u0646")));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "\u0648\u06CC\u0698\u06AF\u06CC \u0647\u0627\u06CC \u0645\u062D\u0635\u0648\u0644:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_components_product_topSection__WEBPACK_IMPORTED_MODULE_2__["FeaturesBox"], {
    status: featureBoxStatus
  }, items.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: key
    }, item.name, " : ", item.value.text);
  }), buts()));
};

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "./components/product/topSection/offerRibbon.js":
/*!******************************************************!*\
  !*** ./components/product/topSection/offerRibbon.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var OfferRibbon = function OfferRibbon(props) {
  if (props.variation === undefined) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "out-off"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0646\u0627\u0645\u0648\u062C\u0648\u062F"));
  } else if (props.variation.old_price > 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "off"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0641\u0640\u0631\u0648\u0634 \u0648\u06CC\u0640\u0698\u0647"));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (OfferRibbon);

/***/ }),

/***/ "./components/product/topSection/price.js":
/*!************************************************!*\
  !*** ./components/product/topSection/price.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Price = function Price(props) {
  if (props.old_price > 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "price"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "old"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "through"
    }, props.old_price.toLocaleString('fa-IR')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "currency"
    }, " \u0642\u06CC\u0645\u062A \u0642\u0628\u0644")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "box"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "value"
    }, props.price.toLocaleString('fa-IR'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "currency"
    }, " \u062A\u0648\u0645\u0627\u0646")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "discount"
    }, props.discount_percent, "% \u062A\u062E\u0641\u06CC\u0641")));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "price"
    }, props.price.toLocaleString('fa-IR'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "currency"
    }, " \u062A\u0648\u0645\u0627\u0646"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

/***/ "./components/product/topSection/rating.js":
/*!*************************************************!*\
  !*** ./components/product/topSection/rating.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "./components/product/topSection/switchBox.js":
/*!****************************************************!*\
  !*** ./components/product/topSection/switchBox.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SwitchBox = function SwitchBox(props) {
  // console.log(props.switches);
  switch (props.type) {
    case "color":
      var more = function more() {
        if (props.switches.length > 3) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: "more"
          }, props.switches.length - 3 + "+ رنگ های بیشتر");
        }
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "color"
      }, props.switches.map(function (item, key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: key,
          className: props.active === item.id ? "active" : "",
          onClick: function onClick() {
            if (props.active !== item.id) {
              props.onChange(item.id);
            }
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            backgroundColor: item.hex_color_code
          }
        }), item.name);
      }), more());

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (SwitchBox);

/***/ }),

/***/ "./components/product/topSection/variationDetail.js":
/*!**********************************************************!*\
  !*** ./components/product/topSection/variationDetail.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./price */ "./components/product/topSection/price.js");
/* harmony import */ var _switchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switchBox */ "./components/product/topSection/switchBox.js");
var _this = undefined;





var VariationDetail = function VariationDetail(props) {
  var sellerCount = function sellerCount() {
    if (props.status > 1) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.status - 1, "+ \u0641\u0631\u0648\u0634\u0646\u062F\u0647 \u062F\u06CC\u06AF\u0631");
    }
  };

  if (props.status > 0) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "seller"
    }, "\u0641\u0631\u0648\u0634\u0646\u062F\u0647 : ", props.variation["seller"]["shop_name"], sellerCount()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "seller_rate"
    }, "\u0631\u0636\u0627\u06CC\u062A \u062E\u0631\u06CC\u062F :\u200C %", props.variation["seller"]["seller_rate"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        width: props.variation["seller"]["seller_rate"] + "%"
      }
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "switch"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_switchBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: props.switchType,
      switches: props.switches,
      active: props.variation.color_id,
      onChange: props.variationChange.bind(_this)
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_price__WEBPACK_IMPORTED_MODULE_1__["default"], props.variation));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "unavailable"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u0645\u062A\u0627\u0633\u0641\u0627\u0646\u0647 \u0627\u06CC\u0646 \u06A9\u0627\u0644\u0627 \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0645\u0648\u062C\u0648\u062F \u0646\u06CC\u0633\u062A. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0644\u06CC\u0633\u062A \u0628\u0627\u0644\u0627\u06CC \u0635\u0641\u062D\u0647\u060C \u0627\u0632 \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0645\u0634\u0627\u0628\u0647 \u0627\u06CC\u0646 \u06A9\u0627\u0644\u0627 \u062F\u06CC\u062F\u0646 \u0646\u0645\u0627\u06CC\u06CC\u062F"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (VariationDetail);

/***/ }),

/***/ "./components/product/variations.js":
/*!******************************************!*\
  !*** ./components/product/variations.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_components_product_variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styled_components/product/variations */ "./styled_components/product/variations.js");




var Variations = function Variations(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var leadTime = function leadTime(value) {
    if (value === 0) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "delivery"
      }, "\u0622\u0645\u0627\u062F\u0647 \u0627\u0631\u0633\u0627\u0644");
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "delivery notice"
      }, "\u0627\u0631\u0633\u0627\u0644 \u0627\u0632 ", value, " \u0631\u0648\u0632 \u0622\u06CC\u0646\u062F\u0647");
    }
  };

  var view = function view(item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: item.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      className: "brand-link"
    }, item.seller.shop_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "like"
    }, "\u0631\u0636\u0627\u06CC\u062A \u062E\u0631\u06CC\u062F: ", item.seller.seller_rate, " % \u0627\u0632 (", item.seller.number_of_rating_votes, ") \u0631\u0627\u06CC")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, leadTime(item.lead_time), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "packaging"
    }, item.packing.title, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "tooltip"
    }, item.packing.tooltip))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "guarantee"
    }, item.guarantee.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "price"
    }, item.price.toLocaleString("fa-IR")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "curenncy"
    }, "\u062A\u0648\u0645\u0627\u0646")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "add-to-cart"
    }, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F")));
  };

  var listItems = function listItems() {
    var result = [];

    if (status) {
      for (var index = 0; index < props.items.length; index++) {
        if (index !== 0) {
          if (typeof props.items[index] !== "undefined") {
            result.push(view(props.items[index]));
          }
        }
      }
    } else {
      for (var _index = 0; _index < 4; _index++) {
        if (_index !== 0) {
          if (typeof props.items[_index] !== "undefined") {
            result.push(view(props.items[_index]));
          }
        }
      }
    }

    return result;
  };

  var moreText = function moreText() {
    if (status) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "close",
        onClick: function onClick() {
          setStatus(!status);
        }
      }, "\u0628\u0633\u062A\u0646");
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: function onClick() {
          setStatus(!status);
        }
      }, "\u0645\u0634\u0627\u0647\u062F\u0647 +", props.items.length - 3, " \u0641\u0631\u0648\u0634\u0646\u062F\u0647 / \u06AF\u0627\u0631\u0627\u0646\u062A\u06CC \u0628\u06CC\u0634\u062A\u0631");
    }
  };

  var more = function more() {
    if (props.items.length > 4) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "more"
      }, moreText());
    }
  };

  if (props.items.length <= 1) {
    return null;
  } else {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_components_product_variations__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      boxStatus: props.items.length > 4 ? true : false
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "\u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u0646\u062F\u0647"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "\u0632\u0645\u0627\u0646 \u0627\u0631\u0633\u0627\u0644"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "\u06AF\u0627\u0631\u0627\u0646\u062A\u06CC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "\u0642\u06CC\u0645\u062A"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, listItems())), more()));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Variations);

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

/***/ "./constants/urls.js":
/*!***************************!*\
  !*** ./constants/urls.js ***!
  \***************************/
/*! exports provided: REGISTER, LOGIN, RESET_PASSWORD, FORGET_PASSWORD, VERIFY, HOME, PROFILE, INFORMATION, ORDERS, WISHLIST, REVIEWS, ADDRESSES, ANNOUNCEMENTS, PRODUCT, CART */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD", function() { return RESET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGET_PASSWORD", function() { return FORGET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY", function() { return VERIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE", function() { return PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFORMATION", function() { return INFORMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDERS", function() { return ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REVIEWS", function() { return REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESSES", function() { return ADDRESSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANNOUNCEMENTS", function() { return ANNOUNCEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT", function() { return PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
var REGISTER = "/register";
var LOGIN = "/login";
var RESET_PASSWORD = "/resetpassword";
var FORGET_PASSWORD = "/forget";
var VERIFY = "/verify";
var HOME = "/";
var PROFILE = "/profile";
var INFORMATION = "/information";
var ORDERS = "/orders";
var WISHLIST = "/wishlist";
var REVIEWS = "/reviews";
var ADDRESSES = "/addresses";
var ANNOUNCEMENTS = "/announcements";
var PRODUCT = "/product";
var CART = "/cart";

/***/ }),

/***/ "./containers/productData.js":
/*!***********************************!*\
  !*** ./containers/productData.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled_components_product_dataBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styled_components/product/dataBox */ "./styled_components/product/dataBox.js");
/* harmony import */ var _actions_comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/comment */ "./actions/comment.js");
/* harmony import */ var _components_product_productData_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/product/productData/tabs */ "./components/product/productData/tabs.js");
/* harmony import */ var _components_product_productData_comments__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/product/productData/comments */ "./components/product/productData/comments.js");
/* harmony import */ var _components_product_productData_question__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/product/productData/question */ "./components/product/productData/question.js");
/* harmony import */ var _components_product_productData_review__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/product/productData/review */ "./components/product/productData/review.js");
/* harmony import */ var _components_product_productData_features__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/product/productData/features */ "./components/product/productData/features.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _actions_question__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/question */ "./actions/question.js");

















var ProductData =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProductData, _React$Component);

  function ProductData(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductData);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductData).call(this, props));
    _this.state = {
      status: "features",
      comments: null,
      comment_sort: "buyers",
      questions: null,
      question_sort: "newest"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductData, [{
    key: "changeSort",
    value: function changeSort(value, type) {
      var _this2 = this;

      if (type === "comment") {
        this.setState({
          comment_sort: value
        }, function () {
          _this2.props.getComments(_this2.props.id, {
            sort: value
          });
        });
      } else if (type === "question") {
        this.setState({
          question_sort: value
        }, function () {
          _this2.props.getQuestion(_this2.props.id, {
            sort: value
          });
        });
      }
    }
  }, {
    key: "listView",
    value: function listView() {
      var _this3 = this;

      console.log(this.state.questions, "ddww");

      switch (this.state.status) {
        // case "features":
        //   return (
        //     <Features
        //       enName={this.props.enName}
        //       productData={this.props.productData}
        //     />
        //   );
        case "comments":
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_product_productData_comments__WEBPACK_IMPORTED_MODULE_10__["default"], {
            name: this.props.name,
            comments: this.state.comments,
            sort: this.state.comment_sort,
            changeSort: function changeSort(value) {
              _this3.changeSort(value, "comment");
            }
          });

        case "question":
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_product_productData_question__WEBPACK_IMPORTED_MODULE_11__["default"], {
            questions: this.state.questions,
            sort: this.state.question_sort,
            changeSort: function changeSort(value) {
              _this3.changeSort(value, "question");
            },
            storeQuestion: function storeQuestion(data) {
              return _this3.props.storeQuestion(_this3.props.id, data);
            },
            changeNewQuestionText: this.props.ChangeNewQuestionText
          });

        case "review":
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_product_productData_review__WEBPACK_IMPORTED_MODULE_12__["default"], {
            name: this.props.name,
            advantages: this.props.advantages,
            disadvantages: this.props.disadvantages,
            rating: this.props.rating,
            desc: this.props.desc,
            meta_description: this.props.meta_description
          });

        default:
          return null;
      }
    }
  }, {
    key: "changeStatus",
    value: function changeStatus(value) {
      var _this4 = this;

      if (this.state.status !== value) {
        this.setState({
          status: value
        }, function () {
          if (value === "question") {
            if (!_this4.state.questions.isFetched) {
              _this4.props.getQuestion(_this4.props.id, {
                sort: _this4.state.question_sort
              });
            }
          }

          if (value === "comments") {
            if (!_this4.state.comments.cache) {
              _this4.props.getComments(_this4.props.id, {
                sort: _this4.state.comment_sort
              });
            }
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled_components_product_dataBox__WEBPACK_IMPORTED_MODULE_7__["Box"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "data"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "sep"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tabs"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_product_productData_tabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onChange: this.changeStatus.bind(this),
        status: this.state.status
      })), this.listView())));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var result = {};

      if (nextProps.comments !== prevState.comments) {
        result.comments = nextProps.comments;
      }

      if (nextProps.questions !== prevState.questions) {
        result.questions = nextProps.questions;
      }

      return result;
    }
  }]);

  return ProductData;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(store) {
  return {
    comments: store.Comment,
    questions: store.Question
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getComments: function getComments(id, sort) {
      dispatch(Object(_actions_comment__WEBPACK_IMPORTED_MODULE_8__["getComments"])(id, sort));
    },
    getQuestion: function getQuestion(id, sort) {
      // dispatch(getQuestion(id, sort));
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_14__["QuestionAction"].getListRequest(id, sort));
    },
    storeQuestion: function storeQuestion(id, data) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_14__["QuestionAction"].storeRequest(id, data));
    },
    ChangeNewQuestionText: function ChangeNewQuestionText(data) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_14__["QuestionAction"].ChangeNewQuestionText(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(ProductData));

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

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

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
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

/***/ }),

/***/ "./styled_components/button.js":
/*!*************************************!*\
  !*** ./styled_components/button.js ***!
  \*************************************/
/*! exports provided: Box, Loading, Children */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "button__Box",
  componentId: "sc-1mz5fu1-0"
})(["box-shadow:0 0 12px 0 rgba(0,0,0,0.16);width:100%;margin:8px 0;button{position:relative;border-radius:8px;border:0;background-color:", ";width:100%;color:", ";line-height:36px;text-align:center;cursor:pointer;", " &:hover{background-color:", ";}&:disabled{background-color:", ";color:", ";cursor:not-allowed;&:hover{box-shadow:none;}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.grey_light, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white);
var Loading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "button__Loading",
  componentId: "sc-1mz5fu1-1"
})(["visibility:", ";position:absolute;right:calc(50% - 9px);top:calc(50% - 9px);"], function (props) {
  return props.show ? "visible" : "hidden";
});
var Children = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "button__Children",
  componentId: "sc-1mz5fu1-2"
})(["visibility:", ";display:inline-flex;align-items:center;"], function (props) {
  return props.show ? "visible" : "hidden";
});

/***/ }),

/***/ "./styled_components/lib/breadcrumb.js":
/*!*********************************************!*\
  !*** ./styled_components/lib/breadcrumb.js ***!
  \*********************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "breadcrumb__List",
  componentId: "sc-1r81jdm-0"
})(["padding:0px;margin:0px;list-style:none;li{display:inline-block;&:before{content:'/';padding:0px 4px;}&:first-child{&:before{content:'';}}a{color:", ";}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.medium_grey);

/***/ }),

/***/ "./styled_components/lib/checkbox.js":
/*!*******************************************!*\
  !*** ./styled_components/lib/checkbox.js ***!
  \*******************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "checkbox__Box",
  componentId: "sc-1tvis87-0"
})(["padding-right:30px;font-size:13px;font-weight:500;min-height:30px;line-height:1.62;display:flex;cursor:pointer;.checkbox{min-width:20px;height:20px;border-radius:4px;border:solid 0.5px rgba(112,112,112,0.5);margin-right:8px;}.active{background:", ";position:relative;&::before{font-family:maleno;content:\"\\e030\";color:", ";position:absolute;font-size:13px;top:-1px;right:3px;}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.nice_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white);

/***/ }),

/***/ "./styled_components/lib/productCarousel.js":
/*!**************************************************!*\
  !*** ./styled_components/lib/productCarousel.js ***!
  \**************************************************/
/*! exports provided: Box, HeaderBox, FSlider, ProductListContainer, ProductRow, ProductCard, Slide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBox", function() { return HeaderBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSlider", function() { return FSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListContainer", function() { return ProductListContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRow", function() { return ProductRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCard", function() { return ProductCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productCarousel__Box",
  componentId: "sc-1h6czqi-0"
})(["background-color:", ";border-radius:4px;box-shadow:0 0 32px 0 rgba(0,0,0,0.05);border:solid 1px ", ";overflow:hidden;padding:10px 26px;margin-bottom:26px;"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey);
var HeaderBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productCarousel__HeaderBox",
  componentId: "sc-1h6czqi-1"
})(["margin-top:16px;margin-bottom:22px;font-size:24px;font-color:", ";a{margin-right:10px;font-size:14px;color:", ";background-color:", ";border-radius:12px;padding:2px 8px;}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey);
var FSlider = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productCarousel__FSlider",
  componentId: "sc-1h6czqi-2"
})(["width:100%;margin-bottom:15px;.loading{width:100%;min-height:300px;text-align:center;}.slick-slide{padding-right:4px;}.slick-active{.img-box{&::before{width:1px;height:208px;content:\"\";position:absolute;background-color:", ";left:-8px;}}}.slick-arrow{position:absolute;top:50%;border:none;background-color:rgba(256,256,256,0.35);z-index:10;cursor:pointer;width:26px;height:70px;margin-top:-55px;display:flex !important;justify-content:center;align-items:center;border:solid 1px ", ";img{width:8.5px;height:35.5px;}}.slick-prev{right:-27px;border-top-left-radius:5px;border-bottom-left-radius:5px;}.slick-next{left:-27px;border-top-right-radius:5px;border-bottom-right-radius:5px;}.slick-disabled{cursor:default;}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey);
var ProductListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productCarousel__ProductListContainer",
  componentId: "sc-1h6czqi-3"
})(["padding:16px 10px;"]);
var ProductRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productCarousel__ProductRow",
  componentId: "sc-1h6czqi-4"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;&>div{margin-left:8px;&:first-child{margin-left:0;}}"]);
var ProductCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productCarousel__ProductCard",
  componentId: "sc-1h6czqi-5"
})(["padding:0 6px;width:290px;height:350px;border-radius:16px;border:solid 1px ", ";background-color:", ";.slide-in{cursor:pointer;position:relative;padding:16px 6px;.img-box{overflow:hidden;border-radius:16px;display:flex;align-items:center;justify-content:center;img{width:216px;height:216px;}.hover{position:absolute;top:15px;right:0px;opacity:0;", ";}&:hover{.hover{opacity:1;}}}.title{padding-top:8px;font-size:12px;height:48px;}.detail{display:flex;justify-content:space-between;.category{font-size:12px;color:", ";position:relative;background-color:", ";color:", ";border-radius:8px;padding:4px 10px;text-align:center;min-width:64px;}.price{position:relative;font-size:16px;font-family:Number;.currency{font-size:12px;margin-right:8px;}.new{color:", ";}.old{position:absolute;font-size:11px;top:-20px;left:2px;text-decoration:line-through;.currency{margin:0px;}}}}}&:hover{box-shadow:0 0 12px 0 rgba(0,0,0,0.05);opacity:0.6;}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.3), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.grey_light, function (props) {
  return props.categoryType === 0 ? _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lipstick : _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.nice_blue;
}, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_red);
var Slide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "productCarousel__Slide",
  componentId: "sc-1h6czqi-6"
})(["padding:0px 6px;width:290px;height:390px;.slide-in{direction:rtl;cursor:pointer;position:relative;padding:20px 0px;.img-box{overflow:hidden;border-radius:16px;img{width:216px;height:216px;}.hover{position:absolute;top:15px;right:0px;opacity:0;", ";width:101%;}&:hover{.hover{opacity:1;}}}.title{padding-top:8px;font-size:12px;line-height:32px;}.detail{display:flex;line-height:36px;justify-content:space-between;.category{font-size:12px;color:", ";position:relative;&::before{content:\"\";width:4px;height:4px;border-radius:4px;position:absolute;background-color:", ";left:-15px;top:50%;margin-top:-2px;}}.price{position:relative;font-size:16px;font-family:Number;.currency{font-size:12px;margin-right:8px;}.new{color:", ";}.old{position:absolute;font-size:11px;top:-20px;left:2px;text-decoration:line-through;.currency{margin:0px;}}}}.discount{font-family:Number;width:67.5px;height:32px;border-radius:16px;color:", ";background-color:", ";position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;left:0px;top:15px;}}&:hover{border-radius:16px;box-shadow:0 0 6px 0 rgba(0,0,0,0.05);border:solid 1px ", ";background-color:", ";z-index:1;.img-box{&::before{right:-10px;background-color:", ";z-index:1;}}.discount{border-top-left-radius:0px;border-bottom-left-radius:0px;left:-6px;padding-left:6px;}}"], Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.3), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_red, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_red, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white);

/***/ }),

/***/ "./styled_components/loading/spinner.js":
/*!**********************************************!*\
  !*** ./styled_components/loading/spinner.js ***!
  \**********************************************/
/*! exports provided: SpinnerContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerContainer", function() { return SpinnerContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var TYPES = {
  primary: {
    main: _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_white,
    second: _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.menu_border
  } // primary_blue: {main : Variables.colors.tertiary_400, second: Variables.colors.complementary},
  // secondary: {main:Variables.colors.complementary_700 ,second: Variables.colors.complementary_500},

};
var SpinnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "spinner__SpinnerContainer",
  componentId: "sc-1di3rne-0"
})([".loader,.loader:after{border-radius:50%;width:", ";height:", ";}.loader{margin:0px auto;font-size:10px;position:relative;text-indent:-9999em;border-top:", ";border-right:", ";border-bottom:", ";border-left:", ";border-width:", ";;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:load8 1.1s infinite linear;animation:load8 1.1s infinite linear;}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}"], function (props) {
  return props.size === "small" ? "1em" : "1.8em";
}, function (props) {
  return props.size === "small" ? "1em" : "1.8em";
}, function (props) {
  return props.type ? "0.3em solid " + TYPES[props.type].main : "0.3em solid " + _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_white;
}, function (props) {
  return props.type ? "0.3em solid " + TYPES[props.type].main : "0.3em solid " + _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_white;
}, function (props) {
  return props.type ? "0.3em solid " + TYPES[props.type].main : "0.3em solid " + _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_white;
}, function (props) {
  return props.type ? "0.3em solid " + TYPES[props.type].second : "0.3em solid " + _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.menu_border;
}, function (props) {
  return props.size === "small" ? "0.2em" : "0.3em";
});

/***/ }),

/***/ "./styled_components/product/carousel.js":
/*!***********************************************!*\
  !*** ./styled_components/product/carousel.js ***!
  \***********************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "carousel__Box",
  componentId: "sc-1qzky22-0"
})(["position:fixed;width:100%;height:100%;top:0;right:0;z-index:100;display:flex;justify-content:center;align-items:center;.overlay{background-color:rgba(0,0,0,0.3);position:absolute;width:100%;height:100%;}.inner{", ";box-shadow:0 0 32px 0 rgba(0,0,0,0.1);background-color:", ";position:inherit;width:calc(100% - 64px);height:calc(100% - 64px);min-height:450px;display:flex;.close{position:absolute;top:16px;left:16px;width:22px;height:22px;display:inline-block;cursor:pointer;z-index:100;&::before{font-family:maleno;content:\"\\77\";font-size:22px;}}.right{position:relative;.arrow{position:absolute;border:solid 1px ", ";background-color:", ";width:88px;height:32px;left:calc(50% - 44px);z-index:10;border-radius:5px;cursor:pointer;&::before{font-family:maleno;font-size:28px;position:absolute;right:30px;}}.next{bottom:-16px;&::before{content:\"\\76\";transform:rotate(180deg);}}.prev{top:-16px;&::before{content:\"\\76\";}}.disable{cursor:default;opacity:0.5;}.slider{width:150px;height:100%;padding:0px 16px;overflow:hidden;position:relative;ul{padding:0;list-style:none;height:100%;top:", "px;", ";position:absolute;li{opacity:0.6;height:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;img{border-radius:12px;width:100%;cursor:pointer;}}.active{opacity:1;img{cursor:default;}}}}}.left{border:solid 1px ", ";border-right:dashed 1px ", ";width:calc(100% - 150px);padding:32px;transform:translate3d(0px,0px,0px);position:relative;display:flex;justify-content:center;align-items:center;flex-direction:column;img{max-height:90%;max-width:90%;}}}"], Object(_variables__WEBPACK_IMPORTED_MODULE_1__["desktopWidthLimits"])(), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, function (props) {
  return props.margin;
}, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.4), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey);

/***/ }),

/***/ "./styled_components/product/dataBox.js":
/*!**********************************************!*\
  !*** ./styled_components/product/dataBox.js ***!
  \**********************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "dataBox__Box",
  componentId: "sc-1xsk17r-0"
})(["background-color:", ";border-radius:5px;margin:16px auto;padding-top:75px;position:relative;box-shadow:0 0 32px 0 rgba(0,0,0,0.05);.data{background-color:", ";border:solid 1px ", ";border-radius:5px;padding:64px 0px;.sep{border:solid 1px ", ";border-bottom-color:", ";background-color:", ";border-top-left-radius:5px;width:100%;height:10px;position:absolute;top:70px;right:0;z-index:1;}.tabs{position:absolute;top:3px;width:100%;right:0;ul{list-style:none;padding:0px;margin:0px;li{display:inline-block;border:solid 1px ", ";background-color:", ";color:", ";font-size:17px;border-bottom:none;width:300px;height:68px;border-top-left-radius:25px;border-top-right-radius:25px;cursor:pointer;display:inline-flex;justify-content:center;align-items:center;&:hover{border:solid 1px ", ";background-color:", ";}span{position:relative;padding-left:30px;&::before{font-family:maleno;position:absolute;left:0;}}.comments{&::before{content:\"\\e00d\";}}.faq{&::before{content:\"\\e005\";}}.features{&::before{content:\"\\e01c\";}}.review{&::before{content:\"\\2c\";}}}.active{position:relative;color:", ";background-color:", ";border-color:", ";position:relative;z-index:2;cursor:default;&:hover{border-color:", ";background-color:", ";border-bottom:none;}}}}.rate-box{border-radius:17px;padding:16px 32px;border:solid 1px ", ";ul{list-style:none;margin:0;padding:0;li{display:flex;justify-content:space-between;padding:16px 0;.rate-title{width:30%;}.progress{background-color:", ";height:4px;position:relative;border-radius:3px;width:60%;margin-top:12px;span{height:4px;border-radius:3px;background:", ";display:inline-block;position:absolute;}}}}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.font, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue);

/***/ }),

/***/ "./styled_components/product/databox/commentsBox.js":
/*!**********************************************************!*\
  !*** ./styled_components/product/databox/commentsBox.js ***!
  \**********************************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "commentsBox__Box",
  componentId: "sc-193l7q-0"
})(["padding:0 32px;line-height:2;strong{font-size:20px;font-weight:500;display:block;margin-bottom:16px;}.title{display:block;font-size:32px;font-weight:500;margin-bottom:20px;}section{margin:32px 0;}.info{padding:16px;}.add-comment{background-color:", ";color:", ";border-radius:12px;text-align:center;font-size:20px;padding:4px 32px;display:table;margin:16px 0;cursor:pointer;", ";&:hover{background-color:", ";}span{padding-left:40px;position:relative;&::before{font-family:maleno;content:\"\\e00b\";position:absolute;left:0;top:-13px;font-size:30px;}}}.sort-title{width:100%;position:relative;font-size:20px;&:before{content:\"\";width:100%;position:absolute;height:1px;background-color:", ";top:50%;right:0px;}span{background:", ";padding-left:15px;position:inherit;}}.sort-list{background-color:", ";width:100%;margin:0;padding:0 16px;list-style:none;font-size:14px;border-radius:8px;li{display:inline-block;margin:3px 8px;padding:0px 6px;cursor:pointer;&:first-child{margin:0;padding:0;}}.active{background-color:", ";border-radius:3px;color:", ";cursor:default;}}.comment{border-radius:17px;padding:16px 32px;border:solid 2px ", ";display:flex;font-family:Number;margin-bottom:32px;.right{width:20%;.buyer-flag{background-color:", ";border:solid 1px ", ";color:", ";border-radius:3px;text-align:center;font-size:14px;padding:8px 24px;display:table;margin:32px 0;cursor:pointer;span{padding-right:30px;position:relative;&::before{font-family:maleno;content:\"\\6a\";position:absolute;right:0;top:-8px;font-size:20px;}}}.color{margin-bottom:16px;padding-right:30px;position:relative;color:", ";span{width:20px;height:20px;content:\"\";position:absolute;border-radius:5px;right:0px;top:3px;border:solid 1px rgba(0,0,0,0.05);}}.seller{margin-bottom:16px;padding-right:30px;position:relative;color:", ";&:before{content:\"\\e019\";position:absolute;font-family:maleno;right:0px;font-size:18px;top:-5px;}}.seller-rate{margin-bottom:16px;padding-right:30px;position:relative;color:", ";&:before{content:\"\\32\";position:absolute;font-family:maleno;right:0px;font-size:18px;top:-5px;}}}.left{width:80%;position:relative;.post{border-bottom:solid 1px ", ";width:100%;padding:16px 0;margin-bottom:32px;.comment-title{font-size:20px;font-weight:500;}.author{font-size:14px;font-weight:300;}}.text{line-height:2.6;margin-bottom:64px;}.helpful{position:absolute;right:0;bottom:0;color:", ";font-size:14px;ul{display:inline;margin:0;padding-right:30px;list-style:none;li{display:inline-block;border:2px solid ", ";padding:0 8px;font-family:Number;cursor:pointer;margin:0 4px;border-radius:8px;}}}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.3), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_green_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_green_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.medium_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.medium_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_gery_2, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_gery_2, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey);

/***/ }),

/***/ "./styled_components/product/databox/featuresBox.js":
/*!**********************************************************!*\
  !*** ./styled_components/product/databox/featuresBox.js ***!
  \**********************************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "featuresBox__Box",
  componentId: "sc-52o0v4-0"
})(["padding-right:32px;color:", ";.features-box-title{display:block;font-size:32px;font-weight:500;margin-bottom:20px;}ul{padding:0;margin:0;list-style:none;li{margin-bottom:32px;.title{position:relative;font-size:17px;font-weight:500;padding-right:25px;margin-bottom:32px;display:inline-block;&::before{content:\"\";width:8px;height:8px;background-color:", ";position:absolute;right:10px;border-radius:8px;top:7px;}}table{border-collapse:collapse;width:100%;position:relative;tr{border-bottom:solid 1px ", ";border-top:solid 1px ", ";font-size:15px;line-height:2.5;td{padding:0px 16px;&:first-child{width:270px;}&:last-child{border-right:solid 1px ", ";padding-right:32px;span{opacity:0.8;}}}}&::before{background-color:", ";content:\"\";width:3px;height:100%;right:-10px;top:0;position:absolute;}}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue);

/***/ }),

/***/ "./styled_components/product/databox/questionBox.js":
/*!**********************************************************!*\
  !*** ./styled_components/product/databox/questionBox.js ***!
  \**********************************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "questionBox__Box",
  componentId: "sc-11l5zfg-0"
})(["padding:0 32px;line-height:2;font-family:Number;section{margin:32px 0;}.title{font-size:32px;font-weight:500;}.sub-title{font-size:17px;font-weight:300;color:", ";}textarea{min-width:100%;max-width:100%;min-height:240px;max-height:240px;border-radius:17px;border:solid 2px ", ";padding:16px;margin:16px 0;}.add-faq{background-color:", ";color:", ";border-radius:12px;text-align:center;font-size:20px;padding:4px 32px;display:table;cursor:pointer;", ";&:hover{background-color:", ";}span{padding-left:40px;position:relative;&::before{font-family:maleno;content:\"\\e005\";position:absolute;left:0;top:-13px;font-size:30px;}}}.rule{font-size:12px;padding-right:28px;}.sort-title{width:100%;position:relative;font-size:20px;&:before{content:\"\";width:100%;position:absolute;height:1px;background-color:", ";top:50%;right:0px;}span{background:", ";padding-left:15px;position:inherit;}}.sort-list{background-color:", ";width:100%;margin:0;padding:0 16px;list-style:none;font-size:14px;border-radius:8px;li{display:inline-block;margin:3px 8px;padding:0px 6px;cursor:pointer;&:first-child{margin:0;padding:0;}}.active{background-color:", ";border-radius:3px;color:", ";cursor:default;}}.question,.answer{min-height:240px;border-radius:17px;padding:16px 32px;padding-right:20%;width:100%;position:relative;.post{border-bottom:solid 1px ", ";width:100%;padding:16px 0;margin-bottom:32px;.comment-title{font-size:20px;font-weight:500;}.author{font-size:14px;font-weight:300;}}.text{line-height:2.6;margin-bottom:64px;}.helpful{position:absolute;right:20%;bottom:16px;color:", ";font-size:14px;ul{display:inline;margin:0;padding-right:30px;list-style:none;li{display:inline-block;border:2px solid ", ";padding:0 8px;font-family:Number;cursor:pointer;margin:0 4px;border-radius:8px;}}}.answer-but{font-size:14px;font-weight:300;cursor:pointer;color:", ";padding:1px 8px;background-color:", ";position:absolute;left:32px;border-radius:12px;bottom:16px;}&:before{color:", ";font-family:maleno;position:absolute;font-size:120px;top:calc(50% - 120px);right:32px;}}.question{margin:16px 0;border:solid 2px ", ";background-color:", ";&:before{content:\"\\e006\";}}.answers{border:solid 2px ", ";border-top:none;margin-top:-27px;border-bottom-left-radius:17px;border-bottom-right-radius:17px;width:calc(100% - 8px);margin-right:4px;}.answer{&:before{content:\"\\63\";}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.3), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_gery_2, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue);

/***/ }),

/***/ "./styled_components/product/databox/reviewBox.js":
/*!********************************************************!*\
  !*** ./styled_components/product/databox/reviewBox.js ***!
  \********************************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "reviewBox__Box",
  componentId: "gmnoh3-0"
})(["padding:0 32px;line-height:2;section{margin:32px 0;}.title{font-size:32px;font-weight:500;}.sub-title{font-size:17px;font-weight:300;color:", ";}.desc{background-color:", ";border-radius:17px;max-height:", ";width:100%;padding:32px;padding-bottom:", ";line-height:2.6;overflow:hidden;position:relative;", " .more{position:absolute;text-align:center;bottom:0px;width:100%;.gradient{width:100%;height:", ";background-color:rgba(256,256,256,0);background-image:linear-gradient( rgba(256,256,256,0),", " );}.btn{border-top:dashed 1px ", ";background-color:", ";width:100%;padding:6px;width:100%;text-align:center;span{cursor:pointer;}}}}.advantages{display:flex;div{width:50%;padding:96px 32px 0 32px;position:relative;&:before{font-family:maleno;position:absolute;top:-16px;right:32px;font-size:64px;}span{font-size:16px;font-weight:500;display:block;margin-bottom:16px;}ul{margin:0;padding:0;list-style:none;li{position:relative;padding-right:16px;&::before{width:8px;height:8px;border-radius:8px;position:absolute;top:calc(50% - 4px);right:0px;content:\"\";}}}}.plus{border-left:solid 1px ", ";&::before{content:\"\\28\";color:", ";}span{color:", ";}ul{li{&::before{background-color:", ";}}}}.mines{&::before{content:\"\\27\";color:", ";}span{color:", ";}ul{li{&::before{background-color:", ";}}}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_white, function (props) {
  return props.status ? "auto" : "240px";
}, function (props) {
  return props.status ? "64px" : "0";
}, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.3), function (props) {
  return props.status ? "6px" : "64px";
}, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_red, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_red, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_red);

/***/ }),

/***/ "./styled_components/product/index.js":
/*!********************************************!*\
  !*** ./styled_components/product/index.js ***!
  \********************************************/
/*! exports provided: BreadcrumbBox, TopBox, SlogansBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbBox", function() { return BreadcrumbBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBox", function() { return TopBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlogansBox", function() { return SlogansBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var BreadcrumbBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__BreadcrumbBox",
  componentId: "sc-1qhttzh-0"
})(["margin:48px 0px 16px 0px;font-size:12px;a{color:", " !important;}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.medium_grey);
var TopBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__TopBox",
  componentId: "sc-1qhttzh-1"
})(["width:100%;", ";background-color:", ";border:1px solid ", ";display:flex;justify-content:space-between;flex-wrap:wrap;margin:16px auto;padding:32px 0;"], Object(_variables__WEBPACK_IMPORTED_MODULE_1__["desktopWidthLimits"])(), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey);
var SlogansBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "product__SlogansBox",
  componentId: "sc-1qhttzh-2"
})(["background-color:", ";border-radius:8px;text-align:center;font-size:18px;color:", ";padding:48px 0px;margin:16px 0px;.slogan-item{position:relative;text-align:center;i{position:absolute;&::before{font-size:36px;}}.delivery{margin-top:7px;}span{line-height:40px;padding-left:48px;}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.marine, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white);

/***/ }),

/***/ "./styled_components/product/topSection.js":
/*!*************************************************!*\
  !*** ./styled_components/product/topSection.js ***!
  \*************************************************/
/*! exports provided: Images, Details, FeaturesBox, Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return Images; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesBox", function() { return FeaturesBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var Images = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "topSection__Images",
  componentId: "sc-1f41eyb-0"
})(["width:40%;display:flex;justify-content:center;align-items:center;direction:ltr;position:relative;.off,.out-off{background-color:", ";color:", ";border-bottom-left-radius:55px;position:absolute;top:-1px;right:0px;z-index:1;width:60%;text-align:center;font-size:26px;line-height:55px;span{position:relative;display:inline-block;&::before{content:\"\\69\";font-family:maleno;position:absolute;font-size:34px;color:", ";right:-50px;}}}.out-off{background-color:", ";span{display:inline-block;&::before{content:\"\\6d\";}}}.zoom{margin:auto 30px;}.enlarged{background-color:", ";right:-110% !important;top:0% !important;width:", " !important;z-index:10 !important;border:1px solid ", " !important;}.original{position:relative;margin:auto 10%;img{width:100%;max-height:300px;}.lens{opacity:0;position:absolute;display:block;width:50%;height:50%;border:", " solid 1px;", "}.zoom{opacity:0;position:absolute;width:150%;height:150%;border:1px solid ", ";top:-25%;left:-160%;z-index:10;", "}&:hover{.lens{opacity:1;}.zoom{opacity:1;}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lipstick, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_salmon, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, function (props) {
  return props.containerWidth ? "calc(" + props.containerWidth + "px - 100% - 80px" + ")" : "100%";
}, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lipstick, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.3), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.3));
var Details = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "topSection__Details",
  componentId: "sc-1f41eyb-1"
})(["width:60%;border-right:solid 1px ", ";.right{width:65%;padding:16px;}.left{width:35%;border-right:solid 1px ", ";padding:16px;}.title{border-bottom:solid 1px ", ";display:flex;justify-content:space-between;.right{h1{font-size:18px;font-weight:normal;color:", ";}h3{font-size:14px;font-weight:normal;}}.left{position:relative;.ribbon{position:absolute;background-color:", ";border-top-right-radius:9px;border-bottom-right-radius:9px;height:50px;top:calc(50% - 25px);left:0px;width:calc(100% - 70px);padding:8px;display:flex;align-items:center;.span{width:110px;line-height:1.25;font-size:16px;}}.icon{position:absolute;right:16px;top:22px;img{max-width:32px;max-height:32px;}}}}.rate{border-bottom:solid 1px ", ";display:flex;justify-content:space-between;.right{ul{margin:0px;padding:0px;list-style:none;display:flex;li{display:inline-block;margin-left:2px;opacity:0.5;}.star{::before{font-family:maleno;content:\"\\e024\";font-size:16px;}}.active{opacity:1;color:", ";::before{content:\"\\e024\";}}.text{padding-left:14px;font-family:Number;font-size:18px}}}.left{line-height:18px;}}.variations{border-bottom:solid 1px ", ";display:flex;justify-content:space-between;.right{font-family:Number;ul{margin:0px;padding:0px;list-style:none;li{padding:8px;padding-right:30px;position:relative;}.seller{font-size:14px;span{margin-right:20px;font-size:12px;background-color:", ";border-radius:15px;padding:1px 8px;}&::before{font-family:maleno;content:\"\\e019\";position:absolute;right:0px;font-size:20px;top:2px;color:", ";}}.seller_rate{font-size:13px;&::before{font-family:maleno;content:\"\\31\";position:absolute;right:0px;font-size:20px;top:9px;color:", ";}.bar{width:50%;background-color:", ";height:4px;position:relative;border-radius:3px;margin-top:8px;span{background-color:", ";height:4px;display:inline-block;position:absolute;border-radius:3px;}}}.switch{&::before{font-family:maleno;content:\"\\e02a\";position:absolute;right:0px;font-size:20px;top:14px;color:", ";}.color{li{display:inline-block;border-radius:8px;padding:8px 16px;padding-right:44px;border:solid 1px ", ";position:relative;cursor:pointer;span{width:20px;height:20px;content:\"\";position:absolute;border-radius:5px;right:16px;top:7px;border:solid 1px rgba(0,0,0,0.05);}}.active{border-color:", ";cursor:default;}.more{font-size:12px;padding-right:0px;}}}}.price{margin:16px -16px 0px -16px;border-top:solid 1px ", ";padding:16px;padding-bottom:0px;color:", ";font-size:32px;.currency{color:", ";font-size:24px;margin-right:8px;}.old{opacity:0.41;font-size:20px;color:", ";border-bottom:dashed 2px ", ";margin:auto -16px 16px -16px;padding:0px 16px 16px 16px;.through{text-decoration:line-through;}.currency{font-size:14px;color:", ";}}.box{display:flex;.value{border:solid 1px ", ";border-radius:17px;padding:8px;padding-left:40px;}.discount{background-color:", ";border-radius:17px;border-top-right-radius:0px;color:", ";padding:16px;padding-bottom:10px;margin-right:-30px;font-size:26px;}}}.unavailable{background-color:rgba(251,203,13,0.02);border:solid 1px ", ";margin:auto 16px;border-radius:8px;padding:16px 80px;span{color:", ";line-height:2.5;font-size:14px;position:relative;&::before{font-family:maleno;content:\"\\63\";font-size:64px;color:", ";position:absolute;top:-30px;right:-70px;}}}}.left{}}.slogans{display:flex;justify-content:space-between;border-bottom:solid 1px ", ";.right{opacity:0.7;i{width:28px;position:relative;display:inline-block;&::before{position:absolute;top:-15px;}}}.left{a{border-bottom:dashed 1px #3364ad;padding-bottom:6px;}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_font, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gold, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_green_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_green_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_font, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.font, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lipstick, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.goldenrod, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_olive, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.goldenrod, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey);
var FeaturesBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "topSection__FeaturesBox",
  componentId: "sc-1f41eyb-2"
})(["list-style:none;padding:0px;overflow:hidden;max-height:", ";position:relative;li{font-size:12px;position:relative;line-height:2.58;padding-right:13px;&::before{background-color:", ";width:8px;height:8px;opacity:0.28;border-radius:3px;content:\"\";position:absolute;top:calc(50% - 4px);right:0px;}}.more,.less{bottom:0px;background:", ";width:100%;padding-right:0;&::before{display:none;}span{background-color:", ";padding:1px 16px;padding-right:30px;cursor:pointer;border-radius:10px;position:relative;&::before{font-family:maleno;position:absolute;right:10px;font-size:10px;top:-1px;}}}.more{position:absolute;display:", ";span{&::before{content:\"\\29\";}}}.less{position:relative;display:", ";span{&::before{content:\"\\27\";}}}"], function (props) {
  return props.status ? "auto" : "115px";
}, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, function (props) {
  return props.status ? "none" : "block";
}, function (props) {
  return props.status ? "block" : "none";
});
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "topSection__Actions",
  componentId: "sc-1f41eyb-3"
})(["width:100%;display:flex;.images-but{width:40%;padding:16px;.box{border-radius:4px;box-shadow:0 0 12px 0 rgba(0,0,0,0.05);border:solid 1px ", ";display:flex;flex-wrap:wrap;padding:0px 16px;max-height:100px;overflow:hidden;direction:ltr;justify-content:center;align-items:center;img{width:72px;height:72px;border-radius:6px;margin:16px 7px;cursor:pointer;border:solid 1px ", ";}.more{border:solid 1px ", ";width:60px;height:60px;border-radius:4px;cursor:pointer;font-size:60px;text-align:center;line-height:30px;opacity:0.5;margin:22px 6px;}}}.buts{border-right:solid 1px ", ";width:60%;display:flex;justify-content:space-between;.right{width:65%;padding:16px;display:flex;align-items:center;.notice{background-color:", ";color:", ";padding:16px 48px;font-size:18px;border-radius:12px;display:inline-block;cursor:pointer;", " span{position:relative;padding-right:48px;&:before{font-family:maleno;content:\"\\6b\";color:", ";font-size:24px;position:absolute;top:3px;right:0px;}}&:hover{background-color:", ";}}.add-to-cart{background-color:", ";color:", ";padding:16px 48px;font-size:18px;border-radius:12px;display:inline-block;cursor:pointer;", " span{position:relative;padding-left:30px;&:before{font-family:maleno;content:\"\\28\";color:", ";font-size:18px;position:absolute;top:3px;left:0px;}}&:hover{background-color:", ";}}.wish{background-color:", ";color:", ";border-radius:12px;padding:14px;margin:auto 16px;cursor:pointer;", ";&:hover{background-color:", ";}}}.left{width:35%;border-right:solid 1px ", ";display:flex;align-items:center;padding:8px;ul{padding:0px;list-style:none;text-align:center;li{background-color:", ";display:inline-block;border:solid 1px ", ";border-radius:12px;padding:10px;margin:auto 8px;cursor:pointer;width:50px;height:50px;", ";i{&::before{font-size:28px;color:", ";}}}.compare{&:hover{background-color:", ";border-color:", ";i{&::before{color:", ";}}}}.notice{&:hover{background-color:", ";border-color:", ";i{&::before{color:", ";}}}}.share{&:hover{background-color:", ";border-color:", ";i{&::before{color:", ";}}}}}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.amaranth, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_font, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.goldenrod, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.goldenrod, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.red_violet, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.red_violet, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white);

/***/ }),

/***/ "./styled_components/product/variations.js":
/*!*************************************************!*\
  !*** ./styled_components/product/variations.js ***!
  \*************************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "variations__Box",
  componentId: "sc-12joori-0"
})(["background-color:", ";border:1px solid ", ";box-shadow:0 0 32px 0 rgba(0,0,0,0.05);border-radius:5px;position:relative;margin-bottom:16px;", ";table{width:100%;border-collapse:collapse;tr{th,td{border-bottom:solid 1px ", ";border-left:solid 1px ", ";padding:16px;&:last-child{border-left:none;}}th{font-size:17px;font-weight:500;}td{line-height:2;.brand-link{font-size:16px;display:block;}.like{position:relative;color:", ";padding-right:20px;font-size:14px;display:block;font-family:Number;&::before{font-family:maleno;content:\"\\32\";position:absolute;right:0px;top:-1px;font-size:14px;color:", ";}}.delivery{font-size:16px;position:relative;padding-right:25px;color:", ";display:block;&::before{font-family:maleno;content:\"\\e034\";position:absolute;right:0px;top:-3px;font-size:19px;color:", ";}}.notice{color:", ";}.packaging{font-size:12px;position:relative;padding-right:25px;color:", ";display:block;&::before{font-family:maleno;content:\"\\57\";position:absolute;right:1px;top:-4px;font-size:16px;color:", ";}.tooltip{position:absolute;right:0px;top:95%;z-index:100;width:230px;background-color:", ";box-shadow:0 3px 6px 0 rgba(0,0,0,0.16);border-radius:5px;border:solid 1px ", ";padding:8px;border-top-right-radius:0px;opacity:0;", "}&:hover{.tooltip{opacity:1;}}}.guarantee{font-size:12px;position:relative;padding-right:25px;color:", ";display:block;&::before{font-family:maleno;content:\"\\e015\";position:absolute;right:0px;top:-3px;font-size:16px;color:", ";}}.price{font-family:Number;font-size:24px;margin-left:16px;color:", ";}.curenncy{font-size:17px;}}&:last-child{td{", "}}}}.add-to-cart{background-color:", ";color:", ";padding:8px 48px;font-size:18px;border-radius:12px;display:inline-block;cursor:pointer;", " min-width:239px;&:hover{background-color:", ";}}.more{position:absolute;width:100%;bottom:0px;background-color:rgba(256,256,256,0.3);background-image:linear-gradient( rgba(256,256,256,0.3),", " );text-align:center;line-height:4.5;font-family:Number;border-bottom-left-radius:5px;border-bottom-right-radius:5px;span{cursor:pointer;position:relative;padding-left:30px;&::after{font-family:maleno;content:\"\\76\";position:absolute;top:13px;left:6px;line-height:0;transform:rotate(180deg);}}.close{&::after{transform:rotate(0deg);}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, function (props) {
  return props.boxStatus ? "padding-bottom:50px;" : "";
}, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_gery_2, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_gery_2, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.medium_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.medium_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lipstick, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_gery_2, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_gery_2, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_gery_2, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_font, function (props) {
  return props.boxStatus ? "" : "border-bottom: none;";
}, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white);

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

/***/ "./utilities/specifics/errorMessages.js":
/*!**********************************************!*\
  !*** ./utilities/specifics/errorMessages.js ***!
  \**********************************************/
/*! exports provided: CheckIsExist, SetMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIsExist", function() { return CheckIsExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetMessage", function() { return SetMessage; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux-toastr */ "react-redux-toastr");
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__);


var CheckIsExist = function CheckIsExist(error) {
  return error.response && error.response.data && error.response.data.message && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(error.response.data.message);
};
var SetMessage = function SetMessage(error, toast) {
  var message = "";

  if (!error.response && error.message === "Network Error") {
    message = ["Unable to access the server. Please check your internet connection and try again later."];
  } else if (CheckIsExist(error)) {
    message = error.response.data.message;
  } else {
    message = ["An error occurred while fetching data from the server. Please try again later."];
  }

  if (toast) {
    message.forEach(function (message) {
      react_redux_toastr__WEBPACK_IMPORTED_MODULE_1__["toastr"].error(" ", message.toString());
    });
  }

  return message;
};

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

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/product.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fahimeh/Shop/malleno_website/pages/product.js */"./pages/product.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ "react-image-magnify":
/*!**************************************!*\
  !*** external "react-image-magnify" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-magnify");

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

/***/ "react-redux-toastr":
/*!*************************************!*\
  !*** external "react-redux-toastr" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux-toastr");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=product.js.map