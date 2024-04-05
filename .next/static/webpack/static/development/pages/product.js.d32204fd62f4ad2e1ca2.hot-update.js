webpackHotUpdate("static/development/pages/product.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_components_product_topSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styled_components/product/topSection */ "./styled_components/product/topSection.js");
/* harmony import */ var react_image_magnify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-magnify */ "./node_modules/react-image-magnify/dist/es/ReactImageMagnify.js");
/* harmony import */ var _topSection_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topSection/rating */ "./components/product/topSection/rating.js");
/* harmony import */ var _topSection_offerRibbon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topSection/offerRibbon */ "./components/product/topSection/offerRibbon.js");
/* harmony import */ var _topSection_features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topSection/features */ "./components/product/topSection/features.js");
/* harmony import */ var _topSection_variationDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topSection/variationDetail */ "./components/product/topSection/variationDetail.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carousel */ "./components/product/carousel.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);












var TopSection = function TopSection(props) {
  // const product = props.product.data;
  var product = props.product;
  console.log(product, "dddd"); // const variations = props.product.variations;
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
        className: "add-to-cart",
        onClick: function onClick() {
          props.addToCart(variation.id, 1);
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u0633\u0628\u062F \u062E\u0631\u06CC\u062F")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "wish"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "icon-good"
      })));
    }
  };

  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_product_topSection__WEBPACK_IMPORTED_MODULE_3__["Images"], {
    containerWidth: props.containerWidth
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_image_magnify__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_topSection_rating__WEBPACK_IMPORTED_MODULE_5__["default"] // rate={product.rating}
  , {
    rate: 4 // amount={product.number_of_rating_votes}
    ,
    amount: 40
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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
  }), "\u0633\u0631\u0648\u06CC\u0633 \u0648\u06CC\u0698\u0647 \u062E\u062F\u0645\u0627\u062A \u0645\u0627\u0644 \u0646\u0648 : \u06F7 \u0631\u0648\u0632 \u0636\u0645\u0627\u0646\u062A \u062A\u0639\u0648\u06CC\u0636 \u06A9\u0627\u0644\u0627"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "left"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#",
    target: "_blank"
  }, "\u0645\u062D\u0635\u0648\u0644 \u062E\u0648\u062F \u0631\u0627 \u062F\u0631 \u0645\u0627\u0644\u200C\u0646\u0648 \u0628\u0641\u0631\u0648\u0634\u06CC\u062F")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_product_topSection__WEBPACK_IMPORTED_MODULE_3__["Actions"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "images-but"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "box"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "more",
    onClick: function onClick() {
      setCarouselStatus(true);
    }
  }, "..."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "buts"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "right"
  }, cartButs()), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "left"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
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

/***/ })

})
//# sourceMappingURL=product.js.d32204fd62f4ad2e1ca2.hot-update.js.map