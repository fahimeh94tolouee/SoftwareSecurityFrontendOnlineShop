import React from "react";
import { OrderSammaryBox } from "../../styled_components/shipping/orderSammary";
import SammaryCarousel from "./sammaryCarousel";
const OrderSammary = props => {
  if (props.items <= 0) {
    return null;
  }
  return (
    <OrderSammaryBox>
      <div className="title">خلاصـه سـفارش</div>
      <ul className="consignment">
        <li>
          <strong>مرسوله ۱ از ۱</strong>({props.meta.product_count} کالا)
        </li>
        <li>
          زمان ارسال
          <strong>{props.meta.shipping_date}</strong>
          <strong>{props.meta.shipping_time}</strong>
        </li>
        <li>
          نحوه ارسال
          <strong>{props.meta.shipping_type_title}</strong>
          {props.meta.shipping_type_subtitle}
        </li>
        <li>
          تاخیر در ارسال
          <strong>{props.meta.max_lead_time}</strong>
        </li>
        <li>
          هزینه ارسال
          <strong>{props.meta.shipping_cost}</strong>
        </li>
      </ul>
      <SammaryCarousel items={props.items} />
    </OrderSammaryBox>
  );
};
export default OrderSammary;
