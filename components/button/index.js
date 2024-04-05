import React from "react";
import { Box, Children, Loading } from "../../styled_components/button";
import { Spinner } from "../loadings/spinner";

export default props => {
  const { borderless, loading, ...other } = props;
  return (
    <Box btn={props.btn} borderless={borderless} active={props.active}>
      <button
        {...other}
        onClick={
          !props.onClick
            ? props.onClick
            : !loading
              ? e => {
                e.stopPropagation();
                props.onClick(e);
              }
              : e => {
                e.preventDefault();
                return false;
              }
        }
        disabled={props.disabled}
      >
        <Loading show={loading}>
          <Spinner />
        </Loading>
        <Children show={!loading}>{props.children}</Children>
      </button>
    </Box>
  );
};
