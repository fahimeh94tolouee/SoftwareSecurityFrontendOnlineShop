import React, { useState } from "react";
import { BasketBox } from "../../styled_components/shipping/basket";
import ProductCarousel from "./productCarousel";
import RadioButton from "../lib/radioButton";
const Basket = props => {
  const [dayStatus, setDayStatus] = useState(0);
  const shippingView = () => {
    if (typeof props.meta.shipping_types !== "undefined") {
      return props.meta.shipping_types.map(item => {
        switch (item.type) {
          case "time_table":
            return (
              <div className="express-box" key={item.id}>
                <ul className="data">
                  <li>{item.text}</li>
                  <li>هزینه ارسال: {item.content.shipping_cost}</li>
                </ul>
                <div className="time-box">
                  <ul className="steps">
                    {item.content.data.map((day, key) => {
                      return (
                        <li
                          className={dayStatus === key ? "active" : ""}
                          key={key}
                          onClick={() => {
                            setDayStatus(key);
                          }}
                        >
                          <span className="day">{day.day_of_the_week}</span>
                          <span className="date">{day.date}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <ul className="times">
                    {item.content.data[dayStatus].items.map(time => (
                      <li key={time.id}>
                        <div
                          onClick={() => {
                            props.change_shipping_type(item.id, time.id);
                          }}
                        >
                          <RadioButton
                            title={`ساعت ${time.from} تا ${time.to}`}
                            status={
                              time.id === props.shipping_time_scope_id
                                ? true
                                : false
                            }
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          case "box":
            return (
              <div className="iran-post" key={item.id}>
                <div className="slogan">{item.text}</div>
                <div className="inner">
                  <div
                    onClick={() => {
                      props.change_shipping_type(item.id);
                    }}
                  >
                    <RadioButton
                      img={item.content.image}
                      status={item.id === props.shipping_type ? true : false}
                    />
                  </div>

                  <div className="data">
                    <span>{item.content.title}</span>
                    <ul>
                      <li>{item.content.text}</li>
                      <li>هزینه ارسال: {item.content.shipping_cost}</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          default:
            return null;
        }
      });
    }
  };
  return (
    <BasketBox>
      <div className="title">سبد خرید شما</div>
      <ProductCarousel items={props.items} />
      <div className="send-title">لطفا زمان ارسال را انتخاب بفرمایید</div>
      {shippingView()}
    </BasketBox>
  );
};
export default Basket;
