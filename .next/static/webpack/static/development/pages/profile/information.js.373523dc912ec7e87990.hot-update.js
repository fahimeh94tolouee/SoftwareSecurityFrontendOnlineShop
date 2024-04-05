webpackHotUpdate("static/development/pages/profile/information.js",{

/***/ "./pages/profile/information.js":
/*!**************************************!*\
  !*** ./pages/profile/information.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! validator */ "./node_modules/validator/index.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styled_components_profile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styled_components/profile */ "./styled_components/profile/index.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/user */ "./actions/user.js");
/* harmony import */ var _styled_components_profile_information__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../styled_components/profile/information */ "./styled_components/profile/information.js");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-bootstrap-grid */ "./node_modules/styled-bootstrap-grid/dist/index.js");
/* harmony import */ var styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_lib_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/lib/checkbox */ "./components/lib/checkbox.js");
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utilities/request */ "./utilities/request.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _components_loadings_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/loadings/spinner */ "./components/loadings/spinner.js");
/* harmony import */ var _styled_components_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../styled_components/button */ "./styled_components/button.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/button */ "./components/button/index.js");






















var Information =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Information, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Information, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
        var store, query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, query = _ref.query;

              case 1:
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
  }]);

  function Information(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Information);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Information).call(this, props));
    _this.state = {
      data: _this.props.userData.data
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Information, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.props.getInformation();
      // this.getLocation("provinces", 1);
    }
  }, {
    key: "getLocation",
    value: function getLocation(type, id) {
      var _this2 = this;

      Object(_utilities_request__WEBPACK_IMPORTED_MODULE_16__["default"])({
        method: "get",
        url: "http://127.0.0.1:8000" + "/admin/locations/" + id + "/children"
      }).then(function (response) {
        _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, type, response.data.data));
      }).catch(function (error) {});
    }
  }, {
    key: "handelChange",
    value: function handelChange(value, name) {
      var data = this.state.data;
      data[name] = value;
      this.setState({
        data: data
      });
    }
  }, {
    key: "handelCheckBox",
    value: function handelCheckBox(name) {
      var data = this.state.data;
      data[name] = !data[name];
      this.setState({
        data: data
      });
    }
  }, {
    key: "submit",
    value: function submit() {
      this.props.updateInformation(this.state.data);
    }
  }, {
    key: "actionBox",
    value: function actionBox() {
      var processing = this.props.userData.processing;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "action-box"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_20__["default"], {
        onClick: this.submit.bind(this),
        loading: processing
      }, "Save"));
    }
  }, {
    key: "formView",
    value: function formView() {
      var _this3 = this;

      var data = this.state.data;

      if (typeof data !== "undefined") {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "form-box"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_14__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_14__["Col"], {
          col: 6
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "title"
        }, "Personal Information"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "First Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.first_name,
          onChange: function onChange(e) {
            _this3.handelChange(e.target.value, "first_name");
          }
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.last_name,
          onChange: function onChange(e) {
            _this3.handelChange(e.target.value, "last_name");
          }
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.email,
          disabled: true
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Credit Card"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "number",
          value: data.credit_card,
          onChange: function onChange(e) {
            _this3.handelChange(e.target.value, "credit_card");
          }
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_14__["Col"], {
          col: 6
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "title"
        }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Phone Number"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "number",
          value: data.phone_number,
          onChange: function onChange(e) {
            _this3.handelChange(e.target.value, "phone_number");
          }
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Address"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.address,
          onChange: function onChange(e) {
            _this3.handelChange(e.target.value, "address");
          }
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Postal Code"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.postal_code,
          onChange: function onChange(e) {
            _this3.handelChange(e.target.value, "postal_code");
          }
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          onClick: function onClick() {
            _this3.handelCheckBox("subscribe_newsletter");
          }
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_lib_checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
          title: "Subscribe to Maleno Newsletter",
          status: data.subscribe_newsletter
        }))))), this.actionBox());
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled_components_profile__WEBPACK_IMPORTED_MODULE_11__["TitleBox"], null, "Edit Personal Information"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled_components_profile_information__WEBPACK_IMPORTED_MODULE_13__["InforamtionBox"], null, this.formView()));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var result = {};

      if (nextProps.userData.data !== prevState.data) {
        result.data = nextProps.userData.data;
      }

      return result;
    }
  }]);

  return Information;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(store) {
  return {
    userData: store.User
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getInformation: function getInformation() {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_17__["UserAction"].getInfo());
    },
    updateInformation: function updateInformation(data) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_17__["UserAction"].updateInfo(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Information));

/***/ }),

/***/ "./styled_components/profile/information.js":
/*!**************************************************!*\
  !*** ./styled_components/profile/information.js ***!
  \**************************************************/
/*! exports provided: InforamtionBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InforamtionBox", function() { return InforamtionBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var InforamtionBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "information__InforamtionBox",
  componentId: "oauqju-0"
})(["background-color:", ";border-radius:4px;border:solid 1px ", ";box-shadow:0 0 12px 0 rgba(0,0,0,0.05);.action-box{display:flex;justify-content:flex-end;padding:32px;&>div:first-child{width:60px;}.submit,.cancel{color:", ";border-radius:8px;cursor:pointer;padding:12px 32px;margin-right:16px;min-width:60px;}.submit{background-color:", ";}.cancel{background-color:", ";}}.form-box{color:", ";padding:64px;.title{color:", ";font-size:20px;opacity:0.5;margin-bottom:48px;}label{font-size:14px;display:block;margin-top:16px;margin-bottom:8px;}input{border-radius:8px;border:solid 1px ", ";padding:12px;width:100%;margin-bottom:16px;&::placeholder{color:", ";}}}.action-box{}.legal-box{position:relative;border-top:dashed 1px ", ";.over{background-color:hsla(0,0%,100%,0.7);position:absolute;z-index:1;width:100%;height:100%;display:flex;justify-content:center;align-items:center;.legal-slogan{display:flex;flex-direction:column;font-size:18px;color:", ";text-align:center;cursor:pointer;i{font-size:44px;}}}.switch-box{.eleman{display:flex;align-items:center;.label{margin-right:20px;}}.slogan{font-size:13px;line-height:18px;margin:16px 0 65px 0;}}.location{display:flex;justify-content:space-between;.select{width:48%;}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.nice_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.warm_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.light_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.pinkish_grey, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue);

/***/ })

})
//# sourceMappingURL=information.js.373523dc912ec7e87990.hot-update.js.map