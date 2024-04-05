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
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions/product */ "./actions/product.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _actions_breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../actions/breadcrumb */ "./actions/breadcrumb.js");
/* harmony import */ var _components_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/lib/breadcrumb */ "./components/lib/breadcrumb.js");
/* harmony import */ var _styled_components_product__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styled_components/product */ "./styled_components/product/index.js");
/* harmony import */ var _components_product_topSection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/product/topSection */ "./components/product/topSection.js");
/* harmony import */ var _components_product_slogans__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/product/slogans */ "./components/product/slogans.js");
/* harmony import */ var _components_product_variations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/product/variations */ "./components/product/variations.js");
/* harmony import */ var _containers_productData__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../containers/productData */ "./containers/productData.js");
/* harmony import */ var _components_homeScreen_productCarousel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/homeScreen/productCarousel */ "./components/homeScreen/productCarousel.js");
























var Product =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Product, _Component);

  function Product() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Product);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Product).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      id: _this.props && _this.props.id
    });

    _this.TopBoxRef = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Product, [{
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
    value: function addToCart(id, qty) {
      var cart = [];
      var pushStatus = true;

      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.filter(function (item) {
        if (item.id === id) {
          pushStatus = false;
        }
      });

      if (pushStatus) {
        cart.push({
          id: id,
          quantity: qty
        });
      }

      localStorage.setItem("cart", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(cart));
      this.props.router.push("/cart");
    }
  }, {
    key: "render",
    value: function render() {
      var product = this.props.product;
      console.log("nnnn", this.TopBoxRef && this.TopBoxRef.current && this.TopBoxRef.current.getBoundingClientRect().width); // console.log(this.props);

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styled_components_product__WEBPACK_IMPORTED_MODULE_17__["TopBox"], {
        ref: this.TopBoxRef
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_product_topSection__WEBPACK_IMPORTED_MODULE_18__["default"], {
        addToCart: this.addToCart.bind(this),
        product: product,
        variationChange: this.variationChange.bind(this),
        containerWidth: this.TopBoxRef && this.TopBoxRef.current && this.TopBoxRef.current.getBoundingClientRect().width
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_product_slogans__WEBPACK_IMPORTED_MODULE_19__["default"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_containers_productData__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
                return store.dispatch(_actions__WEBPACK_IMPORTED_MODULE_14__["ProductAction"].show(query.id));

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
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var mapStateToProps = function mapStateToProps(store) {
  return {
    product: store.Product.product,
    breadcrumb: store.Breadcrumb
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProduct: function getProduct(id) {
      dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_13__["getProduct"])(id));
    },
    getProductVariations: function getProductVariations(product, variation) {
      dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_13__["getProductVariations"])(product, variation));
    },
    setLoading: function setLoading(data) {
      dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_13__["setLoading"])(data));
    },
    show: function show(id) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_14__["ProductAction"].show(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Product)));

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var Images = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "topSection__Images",
  componentId: "sc-1f41eyb-0"
})(["width:40%;display:flex;justify-content:center;align-items:center;direction:ltr;position:relative;.off,.out-off{background-color:", ";color:", ";border-bottom-left-radius:55px;position:absolute;top:-1px;right:0px;z-index:1;width:60%;text-align:center;font-size:26px;line-height:55px;span{position:relative;display:inline-block;&::before{content:\"\\69\";font-family:maleno;position:absolute;font-size:34px;color:", ";right:-50px;}}}.out-off{background-color:", ";span{display:inline-block;&::before{content:\"\\6d\";}}}.zoom{margin:auto 15%;}.enlarged{background-color:", ";right:-110% !important;top:0% !important;width:", " !important;z-index:10 !important;border:1px solid ", " !important;}.original{position:relative;margin:auto 10%;img{width:100%;max-height:300px;}.lens{opacity:0;position:absolute;display:block;width:50%;height:50%;border:", " solid 1px;", "}.zoom{opacity:0;position:absolute;width:150%;height:150%;border:1px solid ", ";top:-25%;left:-160%;z-index:10;", "}&:hover{.lens{opacity:1;}.zoom{opacity:1;}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lipstick, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_salmon, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, function (props) {
  return props.containerWidth ? "calc(" + props.containerWidth + "px - 100%" + ");" : "100%";
}, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lipstick, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.3), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.3));
var Details = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "topSection__Details",
  componentId: "sc-1f41eyb-1"
})(["width:60%;border-right:solid 1px ", ";.right{width:65%;padding:16px;}.left{width:35%;border-right:solid 1px ", ";padding:16px;}.title{border-bottom:solid 1px ", ";display:flex;justify-content:space-between;.right{h1{font-size:18px;font-weight:normal;color:", ";}h3{font-size:14px;font-weight:normal;}}.left{position:relative;.ribbon{position:absolute;background-color:", ";border-top-right-radius:9px;border-bottom-right-radius:9px;height:50px;top:calc(50% - 25px);left:0px;width:calc(100% - 70px);padding:8px;display:flex;align-items:center;.span{width:110px;line-height:1.25;font-size:16px;}}.icon{position:absolute;right:16px;top:22px;img{max-width:32px;max-height:32px;}}}}.rate{border-bottom:solid 1px ", ";display:flex;justify-content:space-between;.right{ul{margin:0px;padding:0px;list-style:none;li{display:inline-block;margin-left:2px;opacity:0.5;}.star{::before{font-family:maleno;content:\"\\e024\";}}.active{opacity:1;color:", ";::before{content:\"\\e024\";}}.text{padding-right:14px;font-family:Number;}}}.left{line-height:18px;}}.variations{border-bottom:solid 1px ", ";display:flex;justify-content:space-between;.right{font-family:Number;ul{margin:0px;padding:0px;list-style:none;li{padding:8px;padding-right:30px;position:relative;}.seller{font-size:14px;span{margin-right:20px;font-size:12px;background-color:", ";border-radius:15px;padding:1px 8px;}&::before{font-family:maleno;content:\"\\e019\";position:absolute;right:0px;font-size:20px;top:2px;color:", ";}}.seller_rate{font-size:13px;&::before{font-family:maleno;content:\"\\31\";position:absolute;right:0px;font-size:20px;top:9px;color:", ";}.bar{width:50%;background-color:", ";height:4px;position:relative;border-radius:3px;margin-top:8px;span{background-color:", ";height:4px;display:inline-block;position:absolute;border-radius:3px;}}}.switch{&::before{font-family:maleno;content:\"\\e02a\";position:absolute;right:0px;font-size:20px;top:14px;color:", ";}.color{li{display:inline-block;border-radius:8px;padding:8px 16px;padding-right:44px;border:solid 1px ", ";position:relative;cursor:pointer;span{width:20px;height:20px;content:\"\";position:absolute;border-radius:5px;right:16px;top:7px;border:solid 1px rgba(0,0,0,0.05);}}.active{border-color:", ";cursor:default;}.more{font-size:12px;padding-right:0px;}}}}.price{margin:16px -16px 0px -16px;border-top:solid 1px ", ";padding:16px;padding-bottom:0px;color:", ";font-size:32px;.currency{color:", ";font-size:24px;margin-right:8px;}.old{opacity:0.41;font-size:20px;color:", ";border-bottom:dashed 2px ", ";margin:auto -16px 16px -16px;padding:0px 16px 16px 16px;.through{text-decoration:line-through;}.currency{font-size:14px;color:", ";}}.box{display:flex;.value{border:solid 1px ", ";border-radius:17px;padding:8px;padding-left:40px;}.discount{background-color:", ";border-radius:17px;border-top-right-radius:0px;color:", ";padding:16px;padding-bottom:10px;margin-right:-30px;font-size:26px;}}}.unavailable{background-color:rgba(251,203,13,0.02);border:solid 1px ", ";margin:auto 16px;border-radius:8px;padding:16px 80px;span{color:", ";line-height:2.5;font-size:14px;position:relative;&::before{font-family:maleno;content:\"\\63\";font-size:64px;color:", ";position:absolute;top:-30px;right:-70px;}}}}.left{}}.slogans{display:flex;justify-content:space-between;border-bottom:solid 1px ", ";.right{opacity:0.7;i{width:28px;position:relative;display:inline-block;&::before{position:absolute;top:-15px;}}}.left{a{border-bottom:dashed 1px #3364ad;padding-bottom:6px;}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_font, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gold, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_green_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_green_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_font, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.font, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.lipstick, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.goldenrod, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_olive, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.goldenrod, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey);
var FeaturesBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "topSection__FeaturesBox",
  componentId: "sc-1f41eyb-2"
})(["list-style:none;padding:0px;overflow:hidden;max-height:", ";position:relative;li{font-size:12px;position:relative;line-height:2.58;padding-right:13px;&::before{background-color:", ";width:8px;height:8px;opacity:0.28;border-radius:3px;content:\"\";position:absolute;top:calc(50% - 4px);right:0px;}}.more,.less{bottom:0px;background:", ";width:100%;padding-right:0;&::before{display:none;}span{background-color:", ";padding:1px 16px;padding-right:30px;cursor:pointer;border-radius:10px;position:relative;&::before{font-family:maleno;position:absolute;right:10px;font-size:10px;top:-1px;}}}.more{position:absolute;display:", ";span{&::before{content:\"\\29\";}}}.less{position:relative;display:", ";span{&::before{content:\"\\27\";}}}"], function (props) {
  return props.status ? "auto" : "115px";
}, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, function (props) {
  return props.status ? "none" : "block";
}, function (props) {
  return props.status ? "block" : "none";
});
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "topSection__Actions",
  componentId: "sc-1f41eyb-3"
})(["width:100%;display:flex;.images-but{width:40%;padding:16px;padding-top:0px;.box{border-radius:4px;box-shadow:0 0 12px 0 rgba(0,0,0,0.05);border:solid 1px ", ";display:flex;flex-wrap:wrap;padding:0px 16px;max-height:100px;overflow:hidden;direction:ltr;justify-content:flex-end;align-items:center;img{width:72px;border-radius:6px;margin:16px 7px;cursor:pointer;}.more{border:solid 1px ", ";width:60px;height:60px;border-radius:4px;cursor:pointer;font-size:60px;text-align:center;line-height:30px;opacity:0.5;margin:22px 6px;}}}.buts{border-right:solid 1px ", ";width:60%;display:flex;justify-content:space-between;.right{width:65%;padding:16px;display:flex;align-items:center;.notice{background-color:", ";color:", ";padding:16px 48px;font-size:18px;border-radius:12px;display:inline-block;cursor:pointer;", " span{position:relative;padding-right:48px;&:before{font-family:maleno;content:\"\\6b\";color:", ";font-size:24px;position:absolute;top:3px;right:0px;}}&:hover{background-color:", ";}}.add-to-cart{background-color:", ";color:", ";padding:16px 48px;font-size:18px;border-radius:12px;display:inline-block;cursor:pointer;", " span{position:relative;padding-right:30px;&:before{font-family:maleno;content:\"\\28\";color:", ";font-size:18px;position:absolute;top:3px;right:0px;}}&:hover{background-color:", ";}}.wish{background-color:", ";color:", ";border-radius:12px;padding:14px;margin:auto 16px;cursor:pointer;", ";&:hover{background-color:", ";}}}.left{width:35%;border-right:solid 1px ", ";display:flex;align-items:center;padding:8px;ul{padding:0px;list-style:none;text-align:center;li{background-color:", ";display:inline-block;border:solid 1px ", ";border-radius:12px;padding:10px;margin:auto 8px;cursor:pointer;", ";i{&::before{font-size:28px;color:", ";}}}.compare{&:hover{background-color:", ";border-color:", ";i{&::before{color:", ";}}}}.notice{&:hover{background-color:", ";border-color:", ";i{&::before{color:", ";}}}}.share{&:hover{background-color:", ";border-color:", ";i{&::before{color:", ";}}}}}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.amaranth, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.thin_grey, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_font, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.goldenrod, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.goldenrod, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.red_violet, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.red_violet, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white);

/***/ })

})
//# sourceMappingURL=product.js.feaf4dbc562967336b13.hot-update.js.map