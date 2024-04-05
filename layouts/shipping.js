import React from "react";
import Link from "next/link";
import { Top, ToTop } from "../styled_components/layouts/shipping";
const Shipping = props => {
  return (
    <React.Fragment>
      <Top>
        <div className="container">
          <div className="logo" id="top">
            <Link href="/">
              <a>
                <img
                  src="/static/images/logo.png"
                  alt="Maleno Online Shop"
                  className="logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </Top>
      {props.children}
      <ToTop>
        <a href="#top">
            بازگشت به بالا صفحه
        </a>
      </ToTop>
    </React.Fragment>
  );
};
export default Shipping;
