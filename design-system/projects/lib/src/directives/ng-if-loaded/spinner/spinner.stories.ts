import {SpinnerComponent} from './spinner.component';
import {Meta} from '@storybook/angular/types-6-0';
import {Story} from '@storybook/angular';

export default {
  title: 'Prisma/Stories/Spinner',
  component: SpinnerComponent,
} as Meta;

export const Template: Story<SpinnerComponent> = (args) => ({
  props: args,
  template: `
    <div *ngIfLoaded="flag">
        Conteúdo normal
    </div>
  `
});

export const defaultArgs = {
  flag: true
};

export const DefaultSpinner = Template.bind({});
DefaultSpinner.args = {
  ...defaultArgs
};
