import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '!style-loader!css-loader!sass-loader!./../projects/components/src/styles/base_css.scss';
import '!style-loader!css-loader!sass-loader!./../projects/components/src/styles/base.scss';

setCompodocJson(docJson);

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
