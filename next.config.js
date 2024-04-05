const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        apiUrl: "http://127.0.0.1:8000",
      }
    };
  }

  return {
    env: {
      apiUrl: "http://127.0.0.1:8000",
    },
    webpack: function(cfg) {
      const originalEntry = cfg.entry;
      cfg.entry = async () => {
        const entries = await originalEntry();

        if (
          entries["main.js"] &&
          !entries["main.js"].includes("./polyfills.js")
        ) {
          entries["main.js"].unshift("./polyfills.js");
        }

        return entries;
      };

      return cfg;
    }
  };
};
