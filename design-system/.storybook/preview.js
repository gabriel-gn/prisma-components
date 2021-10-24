import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

import '!style-loader!css-loader!sass-loader!../projects/lib/src/styles/base_css.scss';
import '!style-loader!css-loader!sass-loader!../projects/lib/src/styles/base.scss';

import main from '!style-loader?injectType=lazyStyleTag!css-loader!sass-loader!../projects/lib/src/styles/themes/default/theme.scss';
import light from '!style-loader?injectType=lazyStyleTag!css-loader!sass-loader!../projects/lib/src/styles/themes/light/theme.scss';
import dark from '!style-loader?injectType=lazyStyleTag!css-loader!sass-loader!../projects/lib/src/styles/themes/dark/theme.scss';

setCompodocJson(docJson);

export const decorators = [
  cssVariablesTheme,
];

export const parameters = {
  // layout: 'centered',
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
  },
  badgesConfig: {
    stable: {
      contrast: '#FFF',
      color: '#0a8701',
      title: 'Stable'
    },
    beta: {
      contrast: '#FFF',
      color: '#018786',
      title: 'Beta'
    },
    deprecated: {
      contrast: '#d02828',
      color: '#ffffff',
      title: 'Deprecated'
    }
  }
}
