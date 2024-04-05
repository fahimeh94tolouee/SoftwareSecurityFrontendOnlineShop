import React from "react";
import { Box } from "../../styled_components/lib/productBox";
import Link from "next/link";
const ProductBox = props => {
  const product = props.product;
  const colors = () => {
    let colors = product.colors.slice(0, 3);
    let more = product.colors.length - 3;
    return (
      <ul className="colors">
        {colors.map((item, key) => (
          <li style={{ backgroundColor: item }} key={key} />
        ))}
        <span>{more > 0 ? "+" + more : ""}</span>
      </ul>
    );
  };
  const Price = price => {
    if (price.old) {
      return (
        <React.Fragment>
          <span className="discount">%{price.discount}</span>
          <span className="old">
            {price.old.toLocaleString("fa-IR")}
            <span className="currency">تومان</span>
          </span>
          <span className="new">
            {price.new.toLocaleString("fa-IR")}
            <span className="currency">تومان</span>
          </span>
        </React.Fragment>
      );
    } else if (price.new === 0) {
      return (
        <span className="unavailable">
          <span>ناموجود</span>
        </span>
      );
    } else {
      return (
        <React.Fragment>
          {price.new.toLocaleString("fa-IR")}
          <span className="currency">تومان</span>
        </React.Fragment>
      );
    }
  };
  const offer = () => {
    if (product.discount_percent > 0) {
      return <span className="offer">فروش ویژه</span>;
    }
  };
  const shopName = () => {
    if (product.seller !== undefined) {
      return (
        <div className="seller-name">فروشنده: {product.seller.shop_name}</div>
      );
    }
  };
  return (
    <Box>
      <div className="inner">
        <div className="image-box">
          <div className="images">
            <Link
                as={`/product/${product.id}`}
                href={`/product?id=${product.id}`}
            >
            {(typeof product.main_image.path !=='undefined')?
                <img src={product.main_image.path} alt={product.name} />
            :''}
            </Link>
          </div>
          {colors()}
          {offer()}
        </div>
        <div className="title">
          <Link
            as={`/product/${product.id}`}
            href={`/product?id=${product.id}`}
          >
            <a>{product.name}</a>
          </Link>
        </div>
        <div className="detail">
          <div className="seller">{shopName()}</div>
          <div className="price">
            {Price({
              old: product.old_price,
              new: product.price,
              discount: product.discount_percent
            })}
          </div>
        </div>
      </div>
    </Box>
  );
};
export default ProductBox;
