import type {StorybookConfig} from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    // "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/**/*.stories.@(mdx)"],
  staticDirs: ['public'],
  addons: [
    // "storybook-ng-source-addon",
    "@storybook/addon-links", {
      name: '@storybook/addon-essentials',
      options: {
        actions: false
      }
    }, "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;
