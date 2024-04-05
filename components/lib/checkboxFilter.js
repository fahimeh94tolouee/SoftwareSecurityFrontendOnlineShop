import React, { useState } from "react";
import Checkbox from "./checkbox";
import SearchInput from "./searchInput";
const CheckBoxFilter = props => {
  const [items, setItems] = useState(props.items);

  /**
   * Handle checkbox status
   * @param {String} slug
   * @param {String} value
   * @return {Boolean}
   */
  const checkBoxStatus = (slug, value) => {
    if (props.filtered[slug].indexOf(value) >= 0) {
      return true;
    } else {
      return false;
    }
  };

  const search = key => {
    const result = props.items.filter(item => {
      if (item.name.match(new RegExp(key + ".*"))) {
        return item;
      } else if (item.name_en !== null) {
        if (item.name_en.match(new RegExp(key + ".*"))) {
          return item;
        }
      }
    });
    setItems(result);
  };
  const searchBox = () => {
    if (props.search) {
      return (
        <div className="checkbox-filter-search">
          <SearchInput
            value=""
            fly
            placeholderTag="برند"
            onChange={value => {
              search(value);
            }}
          />
        </div>
      );
    }
  };
  return (
    <React.Fragment>
      {searchBox()}
      <div className="content">
        {items.map((element, key) => {
          return (
            <div
              key={key}
              className="check-section"
              onClick={() => {
                props.onChange(element.id);
              }}
            >
              <Checkbox
                title={element.name}
                status={checkBoxStatus(props.slug, element.id)}
              />
              <span className="en-name">{element.name_en}</span>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default CheckBoxFilter;
