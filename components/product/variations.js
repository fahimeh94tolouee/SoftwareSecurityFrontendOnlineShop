import React, { useState } from "react";
import { Box } from "../../styled_components/product/variations";
const Variations = props => {
  const [status, setStatus] = useState(false);
  const leadTime = value => {
    if (value === 0) {
      return <span className="delivery">آماده ارسال</span>;
    } else {
      return (
        <span className="delivery notice">ارسال از {value} روز آینده</span>
      );
    }
  };
  const view = item => {
    return (
      <tr key={item.id}>
        <td>
          <a href="#" className="brand-link">
            {item.seller.shop_name}
          </a>
          <span className="like">
            رضایت خرید: {item.seller.seller_rate} % از (
            {item.seller.number_of_rating_votes}) رای
          </span>
        </td>
        <td>
          {leadTime(item.lead_time)}
          <span className="packaging">
            {item.packing.title}
            <span className="tooltip">{item.packing.tooltip}</span>
          </span>
        </td>
        <td>
          <span className="guarantee">{item.guarantee.name}</span>
        </td>
        <td>
          <span className="price">{item.price.toLocaleString("fa-IR")}</span>
          <span className="curenncy">تومان</span>
        </td>
        <td>
          <div className="add-to-cart">افزودن به سبد خرید</div>
        </td>
      </tr>
    );
  };
  let listItems = () => {
    let result = [];
    if (status) {
      for (let index = 0; index < props.items.length; index++) {
        if (index !== 0) {
          if (typeof props.items[index] !== "undefined") {
            result.push(view(props.items[index]));
          }
        }
      }
    } else {
      for (let index = 0; index < 4; index++) {
        if (index !== 0) {
          if (typeof props.items[index] !== "undefined") {
            result.push(view(props.items[index]));
          }
        }
      }
    }
    return result;
  };
  const moreText = () => {
    if (status) {
      return (
        <span
          className="close"
          onClick={() => {
            setStatus(!status);
          }}
        >
          بستن
        </span>
      );
    } else {
      return (
        <span
          onClick={() => {
            setStatus(!status);
          }}
        >
          مشاهده +{props.items.length - 3} فروشنده / گارانتی بیشتر
        </span>
      );
    }
  };
  const more = () => {
    if (props.items.length > 4) {
      return <div className="more">{moreText()}</div>;
    }
  };

  if (props.items.length <= 1) {
    return null;
  } else {
    return (
      <div className="container">
        <Box boxStatus={props.items.length > 4 ? true : false}>
          <table>
            <thead>
              <tr>
                <th>نام فروشنده</th>
                <th>زمان ارسال</th>
                <th>گارانتی</th>
                <th>قیمت</th>
                <th />
              </tr>
            </thead>
            <tbody>{listItems()}</tbody>
          </table>
          {more()}
        </Box>
      </div>
    );
  }
};
export default Variations;
