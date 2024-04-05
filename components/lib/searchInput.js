import React, { useState } from "react";
import { Box } from "../../styled_components/lib/searchInput";
const SearchInput = props => {
  const [value, setValue] = useState(props.value);
  return (
    <Box>
      <input
        value={value}
        type="text"
        onChange={e => {
          setValue(e.target.value);
          if (props.fly) {
            props.onChange(e.target.value);
          }
        }}
        onKeyPress={e => {
          if (e.charCode === 13) {
            props.onChange(value);
          }
        }}
        placeholder={`نام ${props.placeholderTag} مورد نظر را بنویسید...`}
      />
      <button
        onClick={() => {
          props.onChange(value);
        }}
      />
    </Box>
  );
};

export default SearchInput;
