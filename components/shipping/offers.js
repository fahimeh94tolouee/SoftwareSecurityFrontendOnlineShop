import React, { useState } from "react";
import { Row, Col } from "styled-bootstrap-grid";
import { OfferBox } from "../../styled_components/shipping";
const Offers = props => {
  const [coupon, setCoupon] = useState("");
  const [gift, setGift] = useState("");
  const couponView = () => {
    if (props.gift) {
      return (
        <Col col={6}>
          <OfferBox>
            <strong>استفاده از کد تخفیف مال نو</strong>
            <span className="slogan">
              با ثبت کد تخفیف، مبلغ کد تخفیف از “مبلغ قابل پرداخت” کسر می‌شود.
            </span>
            <div className="form">
              <input
                value={coupon}
                placeholder="کد تخفیف را وارد نمایید"
                onChange={e => {
                  setCoupon(e.target.value);
                }}
              />
              <div
                className="but"
                onClick={() => {
                  props.setOffer(coupon, "coupon_code");
                }}
              >
                ثبت کد تخفیف
              </div>
            </div>
          </OfferBox>
        </Col>
      );
    }
  };
  const giftView = () => {
    if (props.gift) {
      return (
        <Col col={6}>
          <OfferBox>
            <strong>استفاده از کارت هدیه مال نو</strong>
            <span className="slogan">
              با ثبت کد کارت هدیه، مبلغ کارت هدیه از “مبلغ قابل پرداخت” کسر
              می‌شود.
            </span>
            <div className="form">
              <input
                value={gift}
                placeholder="کد هدیه را وارد نمایید"
                onChange={e => {
                  setGift(e.target.value);
                }}
              />
              <div
                className="but"
                onClick={() => {
                  props.setOffer(gift, "gift_card");
                }}
              >
                ثبت کد هدیه
              </div>
            </div>
          </OfferBox>
        </Col>
      );
    }
  };
  return (
    <Row>
      {couponView()}
      {giftView()}
    </Row>
  );
};
export default Offers;
