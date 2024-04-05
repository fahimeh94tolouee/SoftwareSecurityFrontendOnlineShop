import React from "react";
import Box from "../../styled_components/lib/radioButton";
const RadioButton = props => {
  return (
    <Box status={props.status}>
      {props.title}
      {props.img ? <img src={props.img} /> : ""}
    </Box>
  );
};
export default RadioButton;
