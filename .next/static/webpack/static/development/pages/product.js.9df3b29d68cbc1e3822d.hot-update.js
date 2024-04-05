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
          props.addToCart(product.id, 1);
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Add to Cart")));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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
    value: function addToCart(id, qty) {}
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
    addToCart: function addToCart(id, qty) {
      dispatch();
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Product)));

/***/ })

})
//# sourceMappingURL=product.js.9df3b29d68cbc1e3822d.hot-update.js.map