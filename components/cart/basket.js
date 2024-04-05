import React from "react";
import NumberSelect from "../lib/numberSelect";
import { BasketBox } from "../../styled_components/cart";
const Basket = props => {
  const offer = old_price => {
    if (typeof old_price !== "undefined" && old_price > 0) {
      return <span className="offer">فـروش ویـژه</span>;
    }
  };
  const price = (price, old_price, discount_amount) => {
    if (typeof old_price !== "undefined" && old_price > 0) {
      return (
        <React.Fragment>
          <span className="old-price">
            {old_price.toLocaleString("en")}
            <span className="currency">CAD</span>
          </span>
          <span className="discount">
            <span>({discount_amount.toLocaleString("en")})</span>
            تخفیف فروش ویژه
          </span>
          <span className="price">
            {price.toLocaleString("en")}
            <span className="currency">CAD</span>
          </span>
        </React.Fragment>
      );
    } else {
      return (
        <span className="price">
          {price.toLocaleString("en")}
          <span className="currency">CAD</span>
        </span>
      );
    }
  };
  return (
    <BasketBox>
      <span className="title">Cart</span>
      <table>
        <tbody>
          {props.items.map(item => (
            <tr key={item.id}>
              <td>
                {offer(item.old_price)}
                <i
                  className="icon-close close"
                  onClick={() => {
                    props.removeItem(item.id);
                  }}
                />
              </td>
              <td className="image">
                <a href={`/product/${item.product_id}`} target="_blank">
                  <img src={item.main_image.path} alt={item.name} />
                </a>
              </td>
              <td className="details">
                <ul>
                  <li>
                    <a href={`/product/${item.product_id}`} target="_blank">
                      <span>{item.name}</span>
                    </a>
                  </li>
                  <li className="seller">فروشنده :{item.seller.shop_name}</li>
                  <li className="guarantee">{item.guarantee.short_desc}</li>
                  <li className="color">
                    <span
                      style={{ backgroundColor: item.color.hex_color_code }}
                    />
                    رنگ :{item.color.name}
                  </li>
                </ul>
              </td>
              <td className="number">
                <NumberSelect
                  value={item.quantity}
                  max={item.max_per_order}
                  title="تعداد"
                  onChange={value => {
                    props.changeAmount(item.id, value);
                  }}
                />
              </td>
              <td className="value">
                {price(item.price, item.old_price, item.discount_amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </BasketBox>
  );
};
export default Basket;
