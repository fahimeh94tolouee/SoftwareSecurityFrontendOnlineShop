webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./components/cart/basket.js":
/*!***********************************!*\
  !*** ./components/cart/basket.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_numberSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/numberSelect */ "./components/lib/numberSelect.js");
/* harmony import */ var _styled_components_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styled_components/cart */ "./styled_components/cart.js");




var Basket = function Basket(props) {
  var offer = function offer(old_price) {
    if (typeof old_price !== "undefined" && old_price > 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "offer"
      }, "\u0641\u0640\u0631\u0648\u0634 \u0648\u06CC\u0640\u0698\u0647");
    }
  };

  var price = function price(_price, old_price, discount_amount) {
    if (typeof old_price !== "undefined" && old_price > 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "old-price"
      }, old_price.toLocaleString("en"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "currency"
      }, "CAD")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "discount"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "(", discount_amount.toLocaleString("en"), ")"), "\u062A\u062E\u0641\u06CC\u0641 \u0641\u0631\u0648\u0634 \u0648\u06CC\u0698\u0647"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "price"
      }, _price.toLocaleString("en"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "currency"
      }, "CAD")));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "price"
      }, _price.toLocaleString("en"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "currency"
      }, "CAD"));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_components_cart__WEBPACK_IMPORTED_MODULE_2__["BasketBox"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "title"
  }, "Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, props.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: item.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, offer(item.old_price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon-close close",
      onClick: function onClick() {
        props.removeItem(item.id);
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "image"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/product/".concat(item.product_id),
      target: "_blank"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: item.main_image.path,
      alt: item.name
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "details"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/product/".concat(item.product_id),
      target: "_blank"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "seller"
    }, "\u0641\u0631\u0648\u0634\u0646\u062F\u0647 :", item.seller.shop_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "guarantee"
    }, item.guarantee.short_desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "color"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        backgroundColor: item.color.hex_color_code
      }
    }), "\u0631\u0646\u06AF :", item.color.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "number"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_numberSelect__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: item.quantity,
      max: item.max_per_order,
      title: "\u062A\u0639\u062F\u0627\u062F",
      onChange: function onChange(value) {
        props.changeAmount(item.id, value);
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "value"
    }, price(item.price, item.old_price, item.discount_amount)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Basket);

/***/ })

})
//# sourceMappingURL=cart.js.e41596c8d36e2b3ca480.hot-update.js.map