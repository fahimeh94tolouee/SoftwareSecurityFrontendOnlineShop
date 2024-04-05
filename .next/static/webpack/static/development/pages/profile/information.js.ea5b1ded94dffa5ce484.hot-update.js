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
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-switch */ "./node_modules/react-switch/index.js");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utilities_request__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utilities/request */ "./utilities/request.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");




















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
    }; // if (
    //   typeof this.props.userData.data !== "undefined"
    // ) {
    //   this.getLocation(
    //     "cities",
    //     this.props.userData.data.legal_user.province.value
    //   );
    // }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Information, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getInformation(); // this.getLocation("provinces", 1);
    }
  }, {
    key: "getLocation",
    value: function getLocation(type, id) {
      var _this2 = this;

      Object(_utilities_request__WEBPACK_IMPORTED_MODULE_17__["default"])({
        method: "get",
        url: "http://127.0.0.1:8000" + "/admin/locations/" + id + "/children"
      }).then(function (response) {
        _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, type, response.data.data));
      }).catch(function (error) {});
    }
  }, {
    key: "handelChange",
    value: function handelChange(value, type, name) {
      var data = this.state.data;
      data[type][name] = value;
      this.setState({
        data: data
      });
    }
  }, {
    key: "handelCheckBox",
    value: function handelCheckBox(type, name) {
      var data = this.state.data;
      data[type][name] = !data[type][name];
      this.setState({
        data: data
      });
    }
  }, {
    key: "handelSwitch",
    value: function handelSwitch(value) {
      var data = this.state.data;
      data[value] = !data[value];
      this.setState({
        data: data
      });
    }
  }, {
    key: "overView",
    value: function overView() {
      var _this3 = this;

      if (!this.state.data.is_legal_user) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "over"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "legal-slogan",
          onClick: function onClick() {
            var data = _this3.state.data;
            data.is_legal_user = true;

            _this3.setState({
              data: data
            });
          }
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "icon-shipping-and-delivery"
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "\u0627\u0641\u0632\u0648\u062F\u0646 \u0627\u0637\u0640\u0644\u0627\u0639\u0627\u062A \u062D\u0640\u0642\u0648\u0642\u06CC")));
      }
    }
  }, {
    key: "handleLocation",
    value: function handleLocation(value, type) {
      if (type === "province") {
        this.getLocation("cities", value.value);
      }

      var data = this.state.data;
      data.legal_user[type] = value;
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
    value: function actionBox(position) {
      if (position === "top" && !this.state.data.is_legal_user) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "action-box"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "submit",
          onClick: this.submit.bind(this)
        }, "\u062B\u0628\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "cancel"
        }, "\u0627\u0646\u0635\u0631\u0627\u0641"));
      } else if (position === "bottom" && this.state.data.is_legal_user) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "action-box"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "submit",
          onClick: this.submit.bind(this)
        }, "\u062B\u0628\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "cancel"
        }, "\u0627\u0646\u0635\u0631\u0627\u0641"));
      }
    }
  }, {
    key: "formView",
    value: function formView() {
      var _this4 = this;

      var data = this.state.data;

      if (typeof data !== "undefined") {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "form-box"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_14__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_14__["Col"], {
          col: 6
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "title"
        }, "\u062D\u0633\u0627\u0628 \u0634\u062E\u0635\u06CC"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "First Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.first_name,
          onChange: function onChange(e) {
            _this4.handelChange(e.target.value, "real_user", "name");
          }
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.last_name,
          onChange: function onChange(e) {
            _this4.handelChange(e.target.value, "real_user", "family");
          }
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Email"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.email,
          onChange: function onChange(e) {
            _this4.handelChange(e.target.value, "real_user", "email");
          }
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Credit Card"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.credit_card,
          onChange: function onChange(e) {
            _this4.handelChange(e.target.value, "real_user", "card_number");
          }
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_bootstrap_grid__WEBPACK_IMPORTED_MODULE_14__["Col"], {
          col: 6
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "title"
        }, "Contact Information"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Phone Number"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.phone_number,
          onChange: function onChange(e) {
            _this4.handelChange(e.target.value, "real_user", "mobile");
          }
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Address"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.address,
          onChange: function onChange(e) {
            _this4.handelChange(e.target.value, "real_user", "email");
          }
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", null, "Postal Code"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
          type: "text",
          value: data.postal_code,
          onChange: function onChange(e) {
            _this4.handelChange(e.target.value, "real_user", "email");
          }
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          onClick: function onClick() {
            _this4.handelCheckBox("real_user", "subscribe_newsletter");
          }
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_lib_checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
          title: "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u062E\u0628\u0631\u0646\u0627\u0645\u0647 \u0645\u0627\u0644 \u0646\u0648",
          status: data.subscribe_newsletter
        }))))), this.actionBox("top"));
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled_components_profile__WEBPACK_IMPORTED_MODULE_11__["TitleBox"], null, "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0627\u0637\u0640\u0644\u0627\u0639\u0640\u0627\u062A \u0634\u0640\u062E\u0635\u06CC"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled_components_profile_information__WEBPACK_IMPORTED_MODULE_13__["InforamtionBox"], null, this.formView()));
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
      dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_12__["getInformation"])());
    },
    updateInformation: function updateInformation(data) {
      dispatch(Object(_actions_user__WEBPACK_IMPORTED_MODULE_12__["updateInformation"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Information));

/***/ })

})
//# sourceMappingURL=information.js.ea5b1ded94dffa5ce484.hot-update.js.map