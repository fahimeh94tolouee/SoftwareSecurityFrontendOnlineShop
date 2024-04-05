const Variables = {
  colors: {
    background: "#fafafa",
    white: "#fff",
    dark_white: "#f6f6f6",
    light_white: "#fafafa",
    black: "#000",
    font: "#666865",
    light_font: "#9c9e9f",
    dark_font: "#303030",
    footer_background: "#333",

    warm_grey: "#7d7d7d",
    warm_gery_2: "#9c9c9c",
    medium_grey: "#666865",
    light_grey: "#e2e2e2",
    thin_grey: "#f0f0f0",
    pinkish_grey: "#cfcfcf",
    nice_blue: "#0f4da8",
    windows_blue: "#3364ad",
    cool_blue: "#547fbe",
    smooth_blue:"#f0f5fd",
    menu_link: "#666865",
    lipstick: "#cb1e4a",
    dusty_teal: "#4c8e8c",
    orang: "#fb930d",
    dark_red: "#a10e33",
    gold: "#efcf4a",
    dark_green_blue: "#174f49",
    light_green_blue: "#7fafaa",
    light_salmon: "#ffa57a",
    goldenrod: "#ffc600",
    dark_olive: "#a87f3c",
    amaranth: "#ea3462",
    red_violet: "#b81096",
    marine: "#072d66",

    grey_smooth: "#616568",
    grey_light: "#8c8c8c",
    menu_border: "#bdc3c7",
    placeholder: "#c6cbcf"
  },
  dimensions: {
    desktop_max_width: "1640px",
    desktop_min_width: "1040px"
  }
};
export const transition = time => {
  return "-webkit-transition: all " + time + "s;transition: all " + time + "s;";
};

export const rotate = value => {
  return (
    "-ms-transform: rotate(" +
    value +
    "deg);-webkit-transform: rotate(" +
    value +
    "deg);transform: rotate(" +
    value +
    "deg);"
  );
};

export const desktopWidthLimits = (arg = { min: true, max: true }) => {
  if (arg.max && arg.min) {
    return (
      "max-width:" +
      Variables.dimensions.desktop_max_width +
      ";min-width:" +
      Variables.dimensions.desktop_min_width +
      ";"
    );
  } else if (arg.min) {
    return "min-width:" + Variables.dimensions.desktop_min_width + ";";
  } else if (arg.max) {
    return "max-width:" + Variables.dimensions.desktop_max_width + ";";
  }
};

export default Variables;
