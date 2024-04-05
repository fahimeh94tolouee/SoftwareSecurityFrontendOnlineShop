import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleOrder } from "../../actions/order";
import { TitleBox } from "../../styled_components/profile";
import {
  OrderDetail,
  CancelBox,
  ShippingBox
} from "../../styled_components/profile/order";
import Router from "next/router";
const steps = [
  {
    icon: "support",
    title: "در صف بررسی"
  },
  {
    icon: "invoice",
    title: "تایید سفارش"
  },
  {
    icon: "box",
    title: "آماده سازی سفارش"
  },
  {
    icon: "shipping-and-delivery",
    title: "خروج ازمرکز پردازش"
  },
  {
    icon: "truck",
    title: "دریافت در مرکز توزیع"
  },
  {
    icon: "shipment",
    title: "تحویل به مأمور"
  },
  {
    icon: "box-5",
    title: "تحویل به گیرنده"
  }
];
class Order extends Component {
  static async getInitialProps({ store, query }) {
    return {
      id: query.id
    };
  }
  componentDidMount() {
    this.props.getSingleOrder(this.props.id);
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
      return <span className="currency">رایگان</span>;
    }
  }
  render() {
    let order = this.props.order.order;
    if (typeof order.id === "undefined") {
      return <div />;
    }
    return (
      <React.Fragment>
        <TitleBox>
          سفارش‌ - {this.props.id}
          <div
            className="back-but"
            onClick={() => {
              Router.back({
                shallow: true
              });
            }}
          >
            بازگشت
          </div>
        </TitleBox>
        <OrderDetail>
          <table>
            <tbody>
              <tr>
                <td>
                  <span className="label">تحویل گیرنده</span>
                  {order.address.name}
                </td>
                <td>
                  <span className="label">شماره تماس تحویل گیرنده</span>
                  {order.address.phone}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="label">آدرس تحویل گیرنده</span>
                  {order.province.label} ,{order.city.label} ,
                  {order.district.label} ,{order.address.address}
                </td>
                <td>
                  <span className="label">تاریخ ثبت سفارش</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="label">مبلغ قابل پرداخت</span>
                  {this.priceView(order.sum_of_prices)}
                </td>
                <td>
                  <span className="label">مبلغ کل</span>
                  {this.priceView(order.sum_of_prices)}
                </td>
              </tr>
            </tbody>
          </table>
        </OrderDetail>
        <CancelBox>
          <div className="but">لغو ارسال سفارش</div>
        </CancelBox>
        <TitleBox>وضعیت سفارش</TitleBox>
        {order.shippments.map(shippment => (
          <ShippingBox key={shippment.id}>
            <ul className="steps">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className={shippment.status >= index ? "active" : ""}
                >
                  <i className={`icon-${step.icon}`} />
                  {step.title}
                </li>
              ))}
            </ul>
            <div className="order-detail">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className="label">کد سفارش</span>
                      {shippment.id}
                    </td>
                    <td>
                      <span className="label">نحوه ارسال سفارش</span>
                      {shippment.shipping_type.text}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="label">زمان تحویل</span>
                      {shippment.shipping_date}
                    </td>
                    <td>
                      <span className="label">هزینه ارسال</span>
                      {this.priceView(shippment.shipping_price)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="price-box">
                <span className="label">مبلغ این سفارش</span>
                {this.priceView(shippment.sum_of_prices)}
              </div>
            </div>
            <div className="product-variations">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>عنوان محصول</th>
                    <th>تعداد</th>
                    <th>قیمت واحد</th>
                    <th>قیمت کل</th>
                    <th>تخفیف</th>
                    <th>قیمت نهایی</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {shippment.product_variations.map((product, index) => (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="product-detail">
                          <img src={product.product.main_image.path} />
                          <div className="content">
                            <span>{product.product.name}</span>
                            <small>
                              فروشنده : {product.product.seller.name}
                            </small>
                            <small>{product.guarantee.name}</small>
                            <small>رنگ : {product.color.name}</small>
                          </div>
                        </div>
                      </td>
                      <td>{product.quantity}</td>
                      <td>{this.priceView(product.price)}</td>
                      <td>{this.priceView(product.total_price)}</td>
                      <td>{this.priceView(product.discount)}</td>
                      <td>{this.priceView(product.total_price)}</td>
                      <td>
                        <div
                          className="buy-but"
                          onClick={() => {
                            Router.push(
                              "/p?id=" + product.product.id,
                              "/p/" + product.product.id,
                              {
                                shallow: true
                              }
                            );
                          }}
                        >
                          خرید مجدد
                        </div>
                        <div
                          className="comment-but"
                          onClick={() => {
                            Router.push(
                              "/p?id=" + product.product.id,
                              "/p/" + product.product.id,
                              {
                                shallow: true
                              }
                            );
                          }}
                        >
                          ثبت نظر
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ShippingBox>
        ))}
      </React.Fragment>
    );
  }
}
const mapStateToProps = store => {
  return {
    order: store.Order
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSingleOrder: id => {
      dispatch(getSingleOrder(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
