import React, { useState } from "react";
import Link from "next/link";
import { Box } from "../../styled_components/compare/productBox";
import EventListener from "react-event-listener";
const ProductBox = props => {
  const [fixStatus, setFixStatus] = useState(false);
  const searchView = () => {
    if (props.products.length < 4) {
      return (
        <div className="search-box">
          <div className="search-but" onClick={props.openModal}>
            <i className="icon-box-4" />
            برای افزودن کالا به لیست مقایسه کلیک کنید
          </div>
          <div className="but" onClick={props.openModal}>افزودن کالا به مقایسه</div>
        </div>
      );
    }
  };
  const priceView = price => {
    if (price === "null" || price === null) {
      return <span>ناموجود</span>;
    } else {
      let faPrice = price.toLocaleString("fa-IR");
      return (
        <React.Fragment>
          {faPrice}
          <span>تومان</span>
        </React.Fragment>
      );
    }
  };
  const handleScroll = e => {
    if (e.path[1]["pageYOffset"] < 260) {
      setFixStatus(false);
    } else {
      setFixStatus(true);
    }
  };
  if (props.products.length <= 0) {
    return null;
  } else {
    return (
      <React.Fragment>
        <Box fix={fixStatus}>
          <EventListener target="window" onScroll={handleScroll} />
          <div className="inner">
            {props.products.map(product => (
              <div className="box" key={product.id}>
                <div className="close" onClick={()=>{
                  props.removeOne(product.id);
                }}>
                  <i className="icon-close" />
                </div>
                <img src={product.main_image.path} />
                <div className="title">{product.name}</div>
                <div className="price">{priceView(product.price)}</div>
                <Link
                  href={`/product?id=${product.id}`}
                  as={`/product/${product.id}`}
                >
                  <div className="but">مشاهده و خرید محصول</div>
                </Link>
              </div>
            ))}
            {searchView()}
          </div>
        </Box>
      </React.Fragment>
    );
  }
};
export default ProductBox;
