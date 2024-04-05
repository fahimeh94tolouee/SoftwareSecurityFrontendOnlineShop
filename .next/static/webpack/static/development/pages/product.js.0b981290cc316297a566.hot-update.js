webpackHotUpdate("static/development/pages/product.js",{

/***/ "./actions/actionTypes.js":
/*!********************************!*\
  !*** ./actions/actionTypes.js ***!
  \********************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, VERIFY_REQUEST, VERIFY_SUCCESS, VERIFY_FAILURE, SET_USER_DATA, GET_USER_DATA, GET_USER_DATA_SUCCESS, GET_USER_DATA_FAILURE, UPDATE_USER_DATA, UPDATE_USER_DATA_SUCCESS, UPDATE_USER_DATA_FAILURE, CHANGE_USER_PASSWORD, CHANGE_USER_PASSWORD_SUCCESS, CHANGE_USER_PASSWORD_FAILURE, GET_PRODUCT_LIST_REQUEST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAILURE, SHOW_PRODUCT_REQUEST, SHOW_PRODUCT_SUCCESS, SHOW_PRODUCT_FAILURE, QUESTION_LIST_REQUEST, QUESTION_LIST_SUCCESS, QUESTION_LIST_FAILURE, QUESTION_STORE_REQUEST, QUESTION_STORE_SUCCESS, QUESTION_STORE_FAILURE, QUESTION_ON_CHANGE, QUESTION_UPDATE_REQUEST, QUESTION_UPDATE_SUCCESS, QUESTION_UPDATE_FAILURE */
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

/***/ }),

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: AuthAction, UserAction, ProductAction, QuestionAction */
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

/***/ "./components/product/productData/question.js":
/*!****************************************************!*\
  !*** ./components/product/productData/question.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-bootstrap-grid */ "./node_modules/styled-bootstrap-grid/dist/index.js");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/checkbox */ "./components/lib/checkbox.js");
/* harmony import */ var _styled_components_product_databox_questionBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styled_components/product/databox/questionBox */ "./styled_components/product/databox/questionBox.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../button */ "./components/button/index.js");








var Question = function Question(props) {
  console.log(props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      newQuestion = _useState2[0],
      setNewQuestion = _useState2[1];

  var lengthOfQuestion = function lengthOfQuestion() {
    if (typeof props.questions.data !== "undefined" && props.questions.data.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", null, "(", props.questions.data.length, " Questions)");
    }
  };

  var helpful = function helpful(likes, dislikes) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "helpful"
    }, "Was this review helpful to you?", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, likes <= 0 ? "" : likes, " Yes"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, dislikes <= 0 ? "" : dislikes, " No")));
  };

  var answersView = function answersView(answers) {
    if (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(answers) === "object" && answers.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "answers"
      }, answers.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "answer",
          key: item.id
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "post"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "comment-title"
        }, "By", " ", item.user), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "author"
        }, "On", " ", item.created_at)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "text"
        }, item.answer), helpful(item.likes, item.dislikes));
      }));
    }
  };

  var questionsView = function questionsView() {
    if (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(props.questions.data) === "object") {
      return props.questions.data.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
          key: item.id
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "question"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "post"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "comment-title"
        }, "By", " ", item.user), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "author"
        }, "On", " ", item.created_at)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "text"
        }, item.question), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_product_databox_questionBox__WEBPACK_IMPORTED_MODULE_5__["Box"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "title"
  }, "Questions and Answers"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "sub-title"
  }, "Ask your question about this product"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
    placeholder: "",
    value: props.questions.newQuestionText,
    onChange: function onChange(e) {
      props.changeNewQuestionText(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: "3"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "add-faq",
    onClick: function onClick() {
      return askQuestion();
    },
    loading: props.questions.processing
  }, "Ask a question")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: "9"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "rule"
  }, "By selecting the 'Ask a question' button, I agree to the content publishing rules on Maleno.")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: "6"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "sort-title"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Questions and Answers", lengthOfQuestion()))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    col: "6"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "sort-list"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, "Sort based on:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: props.sort === "newest" ? "active" : "",
    onClick: function onClick() {
      props.changeSort("newest");
    }
  }, "Latest questions"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: props.sort === "most_answered" ? "active" : "",
    onClick: function onClick() {
      props.changeSort("most_answered");
    }
  }, "Most answered questions"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: props.sort === "user_question" ? "active" : "",
    onClick: function onClick() {
      props.changeSort("user_question");
    }
  }, "Your questions"))))), questionsView());
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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

/***/ })

})
//# sourceMappingURL=product.js.0b981290cc316297a566.hot-update.js.map