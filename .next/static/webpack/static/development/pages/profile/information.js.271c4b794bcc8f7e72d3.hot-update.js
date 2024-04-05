webpackHotUpdate("static/development/pages/profile/information.js",{

/***/ "./components/button/index.js":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styled_components/button */ "./styled_components/button.js");
/* harmony import */ var _loadings_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loadings/spinner */ "./components/loadings/spinner.js");





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var borderless = props.borderless,
      loading = props.loading,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["borderless", "loading"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_button__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    btn: props.btn,
    borderless: borderless,
    active: props.active
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    onClick: !props.onClick ? props.onClick : !loading ? function (e) {
      e.stopPropagation();
      props.onClick(e);
    } : function (e) {
      e.preventDefault();
      return false;
    },
    disabled: props.disabled
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_button__WEBPACK_IMPORTED_MODULE_3__["Loading"], {
    show: loading
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loadings_spinner__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_components_button__WEBPACK_IMPORTED_MODULE_3__["Children"], {
    show: !loading
  }, props.children)));
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

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
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
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

/***/ })

})
//# sourceMappingURL=information.js.271c4b794bcc8f7e72d3.hot-update.js.map