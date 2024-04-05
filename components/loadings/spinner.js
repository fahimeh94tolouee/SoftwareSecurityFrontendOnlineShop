import React from "react";
import { SpinnerContainer } from "../../styled_components/loading/spinner";

export const Spinner = props => {
  return (
    <SpinnerContainer
      color={props.color}
      borderless={props.borderless}
      btn={props.btn}
      type={props.type}
      size={props.size}
    >
      <div className="loader" />
    </SpinnerContainer>
  );
};
