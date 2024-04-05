import React, { useState } from "react";
import { connect } from "react-redux";
import EventListener from "react-event-listener";
import Link from "next/link";
import DesktopMenu from "./mainLayout/decktopMenu";
import {
  Header,
  AuthButton,
  BasketButton
} from "../styled_components/layouts/mainLayout";
import { Row, Col } from "styled-bootstrap-grid";
import Loading from "./loading";
import { getCart } from "../actions/cart";
import DesktopFooter from "./mainLayout/desktopFooter";
import Search from "./mainLayout/search";
import {CART} from "../constants/storageKey";
import {HOME, LOGIN, PROFILE, REGISTER} from "../constants/urls";
import logout from "../utilities/logout";
const MainLayout = props => {
  const [authStatus, setAuthStatus] = useState(false);
  const [cartStatus, setCartStatus] = useState(false);
  const loadingStatus = () => {
    if (props.initial.loading) {
      return <Loading />;
    }
  };
  const sliceItem = () => {
    let result = {
      menus: "",
      links: "",
      fotter: ""
    };
    props.initial.items.forEach(item => {
      if (item.key === "main_menu") {
        result.menus = item.value.menu;
        result.links = item.value.links;
      } else if ((item.key = "fotter")) {
        result.fotter = item.value;
      }
    });
    return result;
  };

  const authRoll = type => {
    if (authStatus) {
      switch (type) {
        case "login":
          return (
            <div
              className="roll"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <Link href={LOGIN}>
                <div className="but">Login to Maleno</div>
              </Link>
              <div className="notice">
                New User?
                <Link href={REGISTER}>
                  <span className="link">Sign up</span>
                </Link>
              </div>
              <ul className="links">
                <Link href={PROFILE}>
                  <li>
                    <i className="icon-user" />
                    Account
                  </li>
                </Link>
                <Link href="/profile/orders">
                  <li>
                    <i className="icon-shop" />
                    Track Order
                  </li>
                </Link>
              </ul>
            </div>
          );
        case "profile":
          return (
            <div
              className="roll"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <ul className="links profile-links">
                <Link href={PROFILE}>
                  <li>
                    <i className="icon-user" />
                    Account
                  </li>
                </Link>
                <Link href="/profile/orders">
                  <li>
                    <i className="icon-shop" />
                    Track Order
                  </li>
                </Link>
                <li onClick={logout}>
                  <i className="icon-logout" />
                  Logout
                </li>
              </ul>
            </div>
          );
        default:
          return null;
      }
    }
  };
  const authView = () => {
    let data = props.userData;
    if (!data) {
      return (
        <AuthButton
          status={authStatus ? "open" : "close"}
          onClick={e => {
            setAuthStatus(!authStatus);
            e.stopPropagation();
          }}
        >
          <i className="icon-user user" />
          <span>Login/Sign up</span>
          <i className="icon-chevron chevron" />
          {authRoll("login")}
        </AuthButton>
      );
    } else {
      return (
        <AuthButton
          status={authStatus ? "open" : "close"}
          onClick={e => {
            setAuthStatus(!authStatus);
            e.stopPropagation();
          }}
        >
          <i className="icon-user user" />
          <span>
            {data.fullName}
          </span>
          <i className="icon-chevron chevron" />
          {authRoll("profile")}
        </AuthButton>
      );
    }
  };
  const cartCount = () => {
    let cartItems = [];
    if (typeof localStorage !== "undefined") {
      if (localStorage.getItem(CART)) {
        cartItems = JSON.parse(localStorage.getItem(CART));
      }
    }
    return cartItems.length;
  };
  const removeCartItem = id => {
    let cart = [];
    if (localStorage.getItem(CART)) {
      cart = JSON.parse(localStorage.getItem(CART));
    }
    cart.filter((item, key) => {
      if (item.id === id) {
        cart.splice(key, 1);
      }
    });
    localStorage.setItem(CART, JSON.stringify(cart));
    props.getCart();
  };
  const priceView = value => {
    if (value) {
      let price = value.toLocaleString("en");
      return (
        <React.Fragment>
          <span className="price">{price}</span>
          <span className="currency">CAD</span>
        </React.Fragment>
      );
    } else {
      return <span className="currency">Free</span>;
    }
  };
  const cartView = () => {
    let cart = props.cart;
    if (cartStatus) {
      if (cartCount() > 0 && cart.items.length <= 0) {
        props.getCart();
      }
      return (
        <div className="cart-box">
          <div className="head">
            <div>
              <Link href="/cart">
                <span className="show-cart">View Shopping Cart</span>
              </Link>
            </div>
            <div>
              Total Order Amount:
              {" "}
              {priceView(cart.meta.sum_of_prices)}
            </div>
          </div>
          <div className="content">
            <table>
              <tbody>
              {cart.items.map(item => (
                  <tr key={item.id}>
                    <td>
                      <span
                        className="remove"
                        onClick={() => {
                          removeCartItem(item.id);
                        }}
                      />
                    </td>
                    <td>
                      <img src={item.main_image.path} alt={item.name} />
                    </td>
                    <td>
                      <span className="name">{item.name}</span>
                      <span className="qty">
                        {item.quantity}
                        Quantity
                      </span>
                      <span className="color">
                        Color:
                        {item.color.name}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/cart">
            <div className="big-but">Place Order and Complete Purchase</div>
          </Link>
        </div>
      );
    }
  };
  return (
    <React.Fragment>
      <EventListener
        target="window"
        onClick={() => {
          setAuthStatus(false);
          setCartStatus(false);
        }}
      />
      {loadingStatus()}
      <Header>
        <div className="container">
          <Row>
            <Col col="12" md="8">
              <Row>
                <Col col="4" md="2">
                  <Link href={HOME}>
                    <a>
                      <img
                        src="/static/images/logo.png"
                        alt="Maleno Online Shop"
                        className="logo"
                      />
                    </a>
                  </Link>
                </Col>
                <Col col="8" md="10">
                  <Search />
                </Col>
              </Row>
            </Col>
            <Col col="12" md="4">
              <ul className="user-items">
                <li>{authView()}</li>
                <li>
                  <BasketButton
                    status={cartStatus ? "open" : "close"}
                    onClick={e => {
                      setCartStatus(!cartStatus);
                      e.stopPropagation();
                    }}
                  >
                    <i className="icon-basket basket" />
                    <span>Cart</span>
                    <div className="right-section">
                      <span className="qty">{cartCount()}</span>
                      <i className="icon-chevron chevron"/>
                    </div>
                    {cartView()}
                  </BasketButton>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Header>
      <DesktopMenu data={sliceItem()} />
      {props.children}
      <DesktopFooter data={sliceItem()} />
    </React.Fragment>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    getCart: () => {
      dispatch(getCart());
    }
  };
};
const mapStateToProps = store => {
  return {
    initial: store.Initial,
    userData: store.User.data,
    loading: store.User.loading,
    cart: store.Cart
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
