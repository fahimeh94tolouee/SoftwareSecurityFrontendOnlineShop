import React from "react";
const SwitchBox = props => {
  // console.log(props.switches);
  switch (props.type) {
    case "color":
      const more = () => {
        if (props.switches.length > 3) {
          return (
            <li className="more">
              {props.switches.length - 3 + "+ رنگ های بیشتر"}
            </li>
          );
        }
      };
      return (
        <ul className="color">
          {props.switches.map((item, key) => (
            <li
              key={key}
              className={props.active === item.id ? "active" : ""}
              onClick={() => {
                if (props.active !== item.id) {
                  props.onChange(item.id);
                }
              }}
            >
              <span style={{ backgroundColor: item.hex_color_code }} />
              {item.name}
            </li>
          ))}
          {more()}
        </ul>
      );

    default:
      return null;
  }
};
export default SwitchBox;
