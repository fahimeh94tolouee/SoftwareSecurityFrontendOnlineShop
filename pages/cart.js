import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { getCart } from "../actions/cart";
import { Row, Col } from "styled-bootstrap-grid";
import { SmallBut, Slogans } from "../styled_components/cart";
import Basket from "../components/cart/basket";
import Invoice from "../components/cart/invoice";
class Cart extends Component {
  static async getInitialProps({ store, query }) {}
  componentDidMount() {
    this.props.getCart();
  }
  changeAmount(id, quantity) {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.filter((item, key) => {
      if (item.id === id) {
        cart[key]["quantity"] = quantity;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    this.props.getCart();
  }
  removeItem(id) {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.filter((item, key) => {
      if (item.id === id) {
        cart.splice(key, 1);
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    this.props.getCart();
  }
  goToShipping() {
    this.props.router.push("/shipping");
  }
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <Row>
          <Col col={9}>
            <Basket
              items={this.props.cart.items}
              changeAmount={this.changeAmount.bind(this)}
              removeItem={this.removeItem.bind(this)}
            />
            <SmallBut onClick={this.goToShipping.bind(this)}>
              Continue to Checkout
            </SmallBut>
          </Col>
          <Col col={3}>
            <Invoice
              data={this.props.cart.meta}
              nextStep={this.goToShipping.bind(this)}
              stepStatus={true}
            />
            <Slogans>
              <ul>
                <li>
                  <i className="icon-track" />
                  Express Delivery
                </li>
                <li>
                  <i className="icon-pay-7" />Exchange Guarantee for Refunds
                </li>
                <li>
                  <i className="icon-pay-8" />
                  Cash on Delivery
                </li>
              </ul>
            </Slogans>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    cart: store.Cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCart: () => {
      dispatch(getCart());
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
