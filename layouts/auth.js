import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { Fotter, Box } from "../styled_components/layouts/auth";
const Auth = props => {
  return (
    <React.Fragment>
      <Box>
        <div className="logo">
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
        {props.children}
        <Fotter>
          <div className="links">
            <a href="#" target="_blank">
              About Maleno
            </a>
            <a href="#" target="_blank">
              Contact Us
            </a>
            <a href="#" target="_blank">
              Sale on Maleno
            </a>
          </div>
          <div className="copyright">
            All rights to this store belong to Maleno, and copying from this store will be legally pursued.
            <br />
            Copyright © 2024 - Maleno.com
          </div>
        </Fotter>
      </Box>

    </React.Fragment>
  );
};
const mapStateToProps = store => {
  return {
    initial: store.Initial
  };
};
export default connect(mapStateToProps)(Auth);
