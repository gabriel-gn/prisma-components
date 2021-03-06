module.exports = {
  "stories": [
    // "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/**/*.stories.@(mdx)"
  ],
  "staticDirs": ['public'],
  "addons": [
    // "storybook-ng-source-addon",
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false
      }
    },
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  }
}
