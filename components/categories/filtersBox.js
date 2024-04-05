import React from "react";
import FixedFilterBox from "../lib/fixedFilterBox";
import AccordionFilterBox from "../lib/accordionFilterBox";
import Switch from "react-switch";
import Checkbox from "../lib/checkbox";
import Range from "../lib/range";
import ListFilter from "../lib/listFilter";
import SearchInput from "../lib/searchInput";
import CheckboxFilter from "../lib/checkboxFilter";

export const FilterBox = props => {
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
  /**
   * Create filters templates by type
   * @return {jsx}
   */
  const content = () => {
    const item = props.data;
    switch (item.type) {
      case "checkbox":
        if(props.loading){
          return <div/>
        }
        return (
          <AccordionFilterBox title={props.data.title} status={item.box_status}>
            <CheckboxFilter
              items={item.items}
              slug={item.slug}
              filtered={props.filtered}
              search={item.search_box}
              onChange={value => {
                props.onChange("checkbox", item.slug, value);
              }}
            />
          </AccordionFilterBox>
        );
      case "colors":
        return (
          <AccordionFilterBox title={props.data.title} status={item.box_status}>
            <div className="content">
              {item.items.map((element, key) => {
                return (
                  <div
                    key={key}
                    className="check-section"
                    onClick={() => {
                      props.onChange("checkbox", item.slug, element.id);
                    }}
                  >
                    <Checkbox
                      title={element.name}
                      status={checkBoxStatus(item.slug, element.id)}
                    />
                    <span
                      className="color"
                      style={{ backgroundColor: element.hex_color_code }}
                    />
                  </div>
                );
              })}
            </div>
          </AccordionFilterBox>
        );
      case "range":
        let domain = false;
        props.filters.forEach(element => {
          if (element.slug === item.slug) {
            if (element.items.min > 0 || element.items.max > 0) {
              domain = [element.items.min, element.items.max];
            }
          }
        });
        if (domain) {
          return (
            <AccordionFilterBox
              title={props.data.title}
              status={item.box_status}
            >
              <div className="content">
                <Range
                  onChange={value => {
                    props.onChange("range", item.slug, value);
                  }}
                  domain={[item.items.min, item.items.max]}
                  values={domain}
                />
              </div>
            </AccordionFilterBox>
          );
        }
        return null;
      case "list":
        return (
          <FixedFilterBox title={props.data.title}>
            <ListFilter
              currentCategory={props.currentCategory}
              items={item.items}
            />
          </FixedFilterBox>
        );
      case "boolean":
        return (
          <FixedFilterBox>
            <div className="switch">
              <div>{item.title}</div>
              <div className="but">
                <Switch
                  height={24}
                  width={47}
                  offColor="#7d7d7d"
                  onColor="#3364ad"
                  checked={props.filtered[item.slug]}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onChange={() => {
                    props.onChange("boolean", item.slug);
                  }}
                />
              </div>
            </div>
          </FixedFilterBox>
        );
      case "search_box":
        if(props.loading){
          return <div/>
        }
        return (
          <FixedFilterBox>
            <div className="search">
              <SearchInput
                value={
                  props.filtered[item.slug] !== undefined
                    ? props.filtered[item.slug]
                    : ""
                }
                placeholderTag="برند یا محصول"
                onChange={value => {
                  props.onChange("search_box", item.slug, value);
                }}
              />
            </div>
          </FixedFilterBox>
        );
      default:
        return null;
    }
  };
  return content();
};
export default FilterBox;
