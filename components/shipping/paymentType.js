import React from "react";
import { PaymentTypeBox } from "../../styled_components/shipping/paymentType";
import RadioButton from "../lib/radioButton";
const PaymentType = props => {
  const banks = () => {
    if (props.paymentType === "online") {
      return (
        <ul className="banks">
          {props.meta.ipgs.map(item => (
            <li
              key={item.id}
              onClick={() => {
                props.changeBank(item.id);
              }}
              className={props.bankId === item.id ? "active" : ""}
            >
              <img src={item.image} alt={item.name} />
            </li>
          ))}
        </ul>
      );
    }
  };
  const onlineView = () => {
    if (props.meta.online_payment) {
      return (
        <React.Fragment>
          <div
            className={`online ${
              props.paymentType === "online" ? "active" : ""
            }`}
          >
            <div
              onClick={() => {
                props.changePaymentType("online");
              }}
              className="radio"
            >
              <RadioButton
                status={props.paymentType === "online" ? true : false}
              />
            </div>
            <i className="icon-pay-2" />
            <div className="content">
              <strong>
                پرداخت اینترنتی ( آنلاین با تمامی کارت‌های بانکی )
              </strong>
              سرعت بیشتر در ارسال و پردازش سفارش
            </div>
          </div>
          {banks()}
        </React.Fragment>
      );
    }
  };
  const cashView = () => {
    if (props.meta.cash_on_delivery) {
      return (
        <div className={`cash ${props.paymentType === "cash" ? "active" : ""}`}>
          <div
            onClick={() => {
              props.changePaymentType("cash");
            }}
            className="radio"
          >
            <RadioButton status={props.paymentType === "cash" ? true : false} />
          </div>
          <i className="icon-pay-3" />
          <div className="content">
            <strong>پرداخت در محل با کارت بانکی</strong>
            پرداخت در هنگام تحویل سفارش با تمامی کارت‌های بانکی عضو شبکه شتاب
          </div>
        </div>
      );
    }
  };
  return (
    <PaymentTypeBox>
      <div className="title">انتخاب شیـوه پرداخت</div>
      {onlineView()}
      {cashView()}
    </PaymentTypeBox>
  );
};
export default PaymentType;
