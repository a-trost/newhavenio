const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, _mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Support absolute imports
  config.resolve.modules.push(path.resolve(__dirname, '../src'));

  // Return the altered config
  return config;
};
