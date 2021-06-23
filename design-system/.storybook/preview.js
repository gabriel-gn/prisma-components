import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

import '!style-loader!css-loader!sass-loader!./../projects/components/src/styles/base_css.scss';
import '!style-loader!css-loader!sass-loader!./../projects/components/src/styles/base.scss';

import main from '!style-loader?injectType=lazyStyleTag!css-loader!sass-loader!./../projects/components/src/styles/themes/default/theme.scss';
import light from '!style-loader?injectType=lazyStyleTag!css-loader!sass-loader!./../projects/components/src/styles/themes/light/theme.scss';
import dark from '!style-loader?injectType=lazyStyleTag!css-loader!sass-loader!./../projects/components/src/styles/themes/dark/theme.scss';

setCompodocJson(docJson);

export const decorators = [
  cssVariablesTheme,
];

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssVariables: {
    files: {
      main,
      light,
      dark
    }
  }
}
