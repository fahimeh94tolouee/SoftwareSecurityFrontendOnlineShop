import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUserNotif,
  updateUserNotif,
  deleteUserNotif
} from "../../actions/notif";
import { TitleBox } from "../../styled_components/profile";
import { Row, Col } from "styled-bootstrap-grid";
import { ProductBox } from "../../styled_components/profile/notifierlist";
import Link from "next/link";
import Router from "next/router";
import Checkbox from "../../components/lib/checkbox";
class Notifierlist extends Component {
  static async getInitialProps({ store, query }) {}
  componentDidMount() {
    this.props.getUserNotif();
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let result = {};
    if (nextProps.notifs.refresh) {
        nextProps.getUserNotif();
    }
    return result;
  }
  addToCart(id, qty) {
    let cart = [];
    let pushStatus = true;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.filter(item => {
      if (item.id === id) {
        pushStatus = false;
      }
    });
    if (pushStatus) {
      cart.push({ id: id, quantity: qty });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    Router.push("/cart");
  }
  variationStatus(status) {
    if (!status) {
      return (
        <div className="notification disable">
          اطلاع در زمان : موجود شدن کالا
        </div>
      );
    } else {
      return <div className="notification enable">کالا موجود شد</div>;
    }
  }
  variationData(data) {
    if (!data.product_variation_status) {
      return (
        <ul className="checks">
          <li
            onClick={() => {
              this.props.updateUserNotif(data.product_id, {
                email: !data.email
              });
            }}
          >
            <Checkbox title="ارسال پست الکترونیک" status={data.email} />
          </li>
          <li
            onClick={() => {
              this.props.updateUserNotif(data.product_id, {
                sms: !data.sms
              });
            }}
          >
            <Checkbox title="ارسال پیامک" status={data.sms} />
          </li>
          <li
            onClick={() => {
              this.props.updateUserNotif(data.product_id, {
                notification: !data.notification
              });
            }}
          >
            <Checkbox title="اعلان در پنل مشتری" status={data.notification} />
          </li>
        </ul>
      );
    } else {
      let price = data.product_variation_price.toLocaleString("fa-IR");
      return (
        <div className="product-data">
          <span className="seller">فروشنده : {data.seller.name}</span>
          <div className="price">
            {price}
            <span className="currency">تومان</span>
          </div>
          <div className="actions">
            <div className="add-to-cart" onClick={()=>{
                this.addToCart(data.product_variation_id,1);
            }}/>
            <Link
              as={`/product/${data.product_id}`}
              href={`/product?id=${data.product_id}`}
            >
              <div className="more">توضیحات بیشتر</div>
            </Link>
          </div>
        </div>
      );
    }
  }
  render() {
    console.log(this.props);
    let items = this.props.notifs.items;
    return (
      <React.Fragment>
        <TitleBox>اطلاع‌رسانی‌ها‌</TitleBox>
        <Row>
          {items.map(item => (
            <Col col={6} key={item.id}>
              <ProductBox>
                <div
                  className="remove"
                  onClick={() => {
                    this.props.deleteUserNotif(item.id);
                  }}
                />
                <div className="image">
                  <Link
                    as={`/product/${item.id}`}
                    href={`/product?id=${item.id}`}
                  >
                    <img src={item.main_image.path} alt={item.name} />
                  </Link>
                </div>
                <div className="detail">
                  {this.variationStatus(item.product_variation_status)}
                  <div className="title">
                    <Link
                      as={`/product/${item.id}`}
                      href={`/product?id=${item.id}`}
                    >
                      <a>{item.product_name}</a>
                    </Link>
                  </div>
                  {this.variationData(item)}
                </div>
              </ProductBox>
            </Col>
          ))}
        </Row>
      </React.Fragment>
    );
  }
}
const mapStateToProps = store => {
  return {
    notifs: store.Notif
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserNotif: () => {
      dispatch(getUserNotif());
    },
    deleteUserNotif: id => {
      dispatch(deleteUserNotif(id));
    },
    updateUserNotif: (id, data) => {
      dispatch(updateUserNotif(id, data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifierlist);
