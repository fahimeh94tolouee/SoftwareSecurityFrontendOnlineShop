webpackHotUpdate("static/development/pages/product.js",{

/***/ "./components/product/productData/comments.js":
/*!****************************************************!*\
  !*** ./components/product/productData/comments.js ***!
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
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u062E\u0631\u06CC\u062F\u0627\u0631 \u0627\u06CC\u0646 \u0645\u062D\u0635\u0648\u0644")), "Color Purchased:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "color"
      }, color.name, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          backgroundColor: color.hex_code
        }
      })), "Purchased from Seller:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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

/***/ })

})
//# sourceMappingURL=product.js.855bd2460248f170f147.hot-update.js.map