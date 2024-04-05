import React, { useState } from "react";
import { Box, Area, Arrows } from "../../styled_components/lib/numberSelect";
import EventListener from "react-event-listener";
const NumberSelect = props => {
  const [status, setStatus] = useState(false);
  const items = () => {
    let result = [];
    for (let index = 1; index <= props.max; index++) {
      result.push(index);
    }
    return result;
  };
  return (
    <Box>
      <EventListener
        target="window"
        onClick={() => {
          setStatus(false);
        }}
      />
      {props.title}
      <Area
        status={status}
        onClick={e => {
          e.stopPropagation();
          setStatus(!status);
        }}
      >
        {props.value}
        <ul className="tool">
          {items().map(item => (
            <li
              key={item}
              onClick={() => {
                if (item !== props.value) {
                  props.onChange(item);
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </Area>
      <Arrows>
        <li
          onClick={() => {
            if (props.value < props.max) {
              props.onChange(props.value + 1);
            }
          }}
        />
        <li
          onClick={() => {
            if (props.value > 1) {
              props.onChange(props.value - 1);
            }
          }}
        />
      </Arrows>
    </Box>
  );
};
export default NumberSelect;
