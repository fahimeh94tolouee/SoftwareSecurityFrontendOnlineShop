webpackHotUpdate("static/development/pages/product.js",{

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
            }
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
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(ProductData));

/***/ })

})
//# sourceMappingURL=product.js.b02a525106dd1279ca9c.hot-update.js.map