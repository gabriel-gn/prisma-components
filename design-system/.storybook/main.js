const path = require('path');

module.exports = {
  "stories": [
    // "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../stories/**/*.stories.@(mdx)",
    "../projects/**/lib/**/*.stories.@(mdx)"
  ],
  "addons": [
    "storybook-ng-source-addon",
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    "@etchteam/storybook-addon-css-variables-theme",
    "@geometricpanda/storybook-addon-badges",
  ],
  builder: 'webpack5',
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader', 'raw-loader'],
      include: path.resolve(__dirname, './'),
    });

    // Return the altered config
    return config;
  }
}
