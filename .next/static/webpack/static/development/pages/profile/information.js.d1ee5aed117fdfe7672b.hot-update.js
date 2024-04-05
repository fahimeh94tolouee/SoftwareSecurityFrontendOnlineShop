webpackHotUpdate("static/development/pages/profile/information.js",{

/***/ "./components/loadings/spinner.js":
/*!****************************************!*\
  !*** ./components/loadings/spinner.js ***!
  \****************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "submit",
        onClick: this.submit.bind(this)
      }, processing ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled_components_button__WEBPACK_IMPORTED_MODULE_19__["Loading"], {
        show: true
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_loadings_spinner__WEBPACK_IMPORTED_MODULE_18__["Spinner"], null)) : "Save"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cancel"
      }, "Cancel"));
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./styled_components/variables.js");


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "button__Box",
  componentId: "sc-1mz5fu1-0"
})(["box-shadow:0 0 12px 0 rgba(0,0,0,0.16);width:100%;margin:8px 0;button{position:relative;border-radius:8px;border:0;background-color:", ";width:100%;color:", ";line-height:42px;text-align:center;cursor:pointer;", " &:hover{background-color:", ";}&:disabled{background-color:", ";color:", ";cursor:not-allowed;&:hover{box-shadow:none;}}}"], _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.windows_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white, Object(_variables__WEBPACK_IMPORTED_MODULE_1__["transition"])(0.2), _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.cool_blue, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.grey_light, _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.white);
var Loading = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "button__Loading",
  componentId: "sc-1mz5fu1-1"
})(["visibility:", ";position:absolute;right:calc(50% - 9px);top:calc(50% - 9px);"], function (props) {
  return props.show ? "visible" : "hidden";
});
var Children = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "button__Children",
  componentId: "sc-1mz5fu1-2"
})(["visibility:", ";display:inline-flex;align-items:center;"], function (props) {
  return props.show ? "visible" : "hidden";
});

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ "./styled_components/variables.js");


var TYPES = {
  primary: {
    main: _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.dark_white,
    second: _variables__WEBPACK_IMPORTED_MODULE_1__["default"].colors.menu_border
  } // primary_blue: {main : Variables.colors.tertiary_400, second: Variables.colors.complementary},
  // secondary: {main:Variables.colors.complementary_700 ,second: Variables.colors.complementary_500},

};
var SpinnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
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

/***/ })

})
//# sourceMappingURL=information.js.d1ee5aed117fdfe7672b.hot-update.js.map