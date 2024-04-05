import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfileSummary } from "../../actions/profile";
import {
  OrdersBox,
  TitleBox,
  PersonalData,
  FavoriteBox
} from "../../styled_components/profile";
import { Row, Col } from "styled-bootstrap-grid";
import Router from "next/dist/client/router";
class Index extends Component {
  static async getInitialProps({ store, query }) {}
  componentDidMount() {
    this.props.getProfileSummary();
  }
  priceView(price) {
    if (price > 0) {
      let sep = price.toLocaleString("fa-IR");
      return (
        <React.Fragment>
          {sep}
          <span className="currency">تومان</span>
        </React.Fragment>
      );
    } else {
      return <span className="currency">ناموجود</span>;
    }
  }
  rejectView(status, id) {
    if (status) {
      return (
        <div
          className="but"
          onClick={() => {
            Router.push(`/profile/reject/?id=${id}`, `/profile/reject/${id}`, {
              shallow: true
            });
          }}
        >
          درخواست مرجوعی
        </div>
      );
    }
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
  actionBut(data) {
    if (data.price) {
      return (
        <div
          className="but"
          onClick={() => {
            this.addToCart(data.product_variation_id, 1);
          }}
        >
          افزودن به سبد
        </div>
      );
    } else {
      return <div className="but tell">اطلاع بده</div>;
    }
  }
  render() {
    if (typeof this.props.summary.user_orders === "undefined") {
      return <div />;
    }
    const orders = this.props.summary.user_orders;
    const user = this.props.summary.user_data.real_user;
    const favorites = this.props.summary.user_favorites;
    return (
      <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -8px" }}>
        <Col col={6}>
          <TitleBox>اطلاعـات شخـصی</TitleBox>
          <PersonalData>
            <table>
              <tbody>
                <tr>
                  <td>
                    <span className="label">نام و نام خانوادگی</span>
                    {user.name} {user.family}
                  </td>
                  <td>
                    <span className="label">پست الکترونیک</span>
                    {user.email}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="label">تلفن همراه</span>
                    {user.mobile}
                  </td>
                  <td>
                    <span className="label">کدملی</span>
                    {user.national_number}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="label">عضویت در خبرنامه</span>
                    {user.subscribe_newsletter ? "بله" : "خیر"}
                  </td>
                  <td>
                    <span className="label">شماره کارت</span>
                    {user.card_number}
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              className="more-but"
              onClick={() => {
                Router.push("/profile/information", `/profile/information`, {
                  shallow: true
                });
              }}
            >
              ویرایش اطلاعات شخصی
              <i className="icon-rewind" />
            </div>
          </PersonalData>
        </Col>
        <Col col={6}>
          <TitleBox>لـیست آخرین علاقه‌منـدی‌ها</TitleBox>
          <FavoriteBox>
            <table>
              <tbody>
                {favorites.map(item => (
                  <tr key={item.id}>
                    <td className="image">
                      <img src={item.main_image.path} />
                    </td>
                    <td>
                      <div className="name">{item.name}</div>
                      <div className="price">{this.priceView(item.price)}</div>
                    </td>
                    <td className="actions">{this.actionBut(item)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              className="more-but"
              onClick={() => {
                Router.push("/profile/favorites", `/profile/favorites`, {
                  shallow: true
                });
              }}
            >
              مشاهده لیست کامل علاقه‌مندی‌ها
              <i className="icon-rewind" />
            </div>
          </FavoriteBox>
        </Col>
        <Col col={12}>
          <TitleBox>آخرین سـفارش‌ها</TitleBox>
          <OrdersBox>
            <table>
              <thead>
                <tr>
                  <th>ردیف</th>
                  <th>شماره سفارش</th>
                  <th>تاریخ ثبت سفارش</th>
                  <th>مبلغ قابل پرداخت</th>
                  <th>مبلغ کل</th>
                  <th>عملیات پرداخت</th>
                  <th>جزئیات</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.created_at}</td>
                    <td>{this.priceView(item.payable_price)}</td>
                    <td>{this.priceView(item.sum_of_prices)}</td>
                    <td>{item.status}</td>
                    <td>
                      {this.rejectView(item.has_return_order, item.id)}

                      <div
                        className="but"
                        onClick={() => {
                          Router.push(
                            `/profile/order/?id=${item.id}`,
                            `/profile/order/${item.id}`,
                            { shallow: true }
                          );
                        }}
                      >
                        جزئیات سفارش
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              className="more-but"
              onClick={() => {
                Router.push("/profile/orders", `/profile/orders`, {
                  shallow: true
                });
              }}
            >
              مشاهده لیست تمامی سفارش‌ها
              <i className="icon-rewind" />
            </div>
          </OrdersBox>
        </Col>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    summary: store.Profile.summary
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProfileSummary: () => {
      dispatch(getProfileSummary());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
