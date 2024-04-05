import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrder } from "../../actions/order";
import { TitleBox } from "../../styled_components/profile";
import { OrdersBox } from "../../styled_components/profile/orders";
import Router from "next/router";
class Orders extends Component {
  static async getInitialProps({ store, query }) {}
  componentDidMount() {
    this.props.getOrder();
  }
  priceView(price) {
    let sep = price.toLocaleString("fa-IR");
    return sep;
  }
  rejectView(status, id) {
    if (status) {
      return (
        <div
          className="but"
          onClick={() => {
            Router.push(
              `/profile/reject/?id=${id}`,
              `/profile/reject/${id}`,
              { shallow: true }
            );
          }}
        >
          درخواست مرجوعی
        </div>
      );
    }
  }
  render() {
    let items = this.props.orders.items;
    console.log(items);
    return (
      <React.Fragment>
        <TitleBox>همه سفارش ها</TitleBox>
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
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.created_at}</td>
                  <td>
                    {this.priceView(item.payable_price)}
                    <span className="currency">تومان</span>
                  </td>
                  <td>
                    {this.priceView(item.sum_of_prices)}
                    <span className="currency">تومان</span>
                  </td>
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
        </OrdersBox>
      </React.Fragment>
    );
  }
}
const mapStateToProps = store => {
  return {
    orders: store.Order
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getOrder: () => {
      dispatch(getOrder());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
