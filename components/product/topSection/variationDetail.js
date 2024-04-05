import React from "react";
import Price from "./price";
import SwitchBox from "./switchBox";
const VariationDetail = props => {
  const sellerCount = () => {
    if (props.status > 1) {
      return <span>{props.status - 1}+ فروشنده دیگر</span>;
    }
  };
  if (props.status > 0) {
    return (
      <React.Fragment>
        <ul>
          <li className="seller">
            فروشنده : {props.variation["seller"]["shop_name"]}
            {sellerCount()}
          </li>
          <li className="seller_rate">
            رضایت خرید :‌ %{props.variation["seller"]["seller_rate"]}
            <div className="bar">
              <span
                style={{
                  width: props.variation["seller"]["seller_rate"] + "%"
                }}
              />
            </div>
          </li>
          <li className="switch">
            <SwitchBox
              type={props.switchType}
              switches={props.switches}
              active={props.variation.color_id}
              onChange={props.variationChange.bind(this)}
            />
          </li>
        </ul>
        <Price {...props.variation} />
      </React.Fragment>
    );
  } else {
    return (
      <div className="unavailable">
        <span>
          متاسفانه این کالا در حال حاضر موجود نیست. می‌توانید از طریق لیست بالای
          صفحه، از محصولات مشابه این کالا دیدن نمایید
        </span>
      </div>
    );
  }
};
export default VariationDetail;
