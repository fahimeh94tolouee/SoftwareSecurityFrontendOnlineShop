import React, { useState } from "react";
import { Box } from "../../styled_components/lib/accordionFilterBox";
const AccordionFilterBox = props => {
  const [status, setStatus] = useState(props.status);
  return (
    <Box status={status}>
      <div
        className="title"
        onClick={() => {
          setStatus(!status);
        }}
      >
        <span>{props.title}</span>
        <span>
          <i className="baseicon-back" />
        </span>
      </div>
      {props.children}
    </Box>
  );
};
export default AccordionFilterBox;
