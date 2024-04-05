webpackHotUpdate("static/development/pages/product.js",{

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
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Product);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Product)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      id: _this.props.id
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Product, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setLoading({
        loading: false
      });
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
      console.log(product); // console.log(this.props);

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_styled_components_product__WEBPACK_IMPORTED_MODULE_17__["TopBox"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_product_topSection__WEBPACK_IMPORTED_MODULE_18__["default"], {
        addToCart: this.addToCart.bind(this),
        product: product,
        variationChange: this.variationChange.bind(this)
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_product_slogans__WEBPACK_IMPORTED_MODULE_19__["default"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_homeScreen_productCarousel__WEBPACK_IMPORTED_MODULE_22__["default"], {
        title: "\u062C\u062F\u06CC\u062F\u062A\u0631\u06CC\u0646 \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0627\u0641\u0632\u0648\u062F\u0647 \u0634\u062F\u0647",
        more: "/product/1",
        fetch_url: "http://127.0.0.1:8000" + "/home_page/lists?type=newest_products"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_containers_productData__WEBPACK_IMPORTED_MODULE_21__["default"], {
        name: product.title // enName={product.en_name}
        // productData={product.product_data}
        // advantages={product.advantages}
        // disadvantages={product.disadvantages}
        // rating={this.props.product.meta.ratings}
        ,
        desc: product.description // meta_description={product.meta_description}
        ,
        id: this.state.id
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_homeScreen_productCarousel__WEBPACK_IMPORTED_MODULE_22__["default"], {
        title: "\u062E\u0631\u06CC\u062F\u0627\u0631\u0627\u0646 \u0627\u06CC\u0646 \u0645\u062D\u0635\u0648\u0644 \u0627\u06CC\u0646 \u0645\u062D\u0635\u0648\u0644\u0627\u062A \u0631\u0627 \u0646\u06CC\u0632 \u062E\u0631\u06CC\u062F \u0627\u0646\u062F",
        more: "/product/1",
        fetch_url: "http://127.0.0.1:8000" + "/home_page/lists?type=newest_products"
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
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Product)));

/***/ })

})
//# sourceMappingURL=product.js.ad79593091e369f8dc1d.hot-update.js.map