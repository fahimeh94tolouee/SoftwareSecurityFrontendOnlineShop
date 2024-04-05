import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { Row, Col } from "styled-bootstrap-grid";
import {
  getAddress,
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress
} from "../actions/address";
import Address from "../components/shipping/address";
import Basket from "../components/shipping/basket";
import { Steps, SendTypeBox } from "../styled_components/shipping";
import { getCart } from "../actions/cart";
import{addOrder} from "../actions/order";
import Invoice from "../components/cart/invoice";
import { Slogans } from "../styled_components/cart";
import Factor from "../components/shipping/factor";
import PaymentType from "../components/shipping/paymentType";
import OrderSammary from "../components/shipping/orderSammary";
import Offers from "../components/shipping/offers";
class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.address,
      cart: this.props.cart,
      step: 0,
      cartData: {
        address_id:0,
        shipping_time_scope_id: 0,
        shipping_type: 0,
        payment_type: "",
        coupon_code: "",
        gift_card: "",
        bank_id:1,
        have_invoice:false,
      }
    };
    this.props.getAddress();
  }
  change_shipping_type(type, time = 0) {
    let cartData = this.state.cartData;
    cartData.shipping_time_scope_id = time;
    if (cartData.shipping_type !== type) {
      cartData.shipping_type = type;
      this.props.getCart(cartData);
    }
    this.setState({
      cartData: cartData
    });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let result = {};
    if (nextProps.address !== prevState.address) {
      let cartData = prevState.cartData;
      if (typeof nextProps.address.items[0] !== "undefined") {
        cartData.address_id = nextProps.address.items[0]["id"];
      }
      nextProps.getCart(cartData);
      result.cartData = cartData;
      result.address = nextProps.address;
    }
    if (nextProps.cart !== prevState.cart) {
      result.cart = nextProps.cart;
    }

    return result;
  }
  handleAddress(data, id) {
    if (!id) {
      this.props.addAddress(data);
    } else {
      this.props.updateAddress(data, id);
    }
  }
  needFactor() {
    let cartData = this.state.cartData;
    cartData.have_invoice = !cartData.have_invoice;
    this.setState({
      cartData: cartData
    });
  }
  stepStatus() {
    let step = this.state.step;
    let cartData = this.state.cartData;
    if (step === 0) {
      if (cartData.shipping_type) {
        return true;
      }
    } else if (step === 1) {
      if (cartData.payment_type !== "") {
        return true;
      }
    }
    return false;
  }
  nextStep() {
    let step = this.state.step;
    if (step === 0) {
      this.setState({
        step: 1
      });
    } else if (step === 1) {
      this.props.addOrder(this.state.cartData);
    }
  }
  changePaymentType(value) {
    let cartData = this.state.cartData;
    cartData.payment_type = value;
    this.setState({
      cartData: cartData
    });
  }
  changeBank(value) {
    let cartData = this.state.cartData;
    cartData.bank_id = value;
    this.setState({
      cartData: cartData
    });
  }
  setOffer(code, type) {
    let cartData = this.state.cartData;
    cartData[type] = code;
    this.setState(
      {
        cartData: cartData
      },
      () => {
        this.props.getCart(cartData);
      }
    );
  }
  stepView() {
    let step = this.state.step;
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Address
              items={this.props.address.items}
              handleAddress={this.handleAddress.bind(this)}
              remove={id => {
                this.props.deleteAddress(id);
              }}
              makeDefault={id => {
                this.props.setDefaultAddress(id);
              }}
            />
            <SendTypeBox>
              <div className="title">نحوه ارسال مرسوله : عادی</div>
              مرسولات در بازه زمانی ۴ الی ۷ روز کاری آماده سازی و برای ارسال به
              مسولین ارسال تحویل داده خواهند شد
            </SendTypeBox>
            <Basket
              items={this.props.cart.items}
              meta={this.props.cart.meta}
              shipping_time_scope_id={
                this.state.cartData.shipping_time_scope_id
              }
              shipping_type={this.state.cartData.shipping_type}
              change_shipping_type={this.change_shipping_type.bind(this)}
            />
            <Factor
              needFactor={this.needFactor.bind(this)}
              status={this.state.cartData.have_invoice}
            />
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <PaymentType
              meta={this.props.cart.meta}
              paymentType={this.state.cartData.payment_type}
              changePaymentType={this.changePaymentType.bind(this)}
              changeBank={this.changeBank.bind(this)}
              bankId={this.state.cartData.bank_id}
            />
            <OrderSammary
              meta={this.props.cart.meta}
              items={this.props.cart.items}
            />
            <Offers
              gift={this.props.cart.meta.has_gift_card}
              coupon={this.props.cart.meta.has_coupon}
              setOffer={this.setOffer.bind(this)}
              giftCard={this.state.cartData.gift_card}
              couponCode={this.state.cartData.coupon_code}
            />
          </React.Fragment>
        );
      default:
        return null;
    }
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Steps>
          <li className={this.state.step === 0 ? "active" : "passed"}>
            اطلاعات ارسال
          </li>
          <li className={this.state.step === 1 ? "active" : ""}>پرداخت</li>
          <li>اتمام خرید و ارسال</li>
        </Steps>
        <div className="container">
          <Row>
            <Col col={9}>{this.stepView()}</Col>
            <Col col={3}>
              <Invoice
                data={this.props.cart.meta}
                stepStatus={this.stepStatus()}
                nextStep={this.nextStep.bind(this)}
              />
              <Slogans>
                <ul>
                  <li>
                    <i className="icon-track" />
                    تحویل اکسپرس
                  </li>
                  <li>
                    <i className="icon-pay-7" />۷ روز ضمانت تعویض
                  </li>
                  <li>
                    <i className="icon-pay-8" />
                    پرداخت در محل با کارت بانکی
                  </li>
                </ul>
              </Slogans>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = store => {
  return {
    cart: store.Cart,
    address: store.Address
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAddress: () => {
      dispatch(getAddress());
    },
    addAddress: data => {
      dispatch(addAddress(data));
    },
    updateAddress: (data, id) => {
      dispatch(updateAddress(data, id));
    },
    deleteAddress: id => {
      dispatch(deleteAddress(id));
    },
    setDefaultAddress: id => {
      dispatch(setDefaultAddress(id));
    },
    getCart: moreData => {
      dispatch(getCart(moreData));
    },
    addOrder:data=>{
      dispatch(addOrder(data))
    }

  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Shipping)
);
