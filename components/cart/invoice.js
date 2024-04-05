import React from "react";
import { InvoiceBox } from "../../styled_components/cart";
const Invoice = props => {
  const convertNumber = value => {
    if (typeof value !== "undefined") {
      return value.toLocaleString("en");
    }
  };
  const shippingCostView = cost => {
    if (typeof cost !== "undefined") {
      if (cost < 0) {
        return (
          <React.Fragment>
            <span>Dependent on Address</span>
            <i className="icon-round-help-button" />
          </React.Fragment>
        );
      } else if (cost === 0) {
        return <span>Free</span>;
      } else {
        return (
          <React.Fragment>
            <span>{cost.toLocaleString("en")}</span>
            <span>CAD</span>
          </React.Fragment>
        );
      }
    }
  };
  return (
    <InvoiceBox>
      <table>
        <tbody>
          <tr>
            <td>Total Amount ({props.data.product_count} items)</td>
            <td>
              <span>{convertNumber(props.data.sum_of_old_prices)}</span>
              <span>CAD</span>
            </td>
          </tr>
          <tr className="blue">
            <td>Your Profit from this Purchase</td>
            <td>
              <span>({props.data.discount_percent}٪)</span>
              <span>{convertNumber(props.data.total_discount_amount)}</span>
              <span>CAD</span>
            </td>
          </tr>
          <tr>
            <td>Shipping Cost</td>
            <td>{shippingCostView(props.data.shipping_cost)}</td>
          </tr>
        </tbody>
      </table>
      <div className="action">
        <span className="price-notice">Payment Amount</span>
        <div className="price">
          {convertNumber(props.data.sum_of_prices)}
          <span>CAD</span>
        </div>
        <div
          className={`but ${props.stepStatus ? "" : "disable"}`}
          onClick={() => {
            if(props.stepStatus){
              props.nextStep();
            }
          }}
        >
          Continue to Checkout
        </div>
        <div className="comment">
          The items in your cart are not registered yet. Complete the next steps to place your order.
          <i className="icon-round-help-button" />
        </div>
      </div>
    </InvoiceBox>
  );
};
export default Invoice;
