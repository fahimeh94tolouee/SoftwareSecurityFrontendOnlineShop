webpackHotUpdate("static/development/pages/product.js",{

/***/ "./components/product/productData/question.js":
/*!****************************************************!*\
  !*** ./components/product/productData/question.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-bootstrap-grid */ "./node_modules/styled-bootstrap-grid/dist/index.js");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/checkbox */ "./components/lib/checkbox.js");
/* harmony import */ var _styled_components_product_databox_questionBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styled_components/product/databox/questionBox */ "./styled_components/product/databox/questionBox.js");






var Question = function Question(props) {
  console.log(props);

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
        }, "By", item.user_full_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "author"
        }, "In the Date", item.created_at)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "text"
        }, item.text), helpful(item.likes, item.dislikes));
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
        }, "By", item.user_full_name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "author"
        }, "In the Date", item.created_at)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "text"
        }, item.text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "answer-but"
        }, "Answer to this question")), answersView(item.children));
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_components_product_databox_questionBox__WEBPACK_IMPORTED_MODULE_4__["Box"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "title"
  }, "Questions and Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sub-title"
  }, "Ask your question about this product"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "add-faq"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Ask a question"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    col: "9"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    status: false,
    title: "\u0627\u0648\u0644\u06CC\u0646 \u067E\u0627\u0633\u062E\u06CC \u06A9\u0647 \u0628\u0647 \u067E\u0631\u0633\u0634 \u0645\u0646 \u062F\u0627\u062F\u0647 \u0634\u062F\u060C \u0627\u0632 \u0637\u0631\u06CC\u0642 \u0627\u06CC\u0645\u06CC\u0644 \u0628\u0647 \u0645\u0646 \u0627\u0637\u0644\u0627\u0639 \u062F\u0647\u06CC\u062F. "
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "rule"
  }, "By selecting the 'Ask a question' button, I agree to the content publishing rules on Maleno.\"")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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

/***/ })

})
//# sourceMappingURL=product.js.815b7fae597d94da8598.hot-update.js.map